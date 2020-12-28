import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import CoachingProgram from './CoachingProgram';
import About from './About';
import Testimonials from './Testimonials';
import SignUp from './SignUp';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <CoachingProgram />
      <Testimonials />
      <SignUp />
      <Footer />
    </>
  )
}

export default Home;