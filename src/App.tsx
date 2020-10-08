import React from 'react';
import { observer } from 'mobx-react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { User } from "./pages/user";
import AddPhoto from './pages/addPhoto/AddPhoto';
import { Settings } from './pages/Settings';

function App() {
  return (
    <>
      <Switch>
        <Route path='/u' component={User} />
        <Route path='/settings' component={Settings} />
        <Route path='/add-photo' component={AddPhoto} />
        <Redirect to='/u/username'/>
      </Switch>
    </>
  )
}

export default observer(App);
