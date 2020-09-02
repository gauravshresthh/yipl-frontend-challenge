import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import './About.scss';

const About = () => {
  return (
    <div className="About">
      <Navbar />
      <div className="About__content">
        <h1>Not Just a tech Company!</h1>
        <p>
          We are not just a tech company , we are here to make a difference.
          We're here to bring out the best in you and give you best of things.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
