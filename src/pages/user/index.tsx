import React from 'react';
import { observer } from 'mobx-react';
import { testData } from "../../data";
import { Route, RouteChildrenProps, Switch } from 'react-router-dom';
import MyProfile from '../user/profile/myProfile/myProfile';
import MyPost from './profile/myPost/myPost';
export interface testDataProps extends RouteChildrenProps {
    test: testData;
}

const Page = (props: testDataProps) => {
    return (
        <>
            <Switch>
                <Route path='/u/username/p/:id'>
                    <MyPost />
                </Route>
                <Route path='/u/username'>
                    <MyProfile />
                </Route>
            </Switch>
        </>
    )

}

export const User = observer(Page);