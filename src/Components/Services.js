import React from 'react';
import './Services.scss';

import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="services-title">
          <h2>What we provide</h2>
        </div>
        <div className="service-card-container">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </>
  );
};

export default Services;
