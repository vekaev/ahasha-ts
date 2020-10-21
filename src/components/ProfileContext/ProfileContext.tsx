import React, { createContext, useState } from 'react';
import { IProfile } from '../../Interfaces';

// interface ProfileContextProps {
//   user: IUser;
// };

export const ProfileContext = createContext<IProfile | {}>({});

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
