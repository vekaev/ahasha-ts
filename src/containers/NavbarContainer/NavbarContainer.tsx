import React from 'react';
import { NavBar } from '../../components/Navbar/NavBar';
import { Profile } from '../../data';

interface INavbarContainerProps {
  profile?: Profile;
  myUsername?: string;
}

const NavbarContainer: React.FC<INavbarContainerProps> = ({ profile, myUsername }) => {
  return (
    <NavBar
      profile={profile}
      myUsername={myUsername}
    />
  );
}

export default NavbarContainer;
