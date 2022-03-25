import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import './layout.scss';

const Layout = ({ content }: {content: any}) => (
  <div className="layoutContainer flex flex-col">
    <Header />
    <div className="grow">
      { content }
    </div>
    <Footer />
  </div>
);

export default Layout;
