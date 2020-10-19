import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import Header, { IHeaderProps } from '../../components/Header/Header';
import { SessionContext } from '../../components/SessionContext/SessionContext';

const HeaderContainer: React.FC<IHeaderProps> = ({ left, onClickLeft, middle, onClickMiddle, right, onClickRight, userProfile }) => {
  const { session } = useContext(SessionContext);

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

export default observer(HeaderContainer);
