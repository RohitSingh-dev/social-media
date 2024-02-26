import React from 'react';
import './homepage.css';
import {Navbar} from '../../components';
import animation from '../../assets/homepage_animation.gif';

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className='homepage-top'>
        <Navbar></Navbar>
      </div>
      <div className='homepage-bottom'>
        <div className='homepage-bottom-left'>
          <h1>Social <span>Network</span></h1>
          <p>Welcome to a World of Connection and Creativity !</p>
        </div>
        <div className='homepage-bottom-right'>
          <img src={animation} alt='animation'></img>
        </div>
      </div>
    </div>
  )
}

export default Homepage