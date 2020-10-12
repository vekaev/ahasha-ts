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
    return (
        <>
            <Switch>
                <Route exact path={`/u/:id/p/:id`}>
                    <PostContainer />
                </Route>
                <Route path={`/u/`}>
                    <ProfileContainer />
                </Route>
            </Switch>
        </>
    )

}

export const User = observer(Page);