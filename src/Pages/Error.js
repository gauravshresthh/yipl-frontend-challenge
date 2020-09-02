import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import './Error.scss';

const Error = () => {
  return (
    <div className="error">
      <Navbar />
      <div className="error__content">
        <h2>404 ! Not Found</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
