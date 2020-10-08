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
      <ul className={styles["list-items"]}>
        <li className={styles["list-item"]}>
          <Link
            className={styles["list-item-link"]}
            to={`${match.path}/edit-profile`}
          >
            Edit profile
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link
            className={styles["list-item-link"]}
            to={`${match.path}/edit-profile`}
          >
            Language
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link
            className={styles["list-item-link"]}
            to={`${match.path}/edit-profile`}
          >
            Parameters
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link
            className={styles["list-item-link"]}
            to={`${match.path}/edit-profile`}
          >
            Help
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link
            className={styles["list-item-link"]}
            to={`${match.path}/edit-profile`}
          >
            Information
          </Link>
        </li>
        <li className={styles["list-item"]} onClick={signOut}>
          <Link
            className={styles["list-item-link"]}
            to={`${match.path}/edit-profile`}
          >
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SettingsList;
