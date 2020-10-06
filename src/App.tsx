import React from 'react';
import { observer } from 'mobx-react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { User } from "./pages/user";
import { Settings } from "./pages/settings";
// import { NavBar } from './containers/NavBar';
import AddPhoto from "./pages/AddPhoto";

function App() {
  // u (route) - user
  return (
    <>
      <NavLink exact to='/u'>User</NavLink>
      <NavLink to='/settings'>Settings</NavLink>
      <Switch>
        <Route path='/u' component={User} />
        <Route path='/settings' component={Settings} />
        <Route path='/add-photo' component={AddPhoto} />
        <Route exact path='/settings' component={Settings} />
        {/* <Redirect to='/' /> */}
      </Switch>
      {/* <NavBar /> */}
    </>
  )
}

export default observer(App);
