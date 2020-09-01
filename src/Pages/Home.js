import React from 'react';
import './Home.scss';
import img from '../imgs/f.png';
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

      <div className="gallery">
        <div className="title">
          <h2>Some random food photos</h2>
          <p>Just because</p>
        </div>
        <div className="img-container">
          <img
            src="https://images.unsplash.com/photo-1558467523-46113f1fcf72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
            alt="food1"
          />
          <img
            src="https://images.unsplash.com/photo-1558920558-fb0345e52561?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="food1"
          />
          <img
            src="https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80"
            alt="food1"
          />
          <img
            src="https://images.unsplash.com/photo-1513262599279-d287e25f4d84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1002&q=80"
            alt="food1"
          />
          <img
            src="https://images.unsplash.com/photo-1568581789190-ae90a7da930b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
            alt="food1"
          />
          <img
            src="https://images.unsplash.com/photo-1542002976-c3be9b105508?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1109&q=80"
            alt="food1"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
