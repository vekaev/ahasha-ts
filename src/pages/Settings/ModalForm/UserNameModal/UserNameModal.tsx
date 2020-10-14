import React, { ChangeEvent, FormEvent, useState, useContext } from "react";
import { IModalDataProps } from "../../Interfaces";
import styles from "../ModalForm.module.scss";
import { LangContext } from "../../../../components/LangContext/LangContext";

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

  const langContext = useContext(LangContext);
  let text = langContext?.useLocale()["modalWindow"]["formUserName"];

  return (
    <>
      <form
        id="modal-form"
        className={styles["modal-form"]}
        onSubmit={handleSubmit}
      >
        <label className={styles["modal-form-label"]}>
          {text["userName"]}
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
