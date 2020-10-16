import React, { Dispatch, useState } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { BackIcon, ArrowNext } from "../../../components/Icons/Icons";
import Layout from "../../../containers/Layout/Layout";
import { IUserData } from "../Interfaces";
import styles from "./List.module.scss";

export const SettingsListItem = (props: any) => {

  const match = useRouteMatch();
  const listData = [
    { title: "Edit profile", link: `${match.path}/edit-profile` },
    { title: "Language", link: `${match.path}/edit-profile` },
    { title: "Parameters", link: `${match.path}/edit-profile` },
    { title: "Help", link: `${match.path}/edit-profile` },
    { title: "Terms of use", link: `${match.path}/edit-profile` },
    { title: "Privacy policy", link: `${match.path}/edit-profile` },
    { title: "About", link: `${match.path}/edit-profile` },
    { title: "Sign out", link: `${match.path}/edit-profile` },
  ];

  return (
    <>
      {listData.map((item, index) => {
        return (
          <li key={index} className={styles["list-item"]}>
            <Link
              className={styles["list-item-link"]}
              to={item.link}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </>
  );
};

interface EditProfileListItemProps {
  userData: IUserData;
  openModal: any;
  openSexModal: any;
}

export const EditProfileListItem: React.FC<EditProfileListItemProps> = ({ userData, openModal, openSexModal }) => {

  return (
    <>
      <li className={styles["list-item"]} onClick={() => openModal({ isVisible: true, modalName: "fullName" })}>
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

      <li className={styles["list-item"]} onClick={() => openModal({ isVisible: true, modalName: "userName" })}>
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

      <li className={styles["list-item"]} onClick={() => openModal({ isVisible: true, modalName: "birthDay" })}>
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

      <li className={styles["list-item"]} onClick={() => openSexModal(true)}>
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
    </>
  )
};

const List: React.FC = ({ children }) => {
  return (
    <div className={styles["list-container"]}>
      <ul className={styles["list-items"]}>
        {children}
      </ul>
    </div>
  );
};

export default List;
