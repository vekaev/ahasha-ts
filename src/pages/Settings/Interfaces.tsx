export interface IUserData {
  avatar: string,
  firstName: string,
  lastName: string,
  userName: string,
  birthDay: {
    day: number,
    month: number,
    year: number,
    [index: string]: number
  },
  gender: string
}

export interface IModalDataProps {
  userData: IUserData;
  setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
  showModal(command: string): void;
}

export interface IUser {
  mainPhoto: string;
  quantityPosts: number;
  rank?: number;
  firstName: string;
  lastName: string;
  username: string;
  age: number | string;
  size: string;
  readonly fullName: string;
  readonly info: string;
}