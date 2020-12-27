import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import CoachingProgram from './CoachingProgram';
import About from './About';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <CoachingProgram />
      <Footer />
    </>
  )
}

export default Home;