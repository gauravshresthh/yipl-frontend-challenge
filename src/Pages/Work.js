import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import './Work.scss';

const Work = () => {
  return (
    <div className="work">
      <Navbar />
      <div className="work__content">
        <h2>Stuffs we do</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Work;
