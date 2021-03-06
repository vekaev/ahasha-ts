import React from 'react';
import { observer } from 'mobx-react';
import { TestData } from "../../data";
import { Route, RouteChildrenProps, Switch } from 'react-router-dom';
import ProfileContainer from '../../containers/ProfileContainer.tsx/ProfileContainer';
import PostContainer from '../../containers/PostContainer/PostContainer';
export interface testDataProps extends RouteChildrenProps {
    test: TestData;
}

const Page = (props: any) => {
    return (
        <>
            <Switch>
                <Route exact path={'/:username/p/:postId'}>
                    <PostContainer />
                </Route>
                <Route path={'/:username'}>
                    <ProfileContainer post={props.post} session={props.session} />
                </Route>
            </Switch>
        </>
    )

}

export const User = observer(Page);