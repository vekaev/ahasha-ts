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
    console.log(userName);
    setUserData({
      ...userData,
      userName: userName,
    });

    showModal("close");
  };

  return (
    <>
      <form className={styles["modal-form"]} onSubmit={handleSubmit}>
        <button
          type="submit"
          className={`${styles["modal-content-header-btn"]} ${styles["btn-save"]}`}
        >
          Save
        </button>
        <label className={styles["modal-form-label"]}>
          UserName
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