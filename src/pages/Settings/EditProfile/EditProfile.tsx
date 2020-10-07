import React, { ChangeEvent, useState } from "react";
import { IUserData } from "../Interfaces";
import List, { EditProfileListItem } from "../List/List";
import Modal, {
  BirthDayModal,
  FullNameModal,
  UserNameModal,
} from "../Modal/Modal";
import SexModal from "../SexModal/SexModal";
import UserPhoto from "../../../components/UserPhoto/UserPhoto";
import styles from "./EditProfile.module.scss";
import Layout from "../../../containers/Layout/Layout";
import BackIcon from "../../../components/Icons/BackIcon";
import { RouteComponentProps, useHistory } from "react-router-dom";

const EditProfile:React.FC = () => {

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

  const [OpenModal, setOpenModal] = useState({
    isVisible: false,
    modalName: "",
  });

  const [isSexModalVisible, setIsSexModalVisible] = useState(false);

  const changeAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("upload");
  };

  const handleVisibilty = (command: any) => {
    setOpenModal({ ...OpenModal, isVisible: command });
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
      <div>
        {isSexModalVisible && (<SexModal
          handleVisibilty={setIsSexModalVisible}
          userData={userData}
          setUserData={setUserData}
        />)}
        
        {OpenModal.isVisible && (
          <Modal handleVisibilty={handleVisibilty}>
            {OpenModal.modalName === "fullName" && (
              <FullNameModal
                userData={userData}
                setUserData={setUserData}
                handleVisibilty={handleVisibilty}
              />
            )}
            {OpenModal.modalName === "birthDay" && (
              <BirthDayModal
                userData={userData}
                setUserData={setUserData}
                handleVisibilty={handleVisibilty}
              />
            )}
            {OpenModal.modalName === "userName" && (
              <UserNameModal
                userData={userData}
                setUserData={setUserData}
                handleVisibilty={handleVisibilty}
              />
            )}
          </Modal>
        )}

        <div className={styles["edit-profile"]}>
          <div className={styles["edit-profile-avatar"]}>
            <UserPhoto src={userData.avatar} />
          </div>

          <button className={styles["edit-profile-change-avatar"]}>
            Change photo
            <input type="file" accept="image/*" onChange={changeAvatar} />
          </button>
        </div>
        <List>
          <EditProfileListItem
            userData={userData}
            openModal={setOpenModal}
            openSexModal={setIsSexModalVisible}
          />
        </List>
      </div>
    </Layout>
  );
};

export default EditProfile;
