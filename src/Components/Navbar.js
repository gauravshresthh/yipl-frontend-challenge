import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../imgs/logo.png';
import menu from '../imgs/menu.svg';

const Navbar = () => {
  const [toggleInfo, setToggleInfo] = useState(true);
  const [headerShow, setHeaderShow] = useState(false);

  const toggleHandler = () => {
    setToggleInfo(!toggleInfo);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderShow(true);
    } else setHeaderShow(false);
  };

  return (
    <div
      className="navbar "
      style={{ background: headerShow ? 'black' : 'transparent' }}
    >
      <img
        src={menu}
        alt="menu"
        className="hamburger__menu"
        onClick={toggleHandler}
      />
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className={`nav-links ${toggleInfo ? ' openNav' : ' closeNav'}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Work">Work</Link>
          </li>
          <li>
            <Link to="Contact">Contact</Link>
          </li>
          <li>
            <span className="search--icon">
              <i class="fa fa-search "></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
