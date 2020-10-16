import axios, { AxiosInstance } from 'axios';
import { observable } from 'mobx';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-storage';
import { IUserProfile, SessionUser } from './dto';
import { CONFIG } from '../constants';

firebase.initializeApp({
  apiKey: 'AIzaSyCNcqMOGKEMZCmIJg0PQeV_IdWFi8DaxzY',
  authDomain: 'umbrella01-dev.firebaseapp.com',
  projectId: 'umbrella01-dev',
  storageBucket: 'gs://umbrella01-dev.appspot.com',
});

export class Session {

  readonly auth: firebase.auth.Auth;
  private request: AxiosInstance;

  @observable user: SessionUser = null;
  @observable profile: any | null = null;

  constructor() {
    this.auth = firebase.auth();
    this.request = this.guest();

    if (this.auth.currentUser) {
      this
        .authorized()
        .then((instance) => this.request = instance)
        .catch(console.error);
    }
  }

  // TODO: remove
  async sendSignInLink(form: { email: string }): Promise<void> {
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
      baseURL: CONFIG.API_APP_URL,
    });
  }

  async authorized(): Promise<AxiosInstance> {
    return axios.create({
      baseURL: CONFIG.API_APP_URL,
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

  subscribe(callback: (identity: firebase.User | null) => void): firebase.Unsubscribe {
    return this.auth.onAuthStateChanged(async (identity: firebase.User | null) => {
      if (identity) {
        this.request = await this.authorized();
      }

      callback(identity);
    });
  }

  signOut(): Promise<void> {
    return this.auth.signOut();
  }

  async getProfile() {
    this.profile = (await this.request.get('/user/profile')).data;
  }

  profileUpdate(form: IUserProfile) {
    return this.request.post('/user/profile', form);
  }

  getInstance() {
    return this.request;
  }
}

// new Session().sendSignInLink({ email: 'dsent.work@gmail.com' })
//     .then((req: any) => console.log(req))
//     .catch((err: any) => console.log(err));

export class TestData {
  @observable user: any = {
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
