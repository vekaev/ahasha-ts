import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { IUserData } from "../Interfaces";
import styles from "./Modal.module.scss";

interface IFormModalProps {
  userData: IUserData;
  setUserData: Dispatch<IUserData>;
  handleVisibilty: any
}

export const FullNameModal: React.FC<IFormModalProps> = ({
  userData,
  setUserData,
  handleVisibilty
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
    console.log("submit");
    console.log(data);
    setUserData({
      ...userData,
      ...data,
    });

    handleVisibilty(false);
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

export const BirthDayModal: React.FC<IFormModalProps> = ({
  userData,
  setUserData,
  handleVisibilty
}) => {
  const [data, setData] = useState({
    day: userData.birthDay.day,
    month: userData.birthDay.month,
    year: userData.birthDay.year,
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
      birthDay: {
        ...data
      }
    });

    handleVisibilty(false);
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
        <div className={styles["modal-form-input-wrapper"]}>
          <label className={styles["modal-form-label"]}>
            Day
            <input
              type="text"
              name="day"
              className={`${styles["modal-form-input"]} ${styles["w52"]}`}
              value={data.day}
              onChange={handleChange}
            />
          </label>

          <label className={styles["modal-form-label"]}>
            Month
            <input
              type="text"
              name="month"
              className={`${styles["modal-form-input"]} ${styles["w52"]}`}
              value={data.month}
              onChange={handleChange}
            />
          </label>

          <label className={styles["modal-form-label"]}>
            Year
            <input
              type="text"
              name="year"
              className={`${styles["modal-form-input"]} ${styles["w112"]}`}
              value={data.year}
              onChange={handleChange}
            />
          </label>
        </div>
      </form>
    </>
  );
};

interface ModalProps {
  visible: boolean;
  handleVisibilty?: any;
}

const Modal: React.FC<ModalProps> = ({
  visible,
  handleVisibilty,
  children,
}) => {
  // useEffect(() => {
  //   return () => {
  //     handleVisibilty(false);
  //   };
  // });

  return (
    <>
      {visible ? (
        <div className={styles["modal-wrapper"]}>
          <div className={styles["modal"]}>
            <div className={styles["modal-content"]}>
              <div className={styles["modal-content-header"]}>
                <button
                  className={`${styles["modal-content-header-btn"]} ${styles["btn-cancel"]}`}
                  onClick={() => handleVisibilty(false)}
                >
                  Cancel
                </button>
              </div>
              <div className={styles["modal-content-main"]}>{children}</div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
