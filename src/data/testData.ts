import { observable } from 'mobx';
import { IUser } from '../pages/Settings/Interfaces';

export class testData {
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
    @observable anotherUser: any = {
        mainPhoto: 'https://images.unsplash.com/photo-1549570652-97324981a6fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
        quantityPosts: 14,
        firstName: 'Katya',
        lastName: 'Kiluga',
        username: 'katya_katya',
        age: '31',
        size: 'X-XL',
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        get info() {
            return `${this.age} years, ${this.size}`;
        },
    }

    posts = [
        {
            id: 1,
            likes: 91,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1525000277017-1acfe322f792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 2,
            likes: 1952,
            myLike: true,
            img: 'https://images.unsplash.com/photo-1579101098056-6bf296535b8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 3,
            likes: 123452,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1549570652-97324981a6fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 4,
            likes: 999999,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1525722212921-6e4e548016db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 5,
            likes: 99199,
            myLike: true,
            img: 'https://images.unsplash.com/photo-1591473692114-dfd4fd90f839?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 6,
            likes: 9,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1550524587-6bcdc279ad98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 7,
            likes: 999,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1591473696086-11d2478006f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 8,
            likes: 999,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1588358641419-458f7616cbf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 9,
            likes: 999,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1579101098070-c3f50dcbd312?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 10,
            likes: 999,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1524008298606-aad1dae6d4c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 11,
            likes: 999,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1553984658-d17e19aa281a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 12,
            likes: 999,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1583167460878-be6f241204a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 13,
            likes: 999,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1563993297290-609c9406efcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 14,
            likes: 999,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1516575150278-77136aed6920?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 15,
            likes: 999,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1551310355-b0cfa1572b5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 16,
            likes: 999,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1551310357-b26c1af069c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
    ]

    @observable postsAnotherUser = [
        {
            id: 1,
            likes: 91,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1525000277017-1acfe322f792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 2,
            likes: 1952,
            myLike: true,
            img: 'https://images.unsplash.com/photo-1579101098056-6bf296535b8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 3,
            likes: 123452,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1549570652-97324981a6fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 4,
            likes: 999999,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1525722212921-6e4e548016db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 5,
            likes: 99199,
            myLike: true,
            img: 'https://images.unsplash.com/photo-1591473692114-dfd4fd90f839?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 6,
            likes: 9,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1550524587-6bcdc279ad98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 7,
            likes: 999,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1591473696086-11d2478006f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 8,
            likes: 999,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1588358641419-458f7616cbf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 9,
            likes: 999,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1579101098070-c3f50dcbd312?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 10,
            likes: 999,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1524008298606-aad1dae6d4c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 11,
            likes: 999,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1553984658-d17e19aa281a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 12,
            likes: 999,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1583167460878-be6f241204a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 13,
            likes: 999,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1563993297290-609c9406efcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
        {
            id: 14,
            likes: 999,
            myLike: false,
            img: 'https://images.unsplash.com/photo-1516575150278-77136aed6920?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
        },
    ]
}