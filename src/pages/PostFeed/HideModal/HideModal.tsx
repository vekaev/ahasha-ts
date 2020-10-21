import React, { useRef } from 'react';
import styles from './HideModal.module.scss';

interface IHideModalProps {
  isOpen: boolean;
  closeModal(state: boolean): void;
  sendReport(event: any): void;
}

const HideModal: React.FC<IHideModalProps> = ({
  isOpen,
  closeModal,
  sendReport,
}) => {
  if (!isOpen) return null;

  const closeOutModal = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (event.currentTarget === event.target) {
      closeModal(false);
    }
  };
  return (
    <div className={styles['hide-modal-overlay']} onClick={closeOutModal}>
      <div className={styles['hide-modal']}>
        <div className={styles['hide-modal-content']}>
          <span className={styles['hide-modal-content-title']}>
            Why hide the publication?
          </span>
          <form className={styles['hide-modal-content-options']}>
            <div className={styles['hide-modal-content-option']}>
              <input
                type='radio'
                name='hideSelected'
                value='badPhoto'
                id='badPhoto'
              />
              <label htmlFor='badPhoto'>Плохое качество фото</label>
            </div>

            <div className={styles['hide-modal-content-option']}>
              <input
                type='radio'
                name='hideSelected'
                value='unoriginal'
                id='unoriginal'
              />
              <label htmlFor='unoriginal'>Не оригинальные товары</label>
            </div>

            <div className={styles['hide-modal-content-option']}>
              <input type='radio' name='hideSelected' value='many' id='many' />
              <label htmlFor='many'>Много публикаций одного аккаунта</label>
            </div>

            <div className={styles['hide-modal-content-option']}>
              <input
                type='radio'
                name='hideSelected'
                value='uglyModel'
                id='uglyModel'
              />
              <label htmlFor='uglyModel'>Некрасивая модель</label>
            </div>

            <div className={styles['hide-modal-content-option']}>
              <input
                type='radio'
                name='hideSelected'
                value='expensive'
                id='expensive'
              />
              <label htmlFor='expensive'>Слишком дорого для меня</label>
            </div>

            <div className={styles['hide-modal-content-options-buttons']}>
              <button
                type='button'
                className={`${styles['btn-cancel']} ${styles['hide-modal-btn']}`}
                value='Cancel'
                onClick={() => closeModal(false)}
              >
                Cancel
              </button>

              <button
                type='submit'
                className={`${styles['btn-next']} ${styles['hide-modal-btn']}`}
                value='Continue'
                onClick={sendReport}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HideModal;
