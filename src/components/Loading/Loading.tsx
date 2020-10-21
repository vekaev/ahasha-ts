import React from 'react';
import styles from './Loading.module.scss';
import { LoadingIcon } from '../Icons/Icons';

interface ILoadingProps {
  text?: string;
}

export const Loading: React.FC<ILoadingProps> = (props) => {
  return (
    <div className={styles['loading']}>
      <div className={styles['loading-content']}>
        <span className={styles['loading-content-text']}>{props.text}</span>
        <span className={styles['loading-content-icon']}><LoadingIcon /></span>
      </div>
    </div>
  );
}
