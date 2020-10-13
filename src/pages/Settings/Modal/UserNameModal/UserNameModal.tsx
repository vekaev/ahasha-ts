import React, { ChangeEvent, FormEvent, useState } from "react";
import { IModalDataProps } from "../../Interfaces";
import styles from "../Modal.module.scss";

const UserNameModal: React.FC<IModalDataProps> = ({
  userData,
  setUserData,
  showModal,
}) => {
  const [userName, setUserName] = useState(userData.userName);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setUserName(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setUserData({
      ...userData,
      userName: userName,
    });

    showModal("close");
  };

  return (
    <>
      <form
        id="modal-form"
        className={styles["modal-form"]}
        onSubmit={handleSubmit}
      >
        <label className={styles["modal-form-label"]}>
          Username
          <input
            type="text"
            name="userName"
            className={styles["modal-form-input"]}
            value={userName}
            onChange={handleChange}
          />
        </label>
      </form>
    </>
  );
};

export default UserNameModal;
