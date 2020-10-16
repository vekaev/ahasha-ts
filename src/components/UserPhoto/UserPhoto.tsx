import { divide } from 'lodash';
import React from 'react';
import styles from './UserPhoto.module.scss';

interface IUserPhoto {
  src: string;
  abbr?: string;
}

const UserPhoto: React.FC<IUserPhoto> = ({ src, abbr }) => {
  return (
    <div className={styles['user-photo']}>
      {(src) ? <img src={src} alt="avatar" /> : <div className={styles['user-photo-none']}>{abbr}</div>}
    </div>
  );
}

export default UserPhoto;
