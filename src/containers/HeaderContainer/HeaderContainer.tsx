import React from 'react';
import Header, { IHeaderProps } from '../../components/Header/Header';

const HeaderContainer: React.FC<IHeaderProps> = ({ left, onClickLeft, middle, onClickMiddle, right, onClickRight, userProfile, session }) => {

  return (
    <Header
      left={left}
      onClickLeft={onClickLeft}
      middle={middle}
      onClickMiddle={onClickMiddle}
      right={right}
      onClickRight={onClickRight}
      userProfile={userProfile}
      session={session}
    />
  );
}

export default HeaderContainer;
