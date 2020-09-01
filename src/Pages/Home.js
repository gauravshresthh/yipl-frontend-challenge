import React from 'react';
import './Home.scss';

import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import Gallery from '../Components/Gallery';
import News from '../Components/News';
import HeroContent from '../Components/HeroContent';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroContent />
      <News />
      <Gallery />
    </>
  );
};

export default Home;
