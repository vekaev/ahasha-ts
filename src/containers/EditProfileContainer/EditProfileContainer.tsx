import React, { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { BackIcon } from "../../components/Icons/Icons";
import EditProfile from "../../pages/Settings/EditProfile/EditProfile";
import { IUserData } from "../../pages/Settings/Interfaces";
import BirthDayModal from "../../pages/Settings/Modal/BirthDayModal/BirthDayModal";
import FullNameModal from "../../pages/Settings/Modal/FullNameModal/FullNameModal";
import GenderModal from "../../pages/Settings/Modal/GenderModal/GenderModal";
import withModal from "../../pages/Settings/Modal/Modal";
import UserNameModal from "../../pages/Settings/Modal/UserNameModal/UserNameModal";
import Layout from "../Layout/Layout";

const EditProfileContainer: React.FC<any> = (props) => {
  const history = useHistory();

  const [userData, setUserData] = useState<IUserData>({
    avatar: "https://modnaya.org/uploads/posts/2013-08/1376555614_emo-stil.jpg",
    firstName: "Andrei",
    lastName: "Lukashenko",
    userName: "AndreiLukashenko",
    birthDay: {
      day: 18,
      month: 10,
      year: 1997,
    },
    gender: "Male",
  });

  const changeAvatar = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      setUserData({
        ...userData,
        avatar: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const [isOpenModal, setIsOpenModal] = useState<{
    flag: boolean;
    component: React.FC<any>;
  }>({
    flag: false,
    component: () => null,
  });

  let ModalWindow: React.FC<any> = isOpenModal.component;

  const showModal = (command: string) => {
    let component: React.FC<any> = () => null;

    switch (command) {
      case "fullName":
        component = withModal(FullNameModal);
        break;
      case "userName":
        component = withModal(UserNameModal);
        break;
      case "birthDay":
        component = withModal(BirthDayModal);
        break;
      case "gender":
        component = GenderModal;
        break;
      case "close":
        setIsOpenModal({
          flag: false,
          component: () => null,
        });
        return;
      default:
        setIsOpenModal({
          flag: false,
          component: () => null,
        });
        return;
    }

    setIsOpenModal({
      flag: true,
      component: component,
    });
  };

  const header = {
    middle: "Edit Profile",
    onClickMiddle: () => {
      console.log("middle");
    },
    left: <BackIcon />,
    onClickLeft: () => {
      history.goBack();
    },
  };

  return (
    <Layout header={header}>
      {isOpenModal.flag && (
        <ModalWindow
          showModal={showModal}
          userData={userData}
          setUserData={setUserData}
        />
      )}
      <EditProfile
        userData={userData}
        changeAvatar={changeAvatar}
        showModal={showModal}
      />
    </Layout>
  );
};

export default EditProfileContainer;
