import axios, { AxiosInstance } from 'axios';
import { observable } from 'mobx';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { IUser } from '../pages/settings/Interfaces';
import { IUserProfile } from './dto';

firebase.initializeApp({
  apiKey: 'AIzaSyCNcqMOGKEMZCmIJg0PQeV_IdWFi8DaxzY',
  authDomain: 'umbrella01-dev.firebaseapp.com',
  projectId: 'umbrella01-dev',
});

export class Session {

  private readonly auth: firebase.auth.Auth;
  private readonly api = 'http://192.168.0.104:5000/app';
  // private readonly api = 'https://api.ahasha.com/app';
  private request: AxiosInstance;

  @observable user: firebase.User | null = null;

  constructor() {
    this.auth = firebase.auth();
    this.request = this.guest();
  }

  // TODO: remove
  async sendSignInLink(form: any): Promise<void> {
    try {
      await this.guest().post('/auth/sign-in', {
        email: form.email,
      });
      localStorage.setItem('emailForSignIn', form.email);
    } catch (exception) {
      throw new Error(
        JSON.stringify({ field: 'email', code: 'email-not-found' }),
      );
    }
  }

  guest(): AxiosInstance {
    return axios.create({
      baseURL: this.api,
    });
  }

  async authorized(): Promise<AxiosInstance> {
    return axios.create({
      baseURL: this.api,
      headers: {
        authorization: `Bearer ${await this.auth.currentUser?.getIdToken()}`,
      },
    });
  }

  async waitLinkFromEmail() {
    const storedEmail = localStorage.getItem('emailForSignIn');

    if (!storedEmail) {
      return;
    }

    try {
      await this.auth.signInWithEmailLink(storedEmail, window.location.href);
      this.request = await this.authorized();
    } catch (exception) {
      console.error(exception);
    } finally {
      localStorage.removeItem('emailForSignIn');
      localStorage.removeItem('formForSignUp');
    }
  }

  subscribe(callback: firebase.Observer<any> | ((a: firebase.User | null) => any)) {
    this.auth.onAuthStateChanged(callback);
  }

  signOut(): Promise<void> {
    return this.auth.signOut();
  }

  updateProfile(form: IUserProfile) {
    return this.request.post('/user/profile', form);
  }
}

// new Session().sendSignInLink({ email: 'dsent.work@gmail.com' })
//     .then((req: any) => console.log(req))
//     .catch((err: any) => console.log(err));

export class TestData {
  @observable user: IUser = {
    mainPhoto: 'http://www.ahasha.com/img/auth-model-13.jpg',
    quantityPosts: 16,
    firstName: 'Anna',
    lastName: 'Hanney',
    username: 'anna_hanney',
    age: '25',
    size: 'S-M',
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    get info() {
      return `${this.age} years, ${this.size}`;
    },
  }
}
