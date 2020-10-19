import React, { createContext, useState } from 'react';
import { Session } from '../../data/TestData2';

// interface ProfileContextProps {
//   user: IUser;
// };

export const SessionContext = createContext<any>({});

export const SessionProvider: React.FC<any> = (props: any) => {
  return (
    <SessionContext.Provider
      value={{
        session: props.session || null,
      }}
    >
      {props.children}
    </SessionContext.Provider>
  );
}
