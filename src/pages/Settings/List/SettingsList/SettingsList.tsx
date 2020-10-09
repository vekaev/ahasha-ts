import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styles from "../List.module.scss";

interface SettingsListProps {
  signOut(): void;
}

const SettingsList: React.FC<SettingsListProps> = ({ signOut }) => {
  const match = useRouteMatch();

  return (
    <div className={styles["list-container"]}>
      <div className={styles["list-items"]}>
          <Link
            className={styles["list-item"]}
            to={`${match.path}/edit-profile`}
          >
            Edit profile
          </Link>
          <Link
            className={styles["list-item"]}
            to={`${match.path}/edit-profile`}
          >
            Language
          </Link>
          <Link
            className={styles["list-item"]}
            to={`${match.path}/edit-profile`}
          >
            Parameters
          </Link>
          <Link
            className={styles["list-item"]}
            to={`${match.path}/edit-profile`}
          >
            Help
          </Link>
          <Link
            className={styles["list-item"]}
            to={`${match.path}/edit-profile`}
          >
            Information
          </Link>
          <Link
            className={`${styles["list-item"]} ${styles['list-item-signout']}`}
            to={`${match.path}/edit-profile`}
          >
            Sign out
          </Link>
      </div>
    </div>
  );
};

export default SettingsList;
