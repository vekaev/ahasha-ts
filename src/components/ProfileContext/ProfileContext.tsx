import React, { createContext, useState } from 'react';
import { TestData } from '../../data';
import { IUser } from '../../pages/settings/Interfaces';

interface ProfileContextProps {
  user: IUser;
};

export const ProfileContext = createContext<any>({});

export const ProfileProvider: React.FC<any> = ({ children }) => {
  const [profile, setProfile] = useState(null);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        setProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
