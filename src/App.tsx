import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { User } from './pages/user';
import { AddPhoto } from './pages/add-photo/AddPhoto';
import { Settings } from './pages/settings2';
import { UserDataProvider } from './components/UserDataContext/UserDataContext';
import { Verify } from './pages/auth/Verify';
import { LangProvider } from './components/LangContext/LangContext';
import { Session, Post, Profile } from './data';
import { PageNotFound } from './pages/PageNotFound';
import { ProfileContext } from './components/ProfileContext/ProfileContext';
import { Loading } from './components/Loading/Loading';
import moment from 'moment';
import { SessionUser } from './data/dto';
import {
  SessionContext,
  SessionProvider,
} from './components/SessionContext/SessionContext';

interface AppProps {
  session: Session;
  storage: any;
}

function App(props: AppProps) {
  const post = new Post(props.session.getInstance(), props.storage);
  const profile = new Profile(props.session.getInstance(), props.storage);
  const profileContext: any = useContext(ProfileContext);
  const sessionContext: any = useContext(SessionContext);

  useEffect(() => {
    props.session.subscribe((identity: SessionUser) => {
      if (identity) {
        props.session.user = identity;
        props.session.getProfile();
      }
    });
  }, []);

  useEffect(() => {
    let profile = null;

    if (props?.session?.profile) {
      const profileData = props.session.profile;

      profile = {
        avatar: profileData.avatar || null,
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
        },
      };
    }
    profileContext.setProfile(profile);
  }, [props.session.profile]);

  return (
    <LangProvider>
      <SessionProvider session={props.session}>
        <UserDataProvider>
          <Switch>
            {/* <Route exact path='/' render={() => {
            window.location.replace('https://www.ahasha.com')
            return null;
          }} /> */}
            <Route exact path='/' render={(routeProps) => <p>Home</p>} />
            <Route
              path='/auth/verify'
              render={(routeProps) => (
                <Verify {...routeProps} session={props.session} />
              )}
            />
            <Route
              path='/account/edit'
              render={(routeProps) => (
                <Settings {...routeProps} session={props.session} />
              )}
            />
            {profileContext?.profile && (
              <Route
                path='/add-photo'
                render={(routeProps) => (
                  <AddPhoto
                    {...routeProps}
                    session={props.session}
                    post={post}
                  />
                )}
              />
            )}
            <Route path='/404' component={PageNotFound} />
            <Route
              path='/:username'
              render={(userProps) => (
                <User
                  {...userProps}
                  profile={profile}
                  post={post}
                  session={props.session}
                />
              )}
            />
            {/* <Redirect from='*' to='/404' /> */}
          </Switch>
        </UserDataProvider>
      </SessionProvider>
    </LangProvider>
  );
}

export default observer(App);
