import React, { createContext, ProviderProps, ReactChild, ReactNode } from 'react'; import { Context } from 'vm';
import { testData } from '../../data/testData';
import { IUser } from '../../pages/Settings/Interfaces';

interface UserDataContextProps {
  user: IUser;
};

export const UserDataContext = createContext<any>({});

export const UserDataProvider: React.FC<any> = ({ children }) => {
  const user = new testData().user;
  // const user = null;

  return (
    <UserDataContext.Provider
      value={user}
    >
      {children}
    </UserDataContext.Provider>
  );
}
