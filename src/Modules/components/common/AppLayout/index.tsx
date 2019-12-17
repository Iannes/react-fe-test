import React from 'react';
import { Header } from 'Modules/components/common/Header';

type ApplayoutProps = {
  children: JSX.Element
}

const Applayout: React.FC<ApplayoutProps> = ({ children }) => {

  return (
    <>
      <Header />
      <main className="mainLayout">{children}</main>
    </>
  );
};

export default Applayout;
