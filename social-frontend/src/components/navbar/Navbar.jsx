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
                <a className='navbar-left-blog' href='#Blog'>Blog</a>
            </div>
            <div>
                <a className='navbar-left-contact' href='#Contact'>Contact</a>
            </div>
        </div>
        <div className='navbar-right'>
        <div className='navbar-right-signIn'>
            <button onClick=''>Sign In</button>
        </div>
        <div className='navbar-right-register'>
            <button onClick=''>Register</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar