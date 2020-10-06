import React, { ChangeEvent, useState } from "react";
import { IUserData } from "../Interfaces";
import List, { EditProfileListItem } from "../List/List";
import Modal, { BirthDayModal, FullNameModal } from "../Modal/Modal";
import SexModal from "../SexModal/SexModal";
import UserPhoto from "../../../components/UserPhoto/UserPhoto";
import styles from "./EditProfile.module.scss";

const EditProfile = () => {
  const [userData, setUserData] = useState({
    avatar: "https://modnaya.org/uploads/posts/2013-08/1376555614_emo-stil.jpg",
    firstName: "Andrei",
    lastName: "Lukashenko",
    userName: "AndreiLukashenko",
    birthDay: {
      day: 18,
      month: 10,
      year: 1997,
    },
    sex: "Male",
  });

  
  const [isOpenModal, setIsOpenModal] = useState({
    isVisible: false,
    modalName: "",
  });

  const [isSexModalVisible, setIsSexModalVisible] = useState(false);

  const changeAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("upload");
  };
   
const handleVisibilty = (command:any) => {
  setIsOpenModal({...isOpenModal, isVisible: command})
}

  return (
    <div>
      <SexModal visible={isSexModalVisible} handleVisibilty={setIsSexModalVisible} userData={userData} 
          setUserData={setUserData}/>
      <Modal visible={isOpenModal.isVisible} handleVisibilty={handleVisibilty}>
        {isOpenModal.modalName === "fullName" && (
          <FullNameModal userData={userData} 
          setUserData={setUserData}
          handleVisibilty={handleVisibilty}
          />
        )}
        {isOpenModal.modalName === "birthDay" && (
          <BirthDayModal userData={userData} setUserData={setUserData} handleVisibilty={handleVisibilty}/>
        )}
      </Modal>
      <div className={styles["edit-profile"]}>
        <UserPhoto src={userData.avatar} />

        <button className={styles["edit-profile-change-avatar"]}>
          Change photo
          <input type="file" accept="image/*" onChange={changeAvatar} />
        </button>
      </div>
      <List>
        <EditProfileListItem userData={userData} openModal={setIsOpenModal} openSexModal={setIsSexModalVisible}/>
      </List>

      
    </div>
  );
};

export default EditProfile;
