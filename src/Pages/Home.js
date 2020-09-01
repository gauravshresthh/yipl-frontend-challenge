import React from 'react';
import './Home.scss';
import img from '../imgs/img-require.png';
import Navbar from '../Components/Navbar';
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
        <button className="btn-primary">
          <span className="btn-info">Apply Now</span>
        </button>
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
    </>
  );
};

export default Home;
