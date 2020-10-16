import { AxiosInstance } from 'axios';
import { observable } from 'mobx';
import { CONFIG } from '../constants';
import { IPost, IPostAdd, IPostResourceType } from './dto';
import * as firebase from 'firebase/app';

const storage = firebase.storage();

export class Post {
  private readonly request: AxiosInstance;

  @observable current: IPost | null = null;
  @observable list: IPost[] = [];
  @observable loading = {
    list: false,
    one: false,
    upload: false,
  };

  constructor(request: AxiosInstance) {
    this.request = request;
  }

  async fetch(username?: string) {
    if (!username) {
      return;
    }

    this.loading.list = true;

    try {
      const list = (await this.request.get(`/post/list/${username}`)).data;

      this.list = await Promise.all(
        list.map(async (post: IPost) => {
          post.resources = await Promise.all(
            post.resources.map(async (resource) => {
              const storageRef = storage.ref(resource.origin);
              resource.origin = await storageRef.getDownloadURL();
              return resource;
            })
          );

          return post;
        }),
      );
    } catch (exception) {
      console.error(exception);
    } finally {
      this.loading.list = false;
    }
  }

  async one(id: string) {
    this.loading.one = true;

    try {
      this.current = (await this.request.get(`/post/${id}`)).data;
    } catch (exception) {
      console.error(exception);
    } finally {
      this.loading.one = false;
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
