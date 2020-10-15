import React from 'react';
import { observer } from 'mobx-react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { User } from './pages/user';
import AddPhoto from './pages/add-photo/AddPhoto';
import { Settings } from './pages/settings';
import { UserDataProvider } from './components/UserDataContext/UserDataContext';
import { Verify } from './pages/auth/Verify';
import { LangProvider } from './components/LangContext/LangContext';
import { Session } from './data';

interface AppProps {
  session: Session;
}

function App(props: AppProps) {
  return (
    <LangProvider>
      <UserDataProvider>
        <Switch>
          <Route exact path='/auth/sign-in/verify' render={(routeProps) => <Verify {...routeProps} session={props.session} />} />
          <Route path='/:id' component={User} />
          <Route path='/settings' component={Settings} />
          <Route path='/add-photo' component={AddPhoto} />
          {/* <Redirect from='*' to='/404' /> */}
        </Switch>
      </UserDataProvider>
    </LangProvider>
  )
}

export default observer(App);
