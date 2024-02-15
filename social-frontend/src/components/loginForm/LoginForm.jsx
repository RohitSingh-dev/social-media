import React from 'react';
import './loginForm.css';

const LoginForm = () => {
  return (
    <div className='loginForm'>
      <form onSubmit=''>
        <div className='loginForm-welcome'>
          <h1>Hello!<br /> Welcome Back!</h1>
        </div>
        <div className='loginForm-input'>
          <input type="email" placeholder="Enter email" required></input><br></br>
        </div>
        <div className='loginForm-input'>
          <input type="password" placeholder="Password" required></input>
        </div>
        <div className='loginForm-button'>
          <input type="submit" value="Sign In"></input>
        </div>
        <div className='loginForm-register'>
          <p>Need an account ? <span onClick=''>Sign Up</span></p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm