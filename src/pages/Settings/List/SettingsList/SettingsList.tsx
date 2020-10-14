import React, {useContext} from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styles from "../List.module.scss";
import { LangContext } from './../../../../components/LangContext/LangContext';

interface SettingsListProps {
  signOut(): void;
}

const SettingsList: React.FC<SettingsListProps> = ({ signOut }) => {
  const match = useRouteMatch();
  const langContext = useContext(LangContext);
  let text = langContext?.useLocale()['account']['acoountList'];

  return (
    <div className={styles["list-container"]}>
      <div className={styles["list-items"]}>
        <Link className={styles["list-item"]} to={`${match.path}/profile`}>
          {text['editProfile']}
        </Link>
        <Link className={styles["list-item"]} to={`${match.path}/profile`}>
          {text['language']}
        </Link>
        <Link className={styles["list-item"]} to={`${match.path}/profile`}>
          {text['parameters']}
        </Link>
        <Link className={styles["list-item"]} to={`${match.path}/profile`}>
          {text['help']}
        </Link>
        <Link className={styles["list-item"]} to={`${match.path}/profile`}>
          {text['information']}
        </Link>
        <Link
          className={`${styles["list-item"]} ${styles["list-item-signout"]}`}
          to={`${match.path}/edit-profile`}
        >
          {text['signOut']}
        </Link>
      </div>
    </div>
  );
};

export default SettingsList;
