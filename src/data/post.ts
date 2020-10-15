import { AxiosInstance } from 'axios';
import { observable } from 'mobx';
import { CONFIG } from '../constants';
import { IPost, IPostAdd, IPostResourceType } from './dto';

export class Post {
  private readonly request: AxiosInstance;

  @observable list: IPost[] = [];
  @observable loading = {
    list: false,
    upload: false,
  };

  constructor(request: AxiosInstance) {
    this.request = request;
  }

  async fetch() {
    this.loading.list = true;

    try {
      this.list = await this.request.get('/post');
    } catch (exception) {
      console.error(exception);
    } finally {
      this.loading.list = false;
    }
  }

  async add(data: IPostAdd) {
    this.loading.upload = true;

    try {
      const formData = new FormData();
      formData.set('file', data.resources[0]);
      const uploaded = await this.request.post('/storage/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        baseURL: CONFIG.API_URL,
      });

      await this.request.post('/post', {
        resources: [{
          origin: uploaded.data.name,
          type: IPostResourceType.IMAGE,
        }]
      } as IPost)
    } catch (exception) {
      console.error(exception);
    } finally {
      this.loading.upload = false;
    }
  }

}
