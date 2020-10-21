import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import MyProfile from '../../pages/user/my-profile/MyProfile';
import { Profile as IProfile, Session } from '../../data';
import { abbr } from '../../utils/abbr';
import { observer, useObserver } from 'mobx-react';
import { Loading } from '../../components/Loading/Loading';
import Profile from '../../pages/user/profile/Profile';
import { SessionContext } from '../../components/SessionContext/SessionContext';

interface IProfileContainerProps extends RouteComponentProps {
  profile: IProfile;
  session: Session;
  post: any;
}

const Component: React.FC<IProfileContainerProps> = ({
  history,
  match,
  post,
  profile: profileStore,
}) => {
  const { session }: any = useContext(SessionContext);
  const profile: any = session.profile;
  const params: any = match.params;

  if (!profile?.username && profile) {
    return null;
  }

  if (
    profile?.username === params.username ||
    `${profile?.username}/` === params.username
  ) {
    return (
      <MyProfileWrapper
        session={session}
        history={history}
        profile={profile}
        post={post}
      />
    );
  } else {
    return (
      <ProfileWrapper
        history={history}
        session={session}
        profile={profileStore}
        username={params.username}
        post={post}
      />
    );
  }
};

const MyProfileWrapper: React.FC<any> = (props) => {
  useEffect(() => {
    props.post?.fetch(props.session?.profile?.username);
  }, [props.post]);

  return useObserver(() =>
    !props.profile?.username && props?.post?.list ? (
      <Loading />
    ) : (
      <MyProfile
        posts={props.post.list}
        profile={props.profile}
        abbr={abbr(props.profile.firstName, props.profile.lastName)}
      />
    )
  );
};

const ProfileWrapper: React.FC<any> = (props) => {
  useEffect(() => {
    if (!props.session?.profile?.username) {
      props.profile.get(props.username);
    }
  }, []);

  useEffect(() => {
    props.profile.loading.avatar = true;
    props.profile?.get(props.username);
    props.post.fetch(props.username);
  }, [props.profile, props.post, props.username]);

  useEffect(() => {
    if (
      !props?.profile?.current &&
      !props?.profile?.loading.get &&
      props.username !== props?.profile?.current?.username &&
      props.username !== `${props?.profile?.current?.username}/`
    ) {
      props.history.replace(`/404`);
    }
  }, [props?.profile?.current, props?.profile?.loading.get, props?.username]);

  return useObserver(() => {
    if (!props?.profile?.current && props?.post?.list) {
      return <Loading />;
    } else {
      return (
        <Profile
          posts={props.post.list}
          userProfile={props?.profile?.current}
          session={props.session}
          abbr={abbr(
            props?.profile?.current?.firstName,
            props?.profile?.current?.lastName
          )}
        />
      );
    }
  });
};

export const ProfileContainer = withRouter(observer(Component));
