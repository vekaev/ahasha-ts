import React from 'react';
import { observer } from 'mobx-react';
import { Post, Profile, Session } from "../../data";
import { Route, RouteChildrenProps, Switch } from 'react-router-dom';
import ProfileContainer from '../../containers/ProfileContainer.tsx/ProfileContainer';
import PostContainer from '../../containers/PostContainer/PostContainer';
export interface UserProps extends RouteChildrenProps {
  session: Session;
  post: Post;
  profile: Profile;
}

const Page = (props: UserProps) => {
  return (
    <>
      <Switch>
        <Route exact path={'/p/:postId'}>
          <PostContainer profile={props.profile} post={props.post} />
        </Route>
        <Route path={'/:username'}>
          <ProfileContainer post={props.post} profile={props.profile} session={props.session} />
        </Route>
      </Switch>
    </>
  )

}

export const User = observer(Page);