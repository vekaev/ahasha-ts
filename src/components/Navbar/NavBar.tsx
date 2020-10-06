import React, { ReactChild, useEffect, useState } from 'react';
import { NavLink, withRouter, RouteComponentProps } from "react-router-dom";
import { Chat, Home, Saved, User, Add } from '../NavIcons';
import styles from './NavBar.module.scss'

interface LinkProps {
    link: string;
    disabled?: boolean;
    exact?: boolean;
    children: ReactChild
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

const UploadPhoto = ({ history }: RouteComponentProps) => {

    const [img, setImg] = useState<string | ArrayBuffer | null>()

    useEffect(() => {
        if (img) {
            history.push({
                pathname: '/add-photo',
                state: { img }
            })
        }
    }, [img])

    const onSelectFile = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener("load", () => setImg(reader.result));
            reader.readAsDataURL(e.target.files[0]);
        }
    }


    return (
        <>
            <li className={styles[`navigation__list-item`]}>
                <label style={
                    {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        cursor: "pointer"
                    }
                } htmlFor="upload__image">
                    <Add />
                </label>
                <input hidden accept="image/*" id='upload__image' onChange={onSelectFile} type='file' />
            </li>
        </>
    )
}

const Upload = withRouter(UploadPhoto);


export const NavBar = () => {
    return (
        <nav className={styles['navigation']}>
            <ul className={styles['navigation__list']}>
                <LinkComponent exact link='/'><Home /></LinkComponent>
                <LinkComponent link='/chat'><Chat /></LinkComponent>
                <Upload />
                <LinkComponent link='/saved'><Saved /></LinkComponent>
                <LinkComponent link='/u/username'><User /></LinkComponent>
            </ul>
        </nav>
    )
}
