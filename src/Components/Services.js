import React from 'react';
import './Services.scss';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
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
      </div>
      <div className="service-btn">
        <Link to="/ApplyNow" className="btn-primary">
          <span className="btn-info">Apply Now</span>
        </Link>
      </div>
    </div>
  );
};

export default Services;
