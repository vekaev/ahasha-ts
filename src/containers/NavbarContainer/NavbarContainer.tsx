import React, { useContext } from 'react';
import { NavBar } from '../../components/Navbar/NavBar';
import { UserDataContext } from '../../components/UserDataContext/UserDataContext';
import { IUser } from '../../pages/settings/Interfaces';

const NavbarContainer: React.FC = () => {
  const user: IUser = useContext(UserDataContext);

  return (
    <NavBar
      user={user}
    />
  );
}

export default NavbarContainer;
