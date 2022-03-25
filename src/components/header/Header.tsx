import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import './header.scss';

const Header = () => (
  <nav className="flex container align-middle justify-end mt-5">
    <ul className="navLinks flex">
      <li className="navLink p-5"><Link to="/">HOME</Link></li>
      <li className="navLink p-5"><Link to="/about">ABOUT</Link></li>
      <li className="navLink p-5"><Link to="/contact">CONTACT</Link></li>
    </ul>
    <div className="menuIcon p-5">
      <Dropdown />
    </div>
  </nav>
);

export default Header;
