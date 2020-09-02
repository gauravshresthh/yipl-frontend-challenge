import React from 'react';

import Card from '../Components/Card';

import './HeroContent.scss';

const HeroContent = () => {
  return (
    <div className="hero-content">
      <div className="hero-content-title">
        <h2>What you should have</h2>
      </div>

      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default HeroContent;
