import React from 'react';
import { observer } from 'mobx-react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { User } from "./pages/user";
import Settings from "./pages/Settings/Settings";
import AddPhoto from './pages/addPhoto/AddPhoto';

function App() {
  return (
    <>
      <Switch>
        <Route path='/u' component={User} />
        <Route path='/settings' component={Settings} />
        <Route path='/add-photo' component={AddPhoto} />
        <Route exact path='/settings' component={Settings} />
        <Redirect to='/u/username'/>
      </Switch>
    </>
  )
}

export default observer(App);
