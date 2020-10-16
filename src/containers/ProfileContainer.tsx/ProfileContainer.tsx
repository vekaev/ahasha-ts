import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { UserDataContext } from '../../components/UserDataContext/UserDataContext';
import MyProfile from '../../pages/user/my-profile/MyProfile';
import Profile from '../../pages/user/profile/Profile';
import { Post, Session } from '../../data';
import { ProfileContext } from '../../components/ProfileContext/ProfileContext';
import { abbr } from '../../utils/abbr';
import { observer } from 'mobx-react';

interface IProfileContainerProps extends RouteComponentProps {
  session: Session;
  post: any;
}

const ProfileContainer: React.FC<IProfileContainerProps> = ({ history, match, session, post }) => {
  const pathUsername: string = match?.url.substr(1);
  const profileContext: any = useContext(ProfileContext);
  const profile = profileContext?.profile;
  const checkMyUserName = profile?.username === pathUsername || `${profile?.username}/` === pathUsername;
  const [posts, setPosts] = useState([]);

  // 
  // MYPROFILE
  // 

  useEffect(() => {
    post?.fetch();
  }, [])

  useEffect(() => {
    if (checkMyUserName) {
      const posts: any = [];

      post?.list.forEach((post: any, index: number) => {
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
    }
  }, [post?.list]);

  if (checkMyUserName) {
    return (
      <MyProfile
        posts={posts}
        profile={profile}
        abbr={abbr(profile.firstName, profile.lastName)}
      />
    );
  }

  // 
  // ANOTHER USER PROFILE
  // 

  // useEffect(() => {
  //   // server request
  // })

  const anotherUser: any = {
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

  // Redirect
  if (pathUsername !== anotherUser.username && pathUsername !== `${anotherUser.username}/`) {
    history.replace(`/404`);
    return null;
  }

  return (
    // <Profile
    //   posts={posts}
    //   anotherUser={anotherUser}
    //   user={user}
    // />
    <p>profile</p>
  );
}

export default observer(withRouter(ProfileContainer));
