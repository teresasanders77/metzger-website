import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import CoachingProgram from './CoachingProgram';
import About from './About';
import Testimonials from './Testimonials';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <CoachingProgram />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home;