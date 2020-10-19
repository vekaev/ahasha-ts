import React, { ReactChild, useEffect, useState } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { Profile, Session } from '../../data';
import { Chat, Home, Saved, User, Add } from '../Icons/Icons';
import styles from './NavBar.module.scss'

interface LinkProps {
  link: string;
  disabled?: boolean;
  exact?: boolean;
  children: ReactChild;
  profile?: any;
}

const LinkComponent = ({ link, disabled, children, exact }: LinkProps) => {
  return (
    <li className={`${styles[`navigation__list-item`]} ${disabled && styles['disabled']}`}>
      <NavLink exact={exact} to={link} activeClassName={styles['active']}>
        {children}
      </NavLink>
    </li>
  )
}

const UploadPhoto: React.FC<any> = ({ history, children, className }) => {

  const [files, setFiles] = useState()

  useEffect(() => {
    if (files) {
      history.push({
        pathname: '/add-photo',
        state: { files }
      })
    }
  }, [files])

  const onSelectFile = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(e.target.files);
    }
  }

  return (
    <>
      <li className={className ? className : styles[`navigation__list-item`]}>
        <label style={
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            cursor: "pointer",
            userSelect: 'none',
          }
        } htmlFor="upload__image">
          {children ? children : <Add />}
        </label>
        <input hidden accept="image/*" id='upload__image' onChange={onSelectFile} type='file' />
      </li>
    </>
  )
}

export const Upload = withRouter(UploadPhoto);

interface INavBarProps {
  userProfile?: any;
  myUsername?: string;
  session?: Session;
}

export const NavBar: React.FC<INavBarProps> = ({ userProfile, myUsername, session }) => {
  const [profileVisible, setProfileVisible] = useState(true);

  useEffect(() => {
    if (!myUsername) {
      setProfileVisible(false);
    }
  }, [myUsername])

  // console.log(session)

  if (!session?.profile) {
    return null;
  }

  return (
    <nav className={styles['navigation']}>
      <ul className={styles['navigation__list']}>
        <LinkComponent disabled exact link='/'><Home /></LinkComponent>
        <LinkComponent disabled link='/chat'><Chat /></LinkComponent>
        {userProfile ? <Upload /> : null}
        <LinkComponent disabled link='/saved'><Saved /></LinkComponent>
        <LinkComponent exact disabled={profileVisible ? false : true} link={myUsername ? `/${myUsername}` : `/${userProfile?.username}`}><User /></LinkComponent>
      </ul>
    </nav>
  )
}
