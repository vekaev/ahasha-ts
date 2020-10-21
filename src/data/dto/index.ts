export interface IUserProfile {
  username: string;
  firstName: string;
  lastName: string;
  birthday: number;
}

export enum IPostResourceType {
  IMAGE = 'POST_IMAGE',
  VIDEO = 'POST_VIDEO',
}

export interface IPostResource {
  origin: string;
  type: IPostResourceType;
}

export interface IPost {
  description?: string;
  resources: IPostResource[];
}

export interface IPostAdd {
  description?: string;
  resources: FileList;
}

export type SessionUser = firebase.User | null;
