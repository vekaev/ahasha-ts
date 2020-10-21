import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styles from "../List.module.scss";
import { LangContext } from '../../../../components/LangContext/LangContext';
import { Session } from "../../../../data";

interface SettingsListProps {
  session: Session;
}

const SettingsList: React.FC<SettingsListProps> = ({ session }) => {
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
        <span
          className={`${styles["list-item"]} ${styles["list-item-signout"]}`}
          onClick={() => {
            session?.signOut();
            window.location.replace('https://www.ahasha.com');
          }}
        >
          {text['signOut']}
        </span>
      </div>
    </div >
  );
};

export default SettingsList;
