import React from 'react';
import { observer } from 'mobx-react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Settings from './pages/Settings/Settings';

function App() {
  return (
      <Switch>
        <Route path="/settings" component={Settings}/>
        {/* <Route path="/edit-profile" component={EditProfile}/> */}
        {/* <Route exact path='/' component={User} /> */}
        <Redirect to='/' />
      </Switch>
  )
}

export default observer(App);
