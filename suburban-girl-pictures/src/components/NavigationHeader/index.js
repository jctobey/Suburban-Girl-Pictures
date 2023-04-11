import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import logo from '../../../src/logo.svg';
import './styles.scss';

export const NavigationHeader = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="navbar__logo" alt="logo" />
      <div className="navbar__links">
        <Link to="/work" className="navbar__links-item">
          Work
        </Link>
        <Link to="/contact" className="navbar__links-item">
          Contact
        </Link>
      </div>
      <Menu right burgerBarClassName="navbar__hamburger" side="right">
        <Link to="/work" className="navbar__links-item">
          Work
        </Link>
        <Link to="/contact" className="navbar__links-item">
          Contact
        </Link>
      </Menu>
    </nav>
  );
};
