import React from 'react';
import { observer } from 'mobx-react';
import { testData } from "../../data";
import { Redirect, Route, RouteChildrenProps, Switch } from 'react-router-dom';
import Post from './post/Post';
import ProfileContainer from '../../containers/ProfileContainer.tsx/ProfileContainer';
import { IUser } from '../Settings/Interfaces';
import PostContainer from '../../containers/PostContainer/PostContainer';
export interface testDataProps extends RouteChildrenProps {
    test: testData;
}

const Page = (props: testDataProps) => {
    const user: IUser = {
        mainPhoto: 'https://images.unsplash.com/photo-1591473696086-11d2478006f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
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


    return (
        <>
            <Switch>
                <Route exact path={`/u/:id/p/:id`}>
                    <PostContainer />
                </Route>
                <Route path={`/u/`}>
                    <ProfileContainer user={user} />
                </Route>
            </Switch>
        </>
    )

}

export const User = observer(Page);