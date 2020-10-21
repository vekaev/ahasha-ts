import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { BanIcon, Saved, SendIcon } from '../../../components/Icons/Icons';
import styles from './ActionsModal.module.scss';

interface ActionsModalProps {
  targetElement: any;
  isOpen: boolean;
  positionOnElement: string;
  savePost(e: any): void;
  hidePost(e: any): void;
  sharePost(e: any): void;
  closeModal(command: boolean): void;
  activeHover: string;
  setActiveHover(command: string): void;
}

const ActionsModal: React.FC<ActionsModalProps> = ({
  targetElement,
  isOpen,
  positionOnElement,
  savePost,
  hidePost,
  sharePost,
  closeModal,
  activeHover,
  setActiveHover,
}) => {
  const saveRef = useRef<any>(null);
  const hideRef = useRef<any>(null);
  const sendRef = useRef<any>(null);
  if (targetElement === null || !isOpen) return null;

  const { innerWidth: width } = window;

  if (width >= 950) {
    const style: { [k: string]: any } = {
      topRight: {
        bottom: '-46px',
        right: '-160px',
      },
      bottomRight: {
        bottom: '-46px',
        right: '-160px',
      },

      bottomLeft: {
        bottom: '-46px',
        right: '50px',
      },

      topLeft: {
        bottom: '0px',
        right: '50px',
      },
    };
    return ReactDOM.createPortal(
      <div
        className={styles['actions-desktop']}
        style={style[positionOnElement]}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className={styles['actions-desktop-action']} onClick={savePost}>
          <Saved />
          <span>Save</span>
        </div>

        <div className={styles['actions-desktop-action']} onClick={hidePost}>
          <BanIcon />
          <span>Сomplain</span>
        </div>

        <div className={styles['actions-desktop-action']} onClick={sharePost}>
          <SendIcon />
          <span>Share</span>
        </div>
      </div>,
      targetElement
    );
  } else {
    const style: { [k: string]: any } = {
      topRight: {
        save: {
          right: '47.77px',
          top: '-53.75px',
        },
        hide: {
          right: '-24.25px',
          top: '-24.25px',
        },
        send: {
          right: '-54.69px',
          top: '43.75px',
        },
        text: {
          right: '-140px',
          top: '-7px',
        },
      },
      bottomRight: {
        save: {
          right: '47.77px',
          bottom: '-53.75px',
        },
        hide: {
          right: '-24.25px',
          bottom: '-24.25px',
        },
        send: {
          right: '-54.69px',
          bottom: '43.75px',
        },
        text: {
          right: '-140px',
          bottom: '-7px',
        },
      },

      bottomLeft: {
        save: {
          left: '47.77px',
          bottom: '-53.75px',
        },
        hide: {
          left: '-24.25px',
          bottom: '-24.25px',
        },
        send: {
          left: '-54.69px',
          bottom: '43.75px',
        },
        text: {
          left: '-140px',
          bottom: '-7px',
        },
      },

      topLeft: {
        save: {
          left: '47.77px',
          top: '-53.75px',
        },
        hide: {
          left: '-24.25px',
          top: '-24.25px',
        },
        send: {
          left: '-54.69px',
          top: '43.75px',
        },
        text: {
          left: '-140px',
          top: '-7px',
        },
      },
    };

    const hoverText: { [K: string]: any } = {
      save: 'Save',
      hide: 'Hide',
      send: 'Send',
    };

    const closeOutModal = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ): void => {
      event.preventDefault();
      event.stopPropagation();

      if (event.currentTarget === event.target) {
        setActiveHover('');
        closeModal(false);
      }
    };

    const hoverActions = (event: any) => {
      event.stopPropagation();
      const x = event.targetTouches[0].clientX;
      const y = event.targetTouches[0].clientY;
      const elem = document.elementFromPoint(x, y);

      if (elem) {
        if (saveRef.current.contains(elem)) {
          if (activeHover === 'save') return;
          setActiveHover('save');
        } else if (hideRef.current.contains(elem)) {
          if (activeHover === 'hide') return;
          setActiveHover('hide');
        } else if (sendRef.current.contains(elem)) {
          if (activeHover === 'send') return;
          setActiveHover('send');
        } else {
          setActiveHover('');
        }
      }
    };

    return (
      <div
        className={styles['actions-mobile-overlay']}
        onClick={closeOutModal}
        onTouchMove={hoverActions}
      >
        {ReactDOM.createPortal(
          <div className={styles['actions-mobile']}>
            <div
              data-name='save'
              className={`${styles['actions-mobile-action']} ${
                activeHover === 'save' && styles['active']
              }`}
              style={style[positionOnElement]['save']}
              onClick={savePost}
              ref={saveRef}
            >
              <Saved />
            </div>
            <div
              data-name='hide'
              className={`${styles['actions-mobile-action']} ${
                activeHover === 'hide' && styles['active']
              }`}
              style={style[positionOnElement]['hide']}
              onClick={hidePost}
              ref={hideRef}
            >
              <BanIcon />
            </div>
            <div
              data-name='send'
              className={`${styles['actions-mobile-action']} ${
                activeHover === 'send' && styles['active']
              }`}
              style={style[positionOnElement]['send']}
              onClick={sharePost}
              ref={sendRef}
            >
              <SendIcon />
            </div>
            <span
              className={styles['actions-mobile-name']}
              style={style[positionOnElement]['text']}
            >
              {hoverText[activeHover] ? hoverText[activeHover] : ''}
            </span>
          </div>,
          targetElement
        )}
      </div>
    );
  }
};

export default ActionsModal;
