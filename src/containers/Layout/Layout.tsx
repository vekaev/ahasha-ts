import React, { ReactNode, useContext, useEffect } from 'react';
import { IHeaderProps } from '../../components/Header/Header';
import { ProfileContext } from '../../components/ProfileContext/ProfileContext';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import NavbarContainer from '../NavbarContainer/NavbarContainer';

interface ILayoutProps {
  header: IHeaderProps;
  children: ReactNode;
  NavBarDisabled?: boolean;
}

const Layout: React.FC<ILayoutProps> = ({ header, children, NavBarDisabled }) => {
  const profileContext: any = useContext(ProfileContext);
  const profile = profileContext?.profile;

  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  })

  return (
    <>
      <HeaderContainer
        left={header.left}
        onClickLeft={header.onClickLeft}
        middle={header.middle}
        onClickMiddle={header.onClickMiddle}
        right={header.right}
        onClickRight={header.onClickRight}
        profile={profile}
      />
      <main>{children}</main>
      {!NavBarDisabled && <NavbarContainer profile={profile} />}
    </>
  );
}

export default Layout;
