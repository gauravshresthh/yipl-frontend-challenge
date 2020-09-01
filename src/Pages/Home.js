import React from 'react';
import './Home.scss';
import img from '../imgs/img-require.png';
import separatorLogo from '../imgs/separator-logo.png';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar />
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
      <div className="gallery">
        <div className="title">
          <h2>Some random food photos</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
