import React from 'react';
import img from '../imgs/f.png';

import './Card.scss';

const Card = () => {
  return (
    <>
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
    </>
  );
};

export default Card;
