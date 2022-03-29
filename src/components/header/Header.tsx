import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import './header.scss';
import { getDictionary } from './utils/functions';

const Header = () => {
  const srcLang:any = getDictionary('en');
  return (
    <nav className="flex align-middle">
      <ul className="container flex flex-wrap justify-end mx-auto navLinks">
        <li className="navLink p-5"><Link to="/">{srcLang?.navBar.home}</Link></li>
        <li className="navLink p-5"><Link to="/about">{srcLang?.navBar.about}</Link></li>
        <li className="navLink p-5"><Link to="/contact">{srcLang?.navBar.contact}</Link></li>
      </ul>
      <div className="menuIcon p-5">
        <Dropdown />
      </div>
    </nav>
  );
};

export default Header;
