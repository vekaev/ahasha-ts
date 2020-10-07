import React, { Dispatch, useEffect, useRef } from "react";
import { IUserData } from "../Interfaces";
import styles from "./SexModal.module.scss";

interface SexModalProps {
  userData: IUserData;
  setUserData: Dispatch<IUserData>;
  handleVisibilty?: any;
}

const SexModal: React.FC<SexModalProps> = ({ handleVisibilty, userData,
  setUserData }) => {

    const handleClick = (event:any) => {
      const value = event.target.innerHTML;
      setUserData({
        ...userData,
        "gender":value 
      })

      handleVisibilty(false)
    }

    const popUp = useRef<any>(null);

    useEffect(() => {
      document.addEventListener("click", closeOutOfContent, false);
  
      return () => {
        document.removeEventListener("click", closeOutOfContent, false);
      };
    });
  
    const closeOutOfContent = (event: any): void => {
  
      if(!event.path.includes(popUp.current)) {
        handleVisibilty(false)
      }
    };
  return (
    
        <div className={styles["sex-modal-wrapper"]}>
          <div className={`${styles["sex-modal"]} container`}>
            <div className={styles["sex-modal-options"]}>
              <button onClick={handleClick}>Male</button>
              <button onClick={handleClick}>Female</button>
              <button onClick={handleClick}>Undetermined</button>
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
  );
};

export default SexModal;
