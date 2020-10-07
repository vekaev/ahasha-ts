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