import React from 'react';
import Navbar from './components/navbar';
import Carousel from './components/Carousel';
import Cards from './components/Cards';
import AboutUs from './components/AboutUs';
import Footerlast from './components/footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />       {/* Ensure Navbar is rendered */}
      <Carousel />
      <AboutUs />      {/* Ensure Carousel is rendered */}
      <Cards />        {/* Ensure Cards are rendered */}    
      <Footerlast />   {/* Ensure Footer is rendered */}
    </div>
  );
};

export default HomePage;

