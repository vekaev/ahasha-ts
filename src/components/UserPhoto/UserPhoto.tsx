import React, { CSSProperties } from 'react';
import styles from './UserPhoto.module.scss';

interface IUserPhoto {
  src: string;
  abbr?: string;
  style?: CSSProperties;
}

const UserPhoto: React.FC<IUserPhoto> = ({ src, abbr, style }) => {
  return (
    <div className={styles['user-photo']}>
      {(src) ? <img src={src} alt="avatar" /> : <span style={style} className={styles['user-photo-none']}>{abbr}</span>}
    </div>
  );
}

export default UserPhoto;
