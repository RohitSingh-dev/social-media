import React from 'react';
import './homepage.css';
import {Navbar, LoginForm} from '../../components';

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className='homepage-top'>
            <Navbar></Navbar>
        </div>
        <div className='homepage-bottom'>
            <LoginForm></LoginForm>
        </div>
    </div>
  )
}

export default Homepage