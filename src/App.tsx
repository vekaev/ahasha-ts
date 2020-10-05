import React from 'react';
import { observer } from 'mobx-react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import {User} from "./pages/user";
import {Settings} from "./pages/settings";

function App() {
  return (
    <>
        <Link to='/'>User</Link>
        <Link to='/settings'>Settings</Link>
      <Switch>
        <Route exact path='/' component={User} />
        <Route exact path='/settings' component={Settings} />
        <Redirect to='/' />
      </Switch>
    </>
  )
}

export default observer(App);
