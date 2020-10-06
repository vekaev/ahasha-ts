import React from 'react';
import styles from './Like.module.scss';

const Like: React.FC = () => {
  return (
    <span>{LikeIcon}</span>
  );
}

const LikeIcon = (
  <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.8468 8.4375L13.1789 8.70506L13.4955 8.41923L14.3419 7.65504C16.5358 5.67416 19.9202 5.84689 21.9011 8.04083C23.8806 10.2333 23.7095 13.6146 21.5197 15.596L12.9938 22.9258L4.93502 15.8101L4.92655 15.8027L4.91774 15.7956C2.61579 13.9413 2.25287 10.572 4.10713 8.27008C5.96139 5.96813 9.33067 5.60521 11.6326 7.45947L12.8468 8.4375Z" stroke="black" stroke-linecap="round" />
  </svg>
);

export default Like;
