import React from 'react';

import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import Gallery from '../Components/Gallery';
import News from '../Components/News';
import HeroContent from '../Components/HeroContent';
import Services from '../Components/Services';
import Footer from '../Components/Footer';

import './Home.scss';

const Home = () => {
  return (
    <>
      <div className="nav-hero__wrapper">
        <Navbar />
        <Hero />
      </div>
      <HeroContent />
      <News />
      {/* <Gallery />
      <Services />
      <Footer /> */}
    </>
  );
};

export default Home;
