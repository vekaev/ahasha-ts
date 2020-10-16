import { AxiosInstance } from 'axios';
import { observable } from 'mobx';
import { IProfile } from '../Interfaces';

export class Profile {
  private readonly request: AxiosInstance;

  @observable current: IProfile | null = null;
  @observable loading = {
    get: false,
  };

  constructor(request: AxiosInstance) {
    this.request = request;
  }

  async get(username: string) {
    this.loading.get = true;
    
    try {
      this.current = (await this.request.get(`/user/profile/${username}`)).data;
    } catch (exception) {
      console.error(exception);
    } finally {
      this.loading.get = false;
    }
  }
}