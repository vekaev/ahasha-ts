import React, {ReactNode} from 'react';
import Header, {IHeaderProps} from '../../components/Header/Header';
import {NavBar} from '../../components/Navbar/NavBar';

interface ILayoutProps {
  header: IHeaderProps;
  children: ReactNode;
  NavBarDisabled?: boolean;
}

const Layout: React.FC<ILayoutProps> = ({header, children, NavBarDisabled}) => {
  return (
    <>
      <Header
        left={header.left}
        onClickLeft={header.onClickLeft}
        middle={header.middle}
        onClickMiddle={header.onClickMiddle}
        right={header.right}
        onClickRight={header.onClickRight}
      />
      <main>{children}</main>
      {!NavBarDisabled && <NavBar/>}
    </>
  );
}

export default Layout;
