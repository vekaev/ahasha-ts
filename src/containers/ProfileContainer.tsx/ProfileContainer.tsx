import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import MyProfile from '../../pages/user/my-profile/MyProfile';
import Profile from '../../pages/user/profile/Profile';
import { Profile as IProfile, Session } from '../../data';
import { ProfileContext } from '../../components/ProfileContext/ProfileContext';
import { abbr } from '../../utils/abbr';
import { observer } from 'mobx-react';
import moment from 'moment';

interface IProfileContainerProps extends RouteComponentProps {
  profile?: IProfile;
  session: Session;
  post: any;
}


const ProfileContainer: React.FC<IProfileContainerProps> = ({ history, match, session, post, profile: profileStore }) => {
  const profileContext: any = useContext(ProfileContext);
  const profile = profileContext?.profile;
  const params: any = match.params;

  if (profile?.username === params.username || `${profile?.username}/` === params.username) {
    return <MyProfileWrapper history={history} profile={profile} post={post} />
  } else {
    return <ProfileWrapper history={history} profile={profileStore} username={params.username} post={post} />
  }
}


const MyProfileWrapper: React.FC<any> = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    props.post?.fetch(props.profile.username);
  }, [])

  useEffect(() => {
    const posts: any = [];

    props.post?.list.forEach((post: any, index: number) => {
      posts.push({
        createdAt: post?.createdAt,
        deletedAt: post?.deletedAt,
        description: post?.description,
        id: post?.id,
        resources: post.resources.map((resource: any) => {
          return {
            createdAt: resource.createdAt,
            deletedAt: resource.deletedAt,
            id: resource.id,
            origin: resource.origin,
            type: resource.type,
            updatedAt: resource.updatedAt,
          }
        }),
        updatedAt: post?.updatedAt,
      })

      setPosts(posts);
    })
  }, [props.post?.list]);

  return (
    <MyProfile
      posts={posts}
      profile={props.profile}
      abbr={abbr(props.profile.firstName, props.profile.lastName)}
    />
  );
}

const ProfileWrapper: React.FC<any> = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    props.profile?.get(props.username);
    props.post.fetch(props.username);
  }, [])

  useEffect(() => {
    const posts: any = [];

    props.post?.list.forEach((post: any, index: number) => {
      posts.push({
        createdAt: post?.createdAt,
        deletedAt: post?.deletedAt,
        description: post?.description,
        id: post?.id,
        resources: post.resources.map((resource: any) => {
          return {
            createdAt: resource.createdAt,
            deletedAt: resource.deletedAt,
            id: resource.id,
            origin: resource.origin,
            type: resource.type,
            updatedAt: resource.updatedAt,
          }
        }),
        updatedAt: post?.updatedAt,
      })

      setPosts(posts);
    })
  }, [props.post?.list]);

  useEffect(() => {
    if (
      !props.profile.current &&
      !props.profile.loading.get &&
      props.username !== props.profile.current?.username &&
      props.username !== `${props.profile.current?.username}/`
    ) {
      props.history.replace(`/404`);
    }
  }, [props.profile.current, props.profile.loading.get, props.username]);

  console.log(posts);

  if (!props.profile.current) {
    return null;
  }

  return (
    <Profile
      posts={posts}
      profile={{
        ...props.profile.current,
        get fullName() {
          return `${this.firstName} ${this.lastName}`;
        },
        get age() {
          return `${moment().diff(this.birthday, 'years')} years`;
        },
        get info() {
          return this.age;
        }
      }}
      abbr={abbr(props.profile.current.firstName, props.profile.current.lastName)}
    />
  );
}

export default observer(withRouter(ProfileContainer));
