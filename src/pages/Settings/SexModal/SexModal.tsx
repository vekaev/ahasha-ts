import React, { Dispatch } from "react";
import { IUserData } from "../Interfaces";
import styles from "./SexModal.module.scss";

interface SexModalProps {
  visible: boolean;
  userData: IUserData;
  setUserData: Dispatch<IUserData>;
  handleVisibilty?: any;
}

const SexModal: React.FC<SexModalProps> = ({ visible, handleVisibilty, userData,
  setUserData }) => {

    const handleClick = (event:any) => {
      const value = event.target.innerHTML;
      setUserData({
        ...userData,
        "sex":value 
      })

      handleVisibilty(false)
    }
  return (
    <>
      {visible ? (
        <div className={styles["sex-modal-wrapper"]}>
          <div className={`${styles["sex-modal"]} container`}>
            <div className={styles["sex-modal-options"]}>
              <button onClick={handleClick}>Male</button>
              <button onClick={handleClick}>Female</button>
            </div>

            <div className={styles["test"]}>
              <button
                className={`${styles["settings-btn"]} ${styles["sex-btn"]}`}
                onClick={() => handleVisibilty(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SexModal;
