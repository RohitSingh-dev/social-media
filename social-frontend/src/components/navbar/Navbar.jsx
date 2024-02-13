import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <div>
                <a className='navbar-left-home' href='#Home'>Home</a>
            </div>
            <div>
                <a className='navbar-left-about' href='#About'>About</a>
            </div>
            <div>
                <a className='navbar-left-surprise' href='#Suprise'>Surprise</a>
            </div>
            <div>
                <a className='navbar-left-contact' href='#Contact'>Contact</a>
            </div>
        </div>
        <div className='navbar-right'>
        <div>
            <button className='navbar-right-signIn' onClick=''>Sign In</button>
        </div>
        <div>
            <button className='navbar-right-register' onClick=''>Register</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar