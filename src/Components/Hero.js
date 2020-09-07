import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-title">
          <h1>Are you a frontend ninja?</h1>
        </div>
        <div className="hero-subtitle">
          <p>
            Front end ninjas are the superheroes who bring life into designs.
            We're looking for frontend ninjas with knack of amazing attention .
            Are you the one?
          </p>
        </div>
        <div className="hero-btn">
          <Link to="/ApplyNow" className="btn-primary">
            <span>Apply Now</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
