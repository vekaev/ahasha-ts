import React from "react";
import './index.scss'
import List, { SettingsListItem } from "./List/List";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import EditProfile from "./EditProfile/EditProfile";
import Layout from "../../containers/Layout/Layout";
import BackIcon from "../../components/Icons/BackIcon";

const Settings = ({ history }: RouteComponentProps) => {

  const header = {
    middle: "Settings",
    onClickMiddle: () => {
      console.log("middle");
    },
    left: <BackIcon />,
    onClickLeft: () => {
      history.goBack();
    },
  };

  return (
    <>
        <Switch>
          <Route exact path="/settings/edit-profile">
            <EditProfile />
          </Route>
          <Route exact path="/settings">
            <Layout header={header}>
              <List>
                <SettingsListItem />
              </List>
            </Layout>
            
          </Route>
        </Switch>
    </>
  );
};

export default Settings;
