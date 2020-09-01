import React from 'react';
import img from '../imgs/f.png';

const HeroContent = () => {
  return (
    <>
      <div className="hero-content">
        <h2>What you should have</h2>
        <div className="card-container">
          <div className="card">
            <div className="card-img">
              <img src={img} alt="img" />
            </div>
            <div className="card-header">
              <h5>Attention to detail</h5>
            </div>
            <div className="card-info">
              <p>
                We look for attention to detail in our candidates.As a frontend
                intern, you should have superpowers of looking into details of a
                design
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={img} alt="img" />
            </div>
            <div className="card-header">
              <h5>Attention to detail</h5>
            </div>
            <div className="card-info">
              <p>
                We look for attention to detail in our candidates.As a frontend
                intern, you should have superpowers of looking into details of a
                design
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={img} alt="img" />
            </div>
            <div className="card-header">
              <h5>Attention to detail</h5>
            </div>
            <div className="card-info">
              <p>
                We look for attention to detail in our candidates.As a frontend
                intern, you should have superpowers of looking into details of a
                design
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
