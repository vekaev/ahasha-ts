import React from 'react';
import { observer } from 'mobx-react';
import { TestData } from "../../data";
import { Route, RouteChildrenProps, Switch } from 'react-router-dom';
import ProfileContainer from '../../containers/ProfileContainer.tsx/ProfileContainer';
import PostContainer from '../../containers/PostContainer/PostContainer';
export interface testDataProps extends RouteChildrenProps {
    test: TestData;
}

const Page = (props: testDataProps) => {
    return (
        <>
            <Switch>
                <Route exact path={`/:id/p/:id`}>
                    <PostContainer />
                </Route>
                <Route path={`/:id`}>
                    <ProfileContainer />
                </Route>
            </Switch>
        </>
    )

}

export const User = observer(Page);