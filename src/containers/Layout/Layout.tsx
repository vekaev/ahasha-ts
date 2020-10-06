import React, { ReactNode } from 'react';
import Header, { IHeaderProps } from '../../components/Header/Header';
import { NavBar } from '../../components/Navbar/NavBar';

interface ILayoutProps {
  header: IHeaderProps;
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ header, children }) => {
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
      <NavBar />
    </>
  );
}

export default Layout;
