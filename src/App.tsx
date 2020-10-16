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

interface AppProps {
  session: Session;
}

// TODO: remove
const SignIn = (props: { session: Session }) => {
  useEffect(() => {
    props.session.sendSignInLink({
      email: 'dsent.work@gmail.com',
    });
  }, []);

  // return <Redirect to='/' />;
  return <p>sign in</p>;
}

function App(props: AppProps) {
  const [post, setPost] = useState<Post | null>(null);
  const profileContext: any = useContext(ProfileContext);

  useEffect(() => {
    props.session.subscribe((identity) => {
      if (identity) {
        props.session.user = identity;
        props.session.getProfile();

        const post = new Post(props.session.getInstance());
        setPost(post);
        post.fetch();
      }
    });
  }, []);

  useEffect(() => {
    let profile = null;

    if (props?.session?.profile) {
      const profileData = props.session.profile;

      profile = {
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
        get info() {
          return `${moment().diff(this.birthday, 'years')} years`;
        }
      };
    }
    profileContext.setProfile(profile);
  }, [props.session.profile]);

  useEffect(() => {
    console.log(post?.list);
  }, [post?.list]);

  // TODO: guest
  if (!profileContext.profile) {
    return <Loading />;
  }

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
            <Route path='/add-photo' render={(routeProps) => <AddPhoto {...routeProps} post={post} />} />
          )}
          <Route path='/404' component={PageNotFound} />
          <Route path='/:username' render={(userProps) => <User {...userProps} session={props.session} />} />
          {/* <Redirect from='*' to='/404' /> */}
        </Switch>
      </UserDataProvider>
    </LangProvider>
  )
}

export default observer(App);
