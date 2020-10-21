import React from 'react';
import {
  CopyIcon,
  OthersIcon,
  SendIcon,
} from '../../../components/Icons/Icons';
import styles from './SendModal.module.scss';
import { TelegramIcon } from './../../../components/Icons/Icons';

interface ISendModal {
  isOpen: boolean;
  closeModal(state: boolean): void;
}

const SendModal: React.FC<ISendModal> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  const closeOutModal = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (event.currentTarget === event.target) {
      closeModal(false);
    }
  };

  return (
    <div className={styles['send-modal-wrapper']} onClick={closeOutModal}>
      <div className={styles['send-modal']}>
        <div className={styles['send-modal-content']}>
          <button
            className={styles['send-modal-content-btn']}
            value='Cancel'
            onClick={() => closeModal(false)}
          >
            Cancel
          </button>
          <div className={styles['send-modal-content-options']}>
            <div className={styles['send-modal-content-option']}>
              <div className={styles['send-modal-content-option-icon']}>
                <TelegramIcon />
              </div>
              <span>Telegram</span>
            </div>

            <div className={styles['send-modal-content-option']}>
              <div className={styles['send-modal-content-option-icon']}>
                <TelegramIcon />
              </div>
              <span>Message</span>
            </div>

            <div className={styles['send-modal-content-option']}>
              <div className={styles['send-modal-content-option-icon']}>
                <TelegramIcon />
              </div>
              <span>Facebook</span>
            </div>

            <div className={styles['send-modal-content-option']}>
              <div className={styles['send-modal-content-option-icon']}>
                <TelegramIcon />
              </div>
              <span>Viber</span>
            </div>

            <div className={styles['send-modal-content-option']}>
              <div className={styles['send-modal-content-option-icon']}>
                <CopyIcon />
              </div>
              <span>Copy</span>
            </div>

            <div className={styles['send-modal-content-option']}>
              <div className={styles['send-modal-content-option-icon']}>
                <OthersIcon />
              </div>
              <span>Другие</span>
            </div>
          </div>
          <div className={styles['send-modal-content-search']}>
            <span>Search</span>
          </div>
          <div className={styles['send-modal-content-contacts']}>
            <div className={styles['send-modal-content-contact']}>
              <div className={styles['send-modal-content-contact-user']}>
                <div
                  className={styles['send-modal-content-contact-user-photo']}
                >
                  <img
                    src='https://cdn1.radikalno.ru/uploads/2020/10/15/5e4bc63d1dc11e3b38089b33ef4bd1ae-full.jpg'
                    alt='user'
                  />
                </div>
                <span>Belle Lucia </span>
              </div>
              <div className={styles['send-modal-content-contact-icon']}>
                <SendIcon />
              </div>
            </div>

            <div className={styles['send-modal-content-contact']}>
              <div className={styles['send-modal-content-contact-user']}>
                <div
                  className={styles['send-modal-content-contact-user-photo']}
                >
                  <img
                    src='https://cdn1.radikalno.ru/uploads/2020/10/15/5e4bc63d1dc11e3b38089b33ef4bd1ae-full.jpg'
                    alt='user'
                  />
                </div>
                <span>Belle Lucia </span>
              </div>
              <div className={styles['send-modal-content-contact-icon']}>
                <SendIcon />
              </div>
            </div>

            <div className={styles['send-modal-content-contact']}>
              <div className={styles['send-modal-content-contact-user']}>
                <div
                  className={styles['send-modal-content-contact-user-photo']}
                >
                  <img
                    src='https://cdn1.radikalno.ru/uploads/2020/10/15/5e4bc63d1dc11e3b38089b33ef4bd1ae-full.jpg'
                    alt='user'
                  />
                </div>
                <span>Belle Lucia </span>
              </div>
              <div className={styles['send-modal-content-contact-icon']}>
                <SendIcon />
              </div>
            </div>

            <div className={styles['send-modal-content-contact']}>
              <div className={styles['send-modal-content-contact-user']}>
                <div
                  className={styles['send-modal-content-contact-user-photo']}
                >
                  <img
                    src='https://cdn1.radikalno.ru/uploads/2020/10/15/5e4bc63d1dc11e3b38089b33ef4bd1ae-full.jpg'
                    alt='user'
                  />
                </div>
                <span>Belle Lucia </span>
              </div>
              <div className={styles['send-modal-content-contact-icon']}>
                <SendIcon />
              </div>
            </div>

            <div className={styles['send-modal-content-contact']}>
              <div className={styles['send-modal-content-contact-user']}>
                <div
                  className={styles['send-modal-content-contact-user-photo']}
                >
                  <img
                    src='https://cdn1.radikalno.ru/uploads/2020/10/15/5e4bc63d1dc11e3b38089b33ef4bd1ae-full.jpg'
                    alt='user'
                  />
                </div>
                <span>Belle Lucia </span>
              </div>
              <div className={styles['send-modal-content-contact-icon']}>
                <SendIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendModal;
