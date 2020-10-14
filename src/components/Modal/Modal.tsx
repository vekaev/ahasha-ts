import React, { useEffect, useRef, useContext } from "react";
import styles from "./Modal.module.scss";
import { LangContext } from "../LangContext/LangContext";

const withModal = (Component: any) => (props: any) => {
  const popUp = useRef<any>(null);

  useEffect(() => {
    document.addEventListener("click", closeOutOfContent, false);

    return () => {
      document.removeEventListener("click", closeOutOfContent, false);
    };
  });

  const closeOutOfContent = (event: any): void => {
    let path = event.path || (event.composedPath && event.composedPath());

    if (!path.includes(popUp.current)) {
      props.showModal("close");
    }
  };

  const langContext = useContext(LangContext);
  let text = langContext?.useLocale()["modalWindow"];

  return (
    <div className={styles["modal-wrapper"]}>
      <div className={`${styles["modal"]}`} ref={popUp}>
        <div className={styles["modal-content"]}>
          <div className={styles["modal-content-header"]}>
            <button
              className={`${styles["modal-content-header-btn"]} ${styles["btn-cancel"]}`}
              onClick={() => props.showModal("close")}
            >
              {text["buttonCancel"]}
            </button>
            <button
              form="modal-form"
              type="submit"
              className={`${styles["modal-content-header-btn"]} ${styles["btn-save"]}`}
            >
              {text["buttonSave"]}
            </button>
          </div>
          <div className={styles["modal-content-main"]}>
            <Component {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withModal;
