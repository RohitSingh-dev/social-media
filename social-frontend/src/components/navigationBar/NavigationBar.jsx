import React from 'react';
import './navigationBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
  return (
    <div className='navigationBar'>
      <div className='icon'><FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></div>
      <div className='Home'><a href='/Dashboard'>Home</a></div>
      <div className='Profile'><a href='/Profile'>Profile</a></div>
      <div className='Friends'><a href='/Friends'>Friends</a></div>
      <div className='Messages'><a href='/Chat'>Chat</a></div>
      <div className='My Posts'><a href='/MyPosts'>My Posts</a></div>
    </div>
  )
}

export default NavigationBar