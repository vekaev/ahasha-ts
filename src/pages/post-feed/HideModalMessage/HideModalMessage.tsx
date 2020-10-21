import React from 'react';
import ReactDOM from 'react-dom';
import styles from './HideModalMessage.module.scss';

interface IHideModalMessageProps {
  targetElement: any;
  isOpen: boolean;
  cancel(state: boolean): void;
}

const HideModalMessage: React.FC<IHideModalMessageProps> = ({
  targetElement,
  isOpen,
  cancel,
}) => {
  if (targetElement === null || !isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={styles['hide-modal-message']}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <span>Не оригинальные товары!</span>
      <span>Мы будем показывать меньше таких публикаций</span>

      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          cancel(false);
        }}
        value='Cancel'
      >
        Cancel
      </button>
    </div>,
    targetElement
  );
};

export default HideModalMessage;
