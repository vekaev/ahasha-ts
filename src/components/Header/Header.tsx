import React, { ReactChild, useContext } from 'react';
import styles from './Header.module.scss';
import joinClass from '../../utils/join';
import { Link } from 'react-router-dom';
import { Chat, FiltersIcon, BasketIcon } from '../Icons/Icons';
import { Logotype } from '../SvgImages/SvgImages';
import { Upload } from '../../components/Navbar/NavBar';
import UserPhoto from '../UserPhoto/UserPhoto';
import { abbr } from '../../utils/abbr';
import { LangContext } from './../LangContext/LangContext';
import { Profile } from '../../data';

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
  profile?: any;
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
  profile,
}) => {
  const langContext = useContext(LangContext);
  let text = langContext?.useLocale()['header'];

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
              <li className={joinClass(styles['header-desktop-left-nav-link'])}>
                <a href='https://www.ahasha.com'>
                  <span className={styles['header-desktop-left-nav-link-item']}>{text['main']}</span>
                </a>
              </li>
              <li className={joinClass(styles['header-desktop-left-nav-link'], styles['disabled'])}>
                {/* <Link to='/'> */}
                <span className={styles['header-desktop-left-nav-link-item']}>{text['moonBoard']}</span>
                {/* </Link> */}
              </li>
            </ul>
            <div className={styles['header-desktop-left-new-post']}>
              {profile ? (
                <Upload className={styles['header-desktop-left-new-post-button']}>
                  <span>+ {text['newPost']}</span>
                </Upload>
              ) : (null)}
            </div>
          </div>
          <div className={styles['header-desktop-logo']}>
            <Logotype />
          </div>
          <div className={styles['header-desktop-right']}>
            <div className={styles['header-desktop-right-search']}>
              <span className={styles['header-desktop-right-search-text']}>{text['search']}</span>
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
            {profile ? (
              <div className={styles['header-desktop-right-profile']}>
                <Link to={`/${profile?.username}`}>
                  <UserPhoto
                    abbr={abbr(profile.firstName, profile.lastName)} src={profile?.avatar}
                  />
                </Link>
              </div>) : (
                <div className={styles['header-desktop-right-profile-none']}>
                  <a href='https://www.ahasha.com/'>
                    {text['signIn']}
                  </a>
                </div>
              )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
