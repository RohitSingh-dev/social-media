import React from 'react';
import './aboutPage.css';
import {Navbar} from '../../components';
import aboutUs_image from '../../assets/aboutUs_image.png';

const AboutPage = () => {
  return (
    <div className='aboutPage'>
      <div className='aboutPage-top'><Navbar /></div>
      <div className='aboutPage-bottom'>
        <div className='aboutPage-bottom-top'>
          <h1>OUR STORY</h1>
          <span>Driven by our passion for technology and innovation, we recognized the need for a platform that transcends traditional social media boundaries. Magnet isn't just another social networking site; it's a community-driven initiative crafted with care to cater to the diverse needs of today's users.</span>
        </div>
        <div className='aboutPage-bottom-bottom'>
          <div className='aboutPage-bottom-bottom-left'>
            <h2>Our Mission:</h2>
            <span>Once again welcome to Magnet, a vibrant and dynamic platform . At Magnet our mission is two-fold. Firstly, We embarked on this journey with a shared vision: to create a digital space where individuals can connect, communicate, and collaborate effortlessly. And Secondly, to redefine the future of social networking.</span>
            <h2>Who We Are:</h2>
            <span>Designed and developed by a team of enthusiastic final year college students. Our team comprises talented individuals from various disciplines, including computer science, design, and business. Together, we've pooled our expertise to create a seamless and intuitive platform that prioritizes user experience above all else. Our commitment extends beyond the realm of theoretical knowledge; we believe in learning by doing.</span>
          </div>
          <div className='aboutPage-bottom-bottom-right'>
            <img src={aboutUs_image} alt='icon'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage