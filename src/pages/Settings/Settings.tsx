import React from "react";
import './index.scss'
import styles from "./Settings.module.scss";
import List, { SettingsListItem } from "./List/List";
import { Route, Switch } from "react-router-dom";
import EditProfile from "./EditProfile/EditProfile";

const Settings = () => {
  

  return (
    <>
      <header className={styles["settings-header"]}>Settings</header>
      <Switch>
        <Route path="/settings/edit-profile">
          <EditProfile />
        </Route>
        <Route exact path="/settings">
          <List>
            <SettingsListItem />
          </List>
        </Route>
      </Switch>

      <footer className={styles["settings-footer"]}>Footer</footer>
    </>
  );
};

export default Settings;
