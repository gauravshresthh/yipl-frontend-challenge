import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import './Contact.scss';
const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <div className="contact__content">
        <h2>We would love to contact with you</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
