import React from 'react';
import styles from './UserPhoto.module.scss';

interface IUserPhoto {
  src: string;
}

const UserPhoto: React.FC<IUserPhoto> = ({ src }) => {
  return (
    <div className={styles['user-photo']}>
      <img src={src} alt="avatar" />
    </div>
  );
}

export default UserPhoto;
