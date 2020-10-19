import React from 'react';
import { NavBar } from '../../components/Navbar/NavBar';

const NavbarContainer: React.FC<any> = ({ profile }) => {
  return (
    <NavBar
      profile={profile}
    />
  );
}

export default NavbarContainer;
