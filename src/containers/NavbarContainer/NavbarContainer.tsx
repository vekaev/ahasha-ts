import React from 'react';
import { NavBar } from '../../components/Navbar/NavBar';
import { Profile, Session } from '../../data';

interface INavbarContainerProps {
  userProfile?: Profile;
  myUsername?: string;
  session?: Session;
}

const NavbarContainer: React.FC<INavbarContainerProps> = ({ userProfile, myUsername, session }) => {
  return (
    <NavBar
      userProfile={userProfile}
      myUsername={myUsername}
      session={session}
    />
  );
}

export default NavbarContainer;
