import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { User } from './pages/user';
import { AddPhoto } from './pages/add-photo/AddPhoto';
import { Settings } from './pages/settings';
import { UserDataContext, UserDataProvider } from './components/UserDataContext/UserDataContext';
import { Verify } from './pages/auth/Verify';
import { LangProvider } from './components/LangContext/LangContext';
import { Session, Post } from './data';
import { PageNotFound } from './pages/PageNotFound';
import { ProfileContext } from './components/ProfileContext/ProfileContext';
import { Loading } from './components/Loading/Loading';
import moment from 'moment';
import { IProfile } from './Interfaces';

interface AppProps {
  session: Session;
}

// TODO: remove
const SignIn = (props: { session: Session }) => {
  useEffect(() => {
    props.session.sendSignInLink({
      email: 'vekaevb@gmail.com',
    });
  }, []);

  // return <Redirect to='/' />;
  return <p>sign in</p>;
}

function App(props: AppProps) {
  const [post, setPost] = useState<Post | null>(null);
  const profileContext: any = useContext(ProfileContext);

  console.log(profileContext)

  useEffect(() => {
    props.session.subscribe((identity) => {
      if (identity) {
        props.session.user = identity;
        props.session.getProfile();

        const post = new Post(props.session.getInstance());
        setPost(post);
      }
    });
  }, []);

  useEffect(() => {
    let profile = null;

    if (props?.session?.profile) {
      const profileData = props.session.profile;

      profile = {
        mainPhoto: profileData.mainPhoto || null,
        size: profileData.size || null,
        firstName: profileData.firstName,
        lastName: profileData.lastName,
        username: profileData.username,
        birthday: profileData.birthday,
        gender: profileData.gender,
        id: profileData.id,
        createdAt: profileData.createdAt,
        updatedAt: profileData.updatedAt,
        get fullName() {
          return `${this.firstName} ${this.lastName}`;
        },
        get age() {
          return `${moment().diff(this.birthday, 'years')} years`;
        },
        get info() {
          return this.age;
        }
      };
    }
    profileContext.setProfile(profile);
  }, [props.session.profile]);

  console.log(post?.list);

  // useEffect(() => {
  //   console.log(post?.list);
  // }, [post?.list]);

  // TODO: guest
  // if (!profileContext.profile) {
  //   return <Loading />;
  // }

  console.log(profileContext.profile)

  return (
    <LangProvider>
      <UserDataProvider>
        <Switch>
          {/* <Route exact path='/' render={() => {
            window.location.replace('https://www.ahasha.com')
            return null;
          }} /> */}
          <Route exact path='/' render={(routeProps) => <p>Home</p>} />
          <Route path='/auth/verify' render={(routeProps) => <Verify {...routeProps} session={props.session} />} />
          <Route path='/auth/sign-in' render={(routeProps) => <SignIn {...routeProps} session={props.session} />} />
          <Route path='/account/edit' component={Settings} />
          {post && (
            <Route path='/add-photo' render={(routeProps) => <AddPhoto {...routeProps} session={props.session} post={post} />} />
          )}
          <Route path='/404' component={PageNotFound} />
          <Route path='/:username' render={(userProps) => <User {...userProps} post={post} session={props.session} />} />
          {/* <Redirect from='*' to='/404' /> */}
        </Switch>
      </UserDataProvider>
    </LangProvider>
  )
}

export default observer(App);
