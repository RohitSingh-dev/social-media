import React from 'react';
import './navigationBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
  return (
    <div className='navigationBar'>
      <div className='icon'><FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></div>
      <div className='Home'>Home</div>
      <div className='Profile'>Profile</div>
      <div className='Friends'>Friends</div>
      <div className='Messages'>Messages</div>
      <div className='My Posts'>My Posts</div>
    </div>
  )
}

export default NavigationBar