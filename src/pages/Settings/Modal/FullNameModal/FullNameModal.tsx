import React, { ChangeEvent, FormEvent, useState } from "react";
import { IModalDataProps } from "../../Interfaces";
import styles from "../Modal.module.scss";

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
    console.log(data);
    setUserData({
      ...userData,
      ...data,
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
          First Name
          <input
            type="text"
            name="firstName"
            className={styles["modal-form-input"]}
            value={data.firstName}
            onChange={handleChange}
          />
        </label>

        <label className={styles["modal-form-label"]}>
          Last Name
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
