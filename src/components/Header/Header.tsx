import React, { ReactChild, useState } from 'react';
import styles from './Header.module.scss';
import joinClass from '../../utils/join';
import { Link } from 'react-router-dom';
import { Chat, FiltersIcon, BasketIcon } from '../Icons/Icons';
import { Logotype } from '../SvgImages/SvgImages';
import { Upload } from '../../components/Navbar/NavBar';
import UserPhoto from '../UserPhoto/UserPhoto';
import { IUser } from '../../pages/Settings/Interfaces';

export interface IHeaderProps {
  left?: ReactChild;
  right?: ReactChild;
  middle?: ReactChild;
  className?: string;
  classNameLeft?: string;
  classNameRight?: string;
  classNameMiddle?: string;
  onClickLeft?: () => void;
  onClickRight?: () => void;
  onClickMiddle?: () => void;
  user?: IUser;
  myUsername?: string;
}

const Header: React.FC<IHeaderProps> = ({
  left,
  right,
  middle,
  className,
  classNameLeft,
  classNameRight,
  classNameMiddle,
  onClickLeft,
  onClickRight,
  onClickMiddle,
  user,
  myUsername,
}) => {
  return (
    <>
      <div className={joinClass(styles.header, className || '')}>
        <div
          className={joinClass(styles['header-left'], classNameLeft || '', (!onClickLeft) ? styles['empty'] : '')}
          onClick={onClickLeft}
        >
          {<div
            className={styles['header-left-content']}
          >
            {left}
          </div>
          }
        </div>
        <div
          className={joinClass(styles['header-middle'], classNameMiddle || '', (!onClickMiddle) ? styles['empty'] : '')}
          onClick={onClickMiddle}
        >
          {<div
            className={styles['header-middle-content']}
          >
            {middle}
          </div>
          }
        </div>
        <div
          className={joinClass(styles['header-right'], classNameRight || '', (!onClickRight) ? styles['empty'] : '')}
          onClick={onClickRight}
        >
          {<div
            className={styles['header-right-content']}
          >
            {right}
          </div>
          }
        </div>
      </div>
      <div className={styles['header-desktop-wrapper']}>
        <div className={styles['header-desktop']}>
          <div className={styles['header-desktop-left']}>
            <ul className={styles['header-desktop-left-nav']}>
              <li className={joinClass(styles['header-desktop-left-nav-link'], styles['disabled'])}>
                {/* <Link to='/'> */}
                <span className={styles['header-desktop-left-nav-link-item']}>Main</span>
                {/* </Link> */}
              </li>
              <li className={joinClass(styles['header-desktop-left-nav-link'], styles['disabled'])}>
                {/* <Link to='/'> */}
                <span className={styles['header-desktop-left-nav-link-item']}>Mood board</span>
                {/* </Link> */}
              </li>
            </ul>
            <div className={styles['header-desktop-left-new-post']}>
              <Upload className={styles['header-desktop-left-new-post-button']}>
                <span>+ New Post</span>
              </Upload>
            </div>
          </div>
          <div className={styles['header-desktop-logo']}>
            <Logotype />
          </div>
          <div className={styles['header-desktop-right']}>
            <div className={styles['header-desktop-right-search']}>
              <span className={styles['header-desktop-right-search-text']}>Search</span>
              <span className={styles['header-desktop-right-search-icon']}><FiltersIcon /></span>
            </div>
            <div className={styles['header-desktop-right-button']}>
              <div className={styles['header-desktop-right-button-chat']}>
                {/* <Link to="/"> */}
                <Chat />
                {/* </Link> */}
              </div>
              <div className={styles['header-desktop-right-button-basket']}>
                {/* <Link to="/"> */}
                <BasketIcon />
                {/* </Link> */}
              </div>
            </div>
            <div className={styles['header-desktop-right-profile']}>
              {user ? (<Link to={`/u/${myUsername}`}>
                <UserPhoto
                  src={user?.mainPhoto}
                />
              </Link>) : (
                  <a href='https://ahasha.com/sign-in'>
                    Sign-in
                  </a>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
