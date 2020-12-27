import React, { useEffect } from 'react'
import './About.css';
import headshot from '../../images/img-10.jpg';
import skydiving from '../../images/img-11.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='about'>
      <h2>About Me</h2>
      <div data-aos="fade-down">
        <img src={headshot} className="headshot" alt="Katie Headshot" />
      </div>
      <div data-aos="fade-up">
        <p>When I lost my long-term relationship and then my job (both of which were emotionally abusive), I was left with a feeling of worthlessness and a vast, empty numbness. Have you ever felt that way? It's terrible! I went through a depression where I tried many avenues to heal, including therapy, medication, and distraction. When the outside world wasn't working, I knew I had to turn inward, to myself!<br /><br />
          I had always been fascinated with why people think and act the way they do (an observer), so this depression propelled me further into my self-development studies. I spent the next decade reading every self-help book I could find, learning tools like tapping, affirmations, and meditation. I finally found my way out of the depression to a life I could have only dreamed of!<br /><br />
          Along the way I learned about the Life Coaching field, and I fell in love with the idea of being able to help people find answers that are authentic to them. Have you ever had someone else tell you what to do and it's not effective because it wasn't right for you? I believe coming up with one's own solution, having that 'Ah-Hah' moment, is the key to success!<br /><br />
          I researched (and was certified in) more than one Life Coaching program, including the highest-level coaching certification in the world, so I could better serve those who need a little support along the way!
          </p>
      </div>
      <div style={{
        backgroundImage: `url(${skydiving})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 125%',
        backgroundPosition: 'center top',
        width: '100vw',
        height: '900px',
      }}>
        <figure flass="quote">
          <q>
            The biggest adventure you can take <br />
            is to live the life of your dreams.
        </q>
          <figcaption>
            <cite> Oprah Winfrey</cite>
          </figcaption>
        </figure>
      </div>
    </div >
  )
}

export default About
