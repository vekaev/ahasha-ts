import React, { useContext } from 'react';
import { NavBar } from '../../components/Navbar/NavBar';
import { SessionContext } from '../../components/SessionContext/SessionContext';
import { Profile, Session } from '../../data';

interface INavbarContainerProps {
  userProfile?: Profile;
  myUsername?: string;
}

const NavbarContainer: React.FC<INavbarContainerProps> = ({ userProfile, myUsername }) => {
  const { session } = useContext(SessionContext);

  if (!session?.profile) {
    return null;
  }

  return (
    <NavBar
      userProfile={userProfile}
      session={session}
    />
  );
}

export default NavbarContainer;
