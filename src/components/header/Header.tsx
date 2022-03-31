import React from 'react';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';
import './header.scss';
import { getDictionary } from './utils/functions';

const Header = () => {
  const srcLang:any = getDictionary('en');
  const links = [
    { id: 'home', to: '/', text: srcLang?.navBar.home },
    { id: 'about', to: '/about', text: srcLang?.navBar.about },
    { id: 'contact', to: '/contact', text: srcLang?.navBar.contact },
  ];

  return (
    <nav className="flex align-middle">
      <ul className="container flex flex-wrap justify-end mx-auto navLinks">
        {links.map((link) => (
          <li className="navLink p-5"><Link to={link.to}>{link.text}</Link></li>
        ))}
      </ul>
      <div className="menuIcon p-5">
        <MenuButton navLinks={links} />
      </div>
    </nav>
  );
};

export default Header;
