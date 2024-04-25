import React from 'react';
import './welcomeBar.css';
import headingpic from '../../assets/dashboard_heading.png';

const WelcomeBar = () => {
  return (
    <div className='welcomeBar'>
        <div className='welcomeBar-left'>
            <h1>Mag<span>net</span></h1>
        </div>
        <div className='welcomeBar-middle'>
          <h1>Welcome to the </h1>
          <img src={headingpic} alt='icon'></img>
        </div>
        <div className='welcomeBar-right'>
        <div className='welcomeBar-right-new'>
        <a href='/New_features'><button type="button" class="btn btn--red">
            <span class="btn__txt">NEW!</span>
            <i class="btn__bg" aria-hidden="true"></i>
            <i class="btn__bg" aria-hidden="true"></i>
            <i class="btn__bg" aria-hidden="true"></i>
            <i class="btn__bg" aria-hidden="true"></i>
        </button></a>
        </div>
        <div className='welcomeBar-right-logout'>
            <a href='/' ><button>LogOut</button></a>
        </div>
        </div>
    </div>
  )
}

export default WelcomeBar