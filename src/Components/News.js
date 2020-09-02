import React from 'react';
import separatorLogo from '../imgs/separator-logo.png';
import './News.scss';

const News = () => {
  return (
    <div className="news-wrapper">
      <div className="news">
        <div className="news-card">
          <div className="card-title">
            <h5>resources</h5>
          </div>
          <div className="news-card-links">
            <span>Designer News</span>
            <span className="line"></span>

            <span>Smashing Magazine</span>
            <span className="line"></span>

            <span>Frontend Front</span>
            <span className="line"></span>

            <span>View all Resources</span>
          </div>
        </div>
        <div className="separator"></div>
        <div className="news-card">
          <div className="card-title">
            <h5>Latest from frontend</h5>
          </div>
          <div className="news-card-links">
            <span>Javascript performance optimization tips:an overview</span>
            <span className="line"></span>

            <span>Designing a dashboard for concourse</span>
            <span className="line"></span>

            <span>JS Robot-Learn to code in javascript</span>
            <span className="line"></span>

            <span>View all Updates</span>
          </div>
        </div>
      </div>
      <div className="separator-logo">
        <hr className="hr-small" />

        <img src={separatorLogo} alt="logo" />
        <hr className="hr-small" />
      </div>
    </div>
  );
};

export default News;
