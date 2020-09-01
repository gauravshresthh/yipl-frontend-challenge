import React from 'react';
import separatorLogo from '../imgs/separator-logo.png';
const News = () => {
  return (
    <>
      <div className="news-wrapper">
        <div className="news">
          <div className="card">
            <h5>resources</h5>
            <div className="card-links">
              <ul>
                <li>Designer News</li>
                <hr className="hr-separator" />
                <li>Smashing Magazine</li>
                <hr className="hr-separator" />
                <li>Frontend Front</li>
                <hr className="hr-separator" />
                <li>View all Resources</li>
              </ul>
            </div>
          </div>
          <div className="separator"></div>
          <div className="card">
            <h5>Latest from frontend</h5>
            <div className="card-links">
              <ul>
                <li>Javascript Performance Optimization Tips:An overview</li>
                <hr className="hr-separator" />
                <li>Javascript Performance Optimization Tips:An overview</li>
                <hr className="hr-separator" />
                <li>Javascript Performance Optimization Tips:An overview</li>
                <hr className="hr-separator" />
                <li>Javascript Performance Optimization Tips:An overview</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="separator-logo">
          <hr className="hr-small" />

          <img src={separatorLogo} alt="logo" />
          <hr className="hr-small" />
        </div>
      </div>
    </>
  );
};

export default News;
