import React, { useContext } from 'react';
import Header, { IHeaderProps } from '../../components/Header/Header';
import { UserDataContext } from '../../components/UserDataContext/UserDataContext';
import { IUser } from '../../pages/settings/Interfaces';

const HeaderContainer: React.FC<IHeaderProps> = ({ left, onClickLeft, middle, onClickMiddle, right, onClickRight }) => {
  const user: IUser = useContext(UserDataContext);

  return (
    <Header
      left={left}
      onClickLeft={onClickLeft}
      middle={middle}
      onClickMiddle={onClickMiddle}
      right={right}
      onClickRight={onClickRight}
      user={user}
    />
  );
}

export default HeaderContainer;
