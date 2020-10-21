import { AxiosInstance } from 'axios';
import { observable } from 'mobx';
import { IProfile } from '../Interfaces';

export class Profile {
  private readonly request: AxiosInstance;
  private readonly storage: any;

  @observable current: IProfile | null = null;
  @observable avatar: string | null = null;
  @observable loading = {
    get: false,
    avatar: false,
  };

  constructor(request: AxiosInstance, storage: any) {
    this.request = request;
    this.storage = storage;
  }

  async get(username: string) {
    this.loading.get = true;

    try {
      this.current = (await this.request.get(`/user/profile/${username}`)).data;

      if (this.current?.avatar) {
        this.loading.avatar = true;
        const storageRef = this.storage.ref(this.current.avatar);
        this.current.avatar = await storageRef.getDownloadURL();
        this.loading.avatar = false;
      }
    } catch (exception) {
      console.error(exception);
    } finally {
      this.loading.get = false;
    }
  }
}