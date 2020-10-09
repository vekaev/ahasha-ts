import React from 'react';
import joinClass from '../../utils/join';
import styles from './Like.module.scss';

interface ILikeProps {
  icon: boolean;
  // counter: number;
  setLike: ({ }: any) => void;
  className?: string;
}

const Like: React.FC<ILikeProps> = ({ icon, setLike, className }) => {
  // // @ts-ignore
  // function abbrNum(number) {
  //   let x = 1;

  //   // 2 decimal places => 100, 3 => 1000, etc
  //   let decPlaces = Math.pow(10, x);

  //   // Enumerate number abbreviations
  //   let abbrev = [" K", " M", " B", " T"];

  //   // Go through the array backwards, so we do the largest first
  //   for (let i = abbrev.length - 1; i >= 0; i--) {

  //     // Convert array index to "1000", "1000000", etc
  //     let size = Math.pow(10, (i + 1) * 3);

  //     // If the number is bigger or equal do the abbreviation
  //     if (size <= number) {
  //       // Here, we multiply by decPlaces, round, and then divide by decPlaces.
  //       // This gives us nice rounding to a particular decimal place.
  //       number = Math.trunc(number * decPlaces / size) / decPlaces;

  //       // Add the letter for the abbreviation
  //       number += abbrev[i];

  //       // We are done... stop
  //       break;
  //     }
  //   }

  //   return number;
  // }

  return (
    <div
      className={styles['like']}
    >
      <div
        className={styles['like-wrapper']}
        onClick={(event: any) => {
          if (!icon) {
            setLike?.({
              icon: !icon,
              // counter: counter + 1,
            });
          } else {
            setLike?.({
              icon: !icon,
              // counter: counter - 1,
            });
          }
        }}
      >
        <div className={joinClass(styles['like-icon'], (icon) ? styles['active'] : '', className || '')}>
          <LikeIcon />
        </div>
        {/* <div className={styles['like-counter']}>
          {(counter === 0) ? null : abbrNum(counter)}
        </div> */}
      </div>
    </div >
  );
}

const LikeIcon: React.FC = () => {
  return (
    <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.8468 8.4375L13.1789 8.70506L13.4955 8.41923L14.3419 7.65504C16.5358 5.67416 19.9202 5.84689 21.9011 8.04083C23.8806 10.2333 23.7095 13.6146 21.5197 15.596L12.9938 22.9258L4.93502 15.8101L4.92655 15.8027L4.91774 15.7956C2.61579 13.9413 2.25287 10.572 4.10713 8.27008C5.96139 5.96813 9.33067 5.60521 11.6326 7.45947L12.8468 8.4375Z" stroke="black" strokeLinecap="round" />
    </svg>
  );
}

export default Like;
