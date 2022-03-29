import React, { ReactNode } from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import './layout.scss';

const Layout = ({ content, header = true, footer = true }:
  {content: ReactNode, header: boolean, footer: boolean}) => (
    <div className="layoutContainer flex flex-col">
      {header && <Header />}
      <div className="content grow">
        { content }
        {footer && <Footer />}
      </div>
    </div>
);

export default Layout;
