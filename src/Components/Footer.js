import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="copyright">
          <p>&copy; Copyright @gauravshresthh 2020. All rights Reserved.</p>
        </div>
        <div className="footer-links">
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
