import React from 'react';
import './Gallery.scss';

const Gallery = () => {
  return (
    <>
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

export default Gallery;
