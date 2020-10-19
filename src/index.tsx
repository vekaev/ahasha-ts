import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Session } from './data';
import { ProfileProvider } from './components/ProfileContext/ProfileContext';
import * as firebase from "firebase";
import { SessionProvider } from './components/SessionContext/SessionContext';

const storage = firebase.storage();
const session = new Session(storage);

ReactDOM.render(
  // <React.StrictMode>
  <Router>
    <SessionProvider>
      <ProfileProvider session={session}>
        <App session={session} storage={storage} />
      </ProfileProvider>
    </SessionProvider>
  </Router>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
