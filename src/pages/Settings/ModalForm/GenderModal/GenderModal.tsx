import React, { useEffect, useRef, useContext } from "react";
import { IModalDataProps } from "../../../../Interfaces";
import styles from "./GenderModal.module.scss";
import { LangContext } from "../../../../components/LangContext/LangContext";

const GenderModal: React.FC<IModalDataProps> = ({
  userData,
  setUserData,
  showModal,
}) => {
  const popUp = useRef<any>(null);

  const handleClick = (event: any): void => {
    const value = event.target.innerHTML;
    setUserData({
      ...userData,
      gender: value,
    });

    showModal("close");
  };

  useEffect(() => {
    document.addEventListener("click", closeOutOfContent, false);

    return () => {
      document.removeEventListener("click", closeOutOfContent, false);
    };
  });

  const closeOutOfContent = (event: any): void => {
    let path = event.path || (event.composedPath && event.composedPath());

    if (!path.includes(popUp.current)) {
      showModal("close");
    }
  };

  const langContext = useContext(LangContext);
  let text = langContext?.useLocale()["modalWindow"]["formGender"];

  const options = [text["male"], text["female"], text["third"]];
  return (
    <div className={styles["sex-modal-wrapper"]}>
      <div className={`${styles["sex-modal"]}`} ref={popUp}>
        <div className={styles["sex-modal-options"]}>
          {options.map((gender, index) => {
            return (
              <button
                key={index}
                onClick={handleClick}
                className={`${userData.gender === gender ? styles["active"] : ""
                  }`}
              >
                {gender}
              </button>
            );
          })}
        </div>

        <div className={styles["test"]}>
          <button
            className={`${styles["settings-btn"]} ${styles["sex-btn"]}`}
            onClick={() => showModal("close")}
          >
            {text["buttonCancel"]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenderModal;
