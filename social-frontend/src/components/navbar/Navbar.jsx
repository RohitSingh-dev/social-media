import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <a href='/'><h1>Mag<span>net</span></h1></a>
        </div>
        <div className='navbar-middle'>
            <div>
                <a className='navbar-middle-home' href='/'>Home</a>
            </div>
            <div>
                <a className='navbar-middle-about' href='/About'>About</a>
            </div>
            <div>
                <a className='navbar-middle-blog' href='/Blog'>Blog</a>
            </div>
            <div>
                <a className='navbar-middle-contact' href='/Contact'>Contact</a>
            </div>
        </div>
        <div className='navbar-right'>
        <div className='navbar-right-signIn'>
            <a href='/SignInPage'><button>Sign In</button></a>
        </div>
        <div className='navbar-right-register'>
            <a href='/RegisterPage' ><button>Register</button></a>
        </div>
        </div>
    </div>
  )
}

export default Navbar