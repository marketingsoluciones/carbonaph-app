import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';

const Header: React.FC = () => {
  return (
    <header>
      <Navbar />
      <HeroSection />
    </header>
  );
};

export default Header;