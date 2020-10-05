import React from 'react';
import { observer } from 'mobx-react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {User} from "./pages/user";

function App() {
  return (
      <Switch>
        <Route exact path='/' component={User} />
        <Redirect to='/' />
      </Switch>
  )
}

export default observer(App);
