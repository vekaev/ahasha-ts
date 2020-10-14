import React, {useContext} from "react";
import "./index.scss";
import { observer } from "mobx-react";
import { TestData } from "../../data";
import {
  Route,
  RouteChildrenProps,
  Switch,
  useHistory,
} from "react-router-dom";
import Layout from "../../containers/Layout/Layout";
import SettingsList from "./List/SettingsList/SettingsList";
import { BackIcon } from "../../components/Icons/Icons";
import EditProfileContainer from "../../containers/EditProfileContainer/EditProfileContainer";
import { LangContext } from './../../components/LangContext/LangContext';

export interface testDataProps extends RouteChildrenProps {
  test: TestData;
}

const Page = (props: testDataProps) => {
  const history = useHistory();
  const langContext = useContext(LangContext);
  let text = langContext?.useLocale()['account'];

  const header = {
    middle: text['headerTitle'],
    onClickMiddle: () => {
      console.log("middle");
    },
    left: <BackIcon />,
    onClickLeft: () => {
      history.goBack();
    },
  };

  return (
    <Switch>
      <Route exact path="/account/edit/profile">
        <EditProfileContainer />
      </Route>
      <Route exact path="/account/edit">
        <Layout header={header}>
          <SettingsList signOut={() => console.log("SIGN OUT")} />
        </Layout>
      </Route>
    </Switch>
  );
};

export const Settings = observer(Page);
