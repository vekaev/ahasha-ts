import React, { useContext } from "react";
import { ArrowNext } from "../../../../components/Icons/Icons";
import { IUserData } from "../../../../Interfaces";
import styles from "../List.module.scss";
import { LangContext } from '../../../../components/LangContext/LangContext';

interface EditProfileListProps {
  userData: IUserData;
  showModal(command: string): void;
}

export const EditProfileList: React.FC<EditProfileListProps> = ({
  userData,
  showModal,
}) => {
  const langContext = useContext(LangContext);
  let text = langContext?.useLocale()['editProfile']['editProfileList'];

  return (
    <div>
      <ul className={styles["list-items"]}>
        <li
          className={styles["list-item"]}
          onClick={() => showModal("fullName")}
        >
          <label className={styles["list-item-link"]}>{text['fullName']}</label>
          <button className={styles["list-item-btn"]}>
            {`${userData.firstName} ${userData.lastName}`}
            <ArrowNext />
          </button>
        </li>

        <li
          className={styles["list-item"]}
          onClick={() => showModal("userName")}
        >
          <label className={styles["list-item-link"]}>{text['userName']}</label>
          <button className={styles["list-item-btn"]}>
            {userData.userName}
            <ArrowNext />
          </button>
        </li>

        <li
          className={styles["list-item"]}
          onClick={() => showModal("birthDay")}
        >
          <label className={styles["list-item-link"]}>{text['birthDay']}</label>
          <button className={styles["list-item-btn"]}>
            {`${userData.birthDay.day} ${userData.birthDay.month} ${userData.birthDay.year}`}
            <ArrowNext />
          </button>
        </li>

        <li className={styles["list-item"]} onClick={() => showModal("gender")}>
          <label className={styles["list-item-link"]}>{text['gender']}</label>
          <button className={styles["list-item-btn"]}>
            {userData.gender}
            <ArrowNext />
          </button>
        </li>
      </ul>
    </div>
  );
};
