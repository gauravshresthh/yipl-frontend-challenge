import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <div className="hero">
        <h1>Are you a frontend ninja?</h1>
        <h5 className="subTitle">
          Front end ninjas are the superheroes who bring life into designs.
          We're looking for frontend ninjas with knack of amazing attention .
          Are you the one?
        </h5>
        <Link to="/ApplyNow" className="btn-primary">
          <span className="btn-info">Apply Now</span>
        </Link>
      </div>
    </>
  );
};

export default Hero;
