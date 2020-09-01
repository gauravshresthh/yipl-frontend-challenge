import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../imgs/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/" className="btn btn-links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="btn btn-links">
              About
            </Link>
          </li>
          <li>
            <Link to="/Work" className="btn btn-links">
              Work
            </Link>
          </li>
          <li>
            <Link to="Contact" className="btn btn-links">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
