import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Video from '../videos/video-2.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video className='videoTag' autoPlay loop muted>
        <source src={Video} type='video/mp4' />
      </video>
      <h1>LIFE COACHING</h1>
      <p>with</p>
      <h2>Katherine Metzger</h2>
      <h3>Certified High Performance Coach</h3>
      <div className="hero-btns">
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          START YOUR JOURNEY
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
