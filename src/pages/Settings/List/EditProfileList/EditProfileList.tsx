import React from 'react';
import ArrowNext from '../../../../components/Icons/ArrowNext';
import { IUserData } from '../../Interfaces';
import styles from "../List.module.scss";

interface EditProfileListProps {
  userData: IUserData;
  showModal(command:string): void;
}

const EditProfileList : React.FC<EditProfileListProps> = ({userData, showModal}) => {
  return (
    <div className={styles["list-container"]}>
      <ul className={styles["list-items"]}>
      <li className={styles["list-item"]} onClick={() => showModal("fullName")}>
          <label
            className={styles["list-item-link"]}
          >
            Full name
          </label>
          <button
              className={styles["list-item-btn"]}
            >
              {`${userData.firstName} ${userData.lastName}`}
              <ArrowNext />
            </button>
        </li>

      <li className={styles["list-item"]} onClick={() => showModal("userName")}>
        <label
          className={styles["list-item-link"]}
        >
          Usename
        </label>
        <button
            className={styles["list-item-btn"]}
          >
            {userData.userName}
            <ArrowNext />
          </button>
      </li>

      <li className={styles["list-item"]} onClick={() => showModal("birthDay")}>
        <label
          className={styles["list-item-link"]}
        >
          Birthday
        </label>
        <button
            className={styles["list-item-btn"]}
          >
            {`${userData.birthDay.day} ${userData.birthDay.month} ${userData.birthDay.year}`}
            <ArrowNext />
          </button>
      </li>

      <li className={styles["list-item"]} onClick={() => showModal("gender")}>
        <label
          className={styles["list-item-link"]}
        >
          Sex
        </label>
        <button
            className={styles["list-item-btn"]}
          >
            {userData.gender}
            <ArrowNext />
          </button>
      </li>
      </ul>
    </div>
  )
}

export default EditProfileList;