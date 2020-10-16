import React, { ReactPropTypes, useContext } from 'react';
import { NavBar } from '../../components/Navbar/NavBar';
import { ProfileContext } from '../../components/ProfileContext/ProfileContext';

const NavbarContainer: React.FC<any> = ({ profile }) => {
  return (
    <NavBar
      profile={profile}
    />
  );
}

export default NavbarContainer;
