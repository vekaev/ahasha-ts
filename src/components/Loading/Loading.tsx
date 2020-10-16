import React from 'react';
import styles from './Loading.module.scss';
import { LoadingIcon } from '../Icons/Icons';

export const Loading: React.FC = () => {
  return (
    <div className={styles['loading']}>
      <span className={styles['loading-icon']}><LoadingIcon /></span>
    </div>
  );
}
