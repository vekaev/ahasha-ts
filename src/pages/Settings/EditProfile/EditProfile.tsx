import React, { ChangeEvent } from "react";
import { IUserData } from "../Interfaces";
import UserPhoto from "../../../components/UserPhoto/UserPhoto";
import styles from "./EditProfile.module.scss";
import EditProfileList from "../List/EditProfileList/EditProfileList";

interface IEditProfileProps {
  userData: IUserData;
  changeAvatar(event: ChangeEvent<HTMLInputElement>): void;
  showModal(command: string): void;
}

const EditProfile: React.FC<IEditProfileProps> = ({
  userData,
  changeAvatar,
  showModal,
}) => {
  return (
    <div className={"settings-container"}>
      <div className={styles["edit-profile"]}>
        <div className={styles["edit-profile-avatar"]}>
          <UserPhoto src={userData.avatar} />
        </div>

        <button className={styles["edit-profile-change-avatar"]}>
          Change photo
          <input type="file" accept="image/*" onChange={changeAvatar} />
        </button>
      </div>
      <EditProfileList userData={userData} showModal={showModal} />
    </div>
  );
};

export default EditProfile;
