import { observable } from 'mobx';
import { IUser } from '../pages/Settings/Interfaces';

export class TestData {
    @observable test: string = "HELLO GUYS";
    @observable user: IUser = {
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