import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import './ApplyNow.scss';

const ApplyNow = () => {
  return (
    <div className="applyNow">
      <Navbar />
      <div className="applyNow__content">
        <h1>This is the Applying Page</h1>
      </div>
      <Footer />
    </div>
  );
};

export default ApplyNow;
