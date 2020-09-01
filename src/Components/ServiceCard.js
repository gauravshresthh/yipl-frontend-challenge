import React from 'react';
import cardLogo from '../imgs/ic-tailored@3x.png';

const ServiceCard = () => {
  return (
    <>
      <div className="service-card">
        <div className="card-logo">
          <img src={cardLogo} alt="card logo" />
        </div>
        <div className="card-content">
          <div className="card-subtitle">
            <h4>Tailored objectives</h4>
          </div>
          <div className="content-info">
            <p>
              A small river named Duden flows by their place and supplies it
              with the neccessary regelialia.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
