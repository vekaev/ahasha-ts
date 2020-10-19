import React, { createContext, useState } from 'react';
import { SessionUser } from '../../data/dto';
import { IProfile } from '../../Interfaces';

// interface ProfileContextProps {
//   user: IUser;
// };

export const SessionContext = createContext<IProfile | {}>({});

export const SessionProvider: React.FC<any> = (props: any) => {
  const session = props.session || null;

  return (
    <SessionContext.Provider
      value={{
        session,
      }}
    >
      {props.children}
    </SessionContext.Provider>
  );
}
