import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { User } from './pages/user';
import { AddPhoto } from './pages/add-photo/AddPhoto';
import { Settings } from './pages/settings';
import { UserDataProvider } from './components/UserDataContext/UserDataContext';
import { Verify } from './pages/auth/Verify';
import { LangProvider } from './components/LangContext/LangContext';
import { Session, Post } from './data';

interface AppProps {
  session: Session;
}

const SignIn = (props: { session: Session }) => {
  useEffect(() => {
    props.session.sendSignInLink({
      email: 'volodymyr.sentiurin@gmail.com',
    });
  }, []);

  return <Redirect to='/' />;
}

function App(props: AppProps) {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    props.session.subscribe((identity) => {
      if (identity) {
        props.session.user = identity;
        props.session
          .profile()
          .then((profile) => console.log({profile}))
          .catch(console.error);

        const post = new Post(props.session.getInstance());
        setPost(post);
        post.fetch();
      }
    });
  }, []);

  return (
    <LangProvider>
      <UserDataProvider>
        <Switch>
          <Route exact path='/auth/verify' render={(routeProps) => <Verify {...routeProps} session={props.session} />} />
          <Route path='/auth/sign-in' render={(routeProps) => <SignIn {...routeProps} session={props.session} />} />
          <Route path='/settings' component={Settings} />
          {post && (
            <Route path='/add-photo' render={(routeProps) => <AddPhoto {...routeProps} post={post} />} />
          )}
          <Route path='/:id' component={User} />
         
          {/* <Redirect from='*' to='/404' /> */}
        </Switch>
      </UserDataProvider>
    </LangProvider>
  )
}

export default observer(App);
