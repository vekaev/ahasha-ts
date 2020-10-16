export interface IUserData {
  avatar: string;
  firstName: string;
  lastName: string;
  userName: string;
  birthDay: {
    day: number;
    month: number;
    year: number;
    [index: string]: number;
  };
  gender: string;
}

export interface IModalDataProps {
  userData: IUserData;
  setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
  showModal(command: string): void;
}

export interface IProfile {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  mainPhoto?: string;
  quantityPosts: number;
  rank?: number;
  firstName: string;
  lastName: string;
  username: string;
  birthday: string;
  age: number | string;
  size: string;
  gender?: string;
  readonly fullName: string;
  readonly info: string;
}