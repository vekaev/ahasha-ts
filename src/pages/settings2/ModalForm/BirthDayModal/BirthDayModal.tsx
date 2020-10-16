import React, { useState, useContext } from "react";
import { IModalDataProps } from "../../../../Interfaces";
import styles from "../ModalForm.module.scss";
import { LangContext } from "../../../../components/LangContext/LangContext";

const BirthDayModal: React.FC<IModalDataProps> = ({
  userData,
  setUserData,
  showModal,
}) => {
  const [data, setData] = useState({
    day: userData.birthDay.day,
    month: userData.birthDay.month,
    year: userData.birthDay.year,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const { name, value, maxLength } = event.target;

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
        let test = value;
        setData((prev) => ({
          ...prev,
          [name]: `${test}\r`,
        }));
        refs[index].setSelectionRange(0, 0);
        refs[index].blur();
      }
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
    const { name } = event.target;

    setData((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    const { name, value }: { name: string; value: string } = event.target;

    if (!value) {
      setData((prev) => ({
        ...prev,
        [name]: userData.birthDay[name],
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setUserData({
      ...userData,
      birthDay: {
        ...data,
      },
    });

    showModal("close");
  };

  const refs: any = {};

  const langContext = useContext(LangContext);
  let text = langContext?.useLocale()["modalWindow"]["formBirthDay"];
  return (
    <>
      <form
        id="modal-form"
        className={styles["modal-form"]}
        onSubmit={handleSubmit}
      >
        <div className={styles["modal-form-input-wrapper"]}>
          <label className={styles["modal-form-label"]}>
            {text["day"]}
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
            {text["month"]}
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
            {text["year"]}
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

export default BirthDayModal;
