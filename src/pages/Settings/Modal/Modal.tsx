import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { IUserData } from "../Interfaces";
import styles from "./Modal.module.scss";

interface IFormModalProps {
  userData: IUserData;
  setUserData: Dispatch<IUserData>;
  handleVisibilty: any;
}

export const FullNameModal: React.FC<IFormModalProps> = ({
  userData,
  setUserData,
  handleVisibilty,
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

export const UserNameModal: React.FC<IFormModalProps> = ({
  userData,
  setUserData,
  handleVisibilty,
}) => {
  const [userName, setUserName] = useState(userData.userName);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setUserName(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log("submit");
    setUserData({
      ...userData,
      userName: userName,
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

type ITest = {
  day: string | number,
  month: string | number,
  year: string | number,
  [index: string] : string | number
}

export const BirthDayModal: React.FC<IFormModalProps> = ({
  userData,
  setUserData,
  handleVisibilty,
}) => {
  const [data, setData] = useState<ITest>({
    day: userData.birthDay.day,
    month: userData.birthDay.month,
    year: userData.birthDay.year,
  });
  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const { name, value, maxLength } = event.target;
    console.log(value)
    if (Object.keys(data).length > index + 1) {
      setData({
        ...data,
        [name]: value,
      });
      if (value.length >= maxLength) {
        
        refs[index + 1].focus();
      }
    } else {
      setData({
          ...data,
          [name]: value,
        });
      if (value.length >= maxLength) {
        // debugger
        let test = value
        setData(prev => ({
          ...prev,
          [name] : `${test}\r`
        }))
        refs[index].setSelectionRange(0, 0);
        refs[index].blur()
        
      }
    }
  };

  const handleFocus = (event:any) => {
    const {name} = event.target;

    setData(prev => ({
      ...prev,
      [name] : ""
    }))

  }

  const handleBlur = (event:any) => {
    const {name, value} : {name: string, value: string} = event.target; 

    if(!value) {
      setData(prev => ({
        ...prev,
        [name] : userData.birthDay[name]
      }))
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // setUserData({
    //   ...userData,
    //   birthDay: {
    //     ...data,
    //   },
    // });

    handleVisibilty(false);
  };

  const refs: any = {};
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
              type="tel"
              name="day"
              className={`${styles["modal-form-input"]} ${styles["w52"]}`}
              value={data.day}
              onChange={(e) => handleChange(e, 0)}
              maxLength={2}
              ref={(ref) => (refs["0"] = ref)}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className={styles["modal-form-label"]}>
            Month
            <input
              type="tel"
              name="month"
              className={`${styles["modal-form-input"]} ${styles["w52"]}`}
              value={data.month}
              onChange={(e) => handleChange(e, 1)}
              maxLength={2}
              ref={(ref) => (refs["1"] = ref)}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className={styles["modal-form-label"]}>
            Year
            <input
              type="tel"
              name="year"
              className={`${styles["modal-form-input"]} ${styles["w112"]}`}
              value={data.year}
              onChange={(e) => handleChange(e, 2)}
              maxLength={4}
              ref={(ref) => (refs["2"] = ref)}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
        </div>
      </form>
    </>
  );
};

interface ModalProps {
  handleVisibilty?: any;
}

const Modal: React.FC<ModalProps> = ({ handleVisibilty, children }) => {
  const popUp = useRef<any>(null);

  useEffect(() => {
    document.addEventListener("click", closeOutOfContent, false);

    return () => {
      document.removeEventListener("click", closeOutOfContent, false);
    };
  });

  const closeOutOfContent = (event: any): void => {
    if (!event.path.includes(popUp.current)) {
      handleVisibilty(false);
    }
  };

  return (
    <div className={styles["modal-wrapper"]}>
      <div className={styles["modal"]} ref={popUp}>
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
  );
};

export default Modal;
