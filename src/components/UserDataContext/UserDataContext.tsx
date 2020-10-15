import React, { createContext } from 'react';
import { TestData } from '../../data';
import { IUser } from '../../pages/settings/Interfaces';

interface UserDataContextProps {
  user: IUser;
};

export const UserDataContext = createContext<any>({});

export const UserDataProvider: React.FC<any> = ({ children }) => {
  const user = new TestData().user;
  // const user = null;

  return (
    <UserDataContext.Provider
      value={user}
    >
      {children}
    </UserDataContext.Provider>
  );
}
