import React, { useContext } from 'react';
import Header, { IHeaderProps } from '../../components/Header/Header';

const HeaderContainer: React.FC<IHeaderProps> = ({ left, onClickLeft, middle, onClickMiddle, right, onClickRight, profile }) => {

  return (
    <Header
      left={left}
      onClickLeft={onClickLeft}
      middle={middle}
      onClickMiddle={onClickMiddle}
      right={right}
      onClickRight={onClickRight}
      profile={profile}
    />
  );
}

export default HeaderContainer;
