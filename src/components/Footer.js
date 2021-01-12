import React, { useRef } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';

const scrollToRef = (ref) => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

function Footer() {
  const myRef = useRef(null)
  const executeScroll = () => {
    scrollToRef(myRef);
  }

  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <div ref={myRef}>
              <Link to='/' className='navbar-logo' onClick={executeScroll}>
                <img src={Logo} alt="KM logo" height="140px" />
              </Link>
            </div>
          </div>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;