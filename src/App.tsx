import React from 'react';
import { observer } from 'mobx-react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { User } from './pages/user';
import AddPhoto from './pages/add-photo/AddPhoto';
import { Settings } from './pages/Settings';
import { UserDataProvider } from './components/UserDataContext/UserDataContext';
import { PageNotFound } from './pages/PageNotFound';
import { LangProvider } from './components/LangContext/LangContext';
import { PostFeed } from './pages/PostFeed';
import PostFeedContainer from './pages/PostFeed/PostFeedContainer';

function App() {
  return (
    <LangProvider>
      <UserDataProvider>
        <Switch>
          <Route path='/u' component={User} />
          <Route path='/account/edit' component={Settings} />
          <Route path='/add-photo' component={AddPhoto} />
          <Route path='/post-feed' component={PostFeedContainer} />
          <Route path='/404' component={PageNotFound} />
          {/* <Redirect from='*' to='/404' /> */}
        </Switch>
      </UserDataProvider>
    </LangProvider>
  );
}

export default observer(App);
