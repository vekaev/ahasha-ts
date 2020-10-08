export interface IUserData  {
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
  userData:IUserData;
  setUserData : React.Dispatch<React.SetStateAction<IUserData>>;
  showModal(command : string):void;
}