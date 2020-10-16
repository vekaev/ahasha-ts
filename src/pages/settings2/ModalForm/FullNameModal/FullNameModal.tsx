import React, { ChangeEvent, FormEvent, useState, useContext } from "react";
import { IModalDataProps } from "../../../../Interfaces";
import styles from "../ModalForm.module.scss";
import { LangContext } from "../../../../components/LangContext/LangContext";

const FullNameModal: React.FC<IModalDataProps> = ({
  userData,
  setUserData,
  showModal,
}) => {
  const [data, setData] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setUserData({
      ...userData,
      ...data,
    });

    showModal("close");
  };

  const langContext = useContext(LangContext);
  let text = langContext?.useLocale()["modalWindow"]["formFullName"];

  return (
    <>
      <form
        id="modal-form"
        className={styles["modal-form"]}
        onSubmit={handleSubmit}
      >
        <label className={styles["modal-form-label"]}>
          {text["firstName"]}
          <input
            type="text"
            name="firstName"
            className={styles["modal-form-input"]}
            value={data.firstName}
            onChange={handleChange}
          />
        </label>

        <label className={styles["modal-form-label"]}>
          {text["lastName"]}
          <input
            type="text"
            name="lastName"
            className={styles["modal-form-input"]}
            value={data.lastName}
            onChange={handleChange}
          />
        </label>
      </form>
    </>
  );
};

export default FullNameModal;
