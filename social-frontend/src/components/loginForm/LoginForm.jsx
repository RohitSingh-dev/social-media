import React from 'react';
import './loginForm.css';

const LoginForm = () => {
  return (
    <div className='loginForm'>
      <form>
        <div>
          <h1>Hello!<br /> Welcome Back</h1>
        </div>
        <div className='login-form-label'>
          <label>Email Id</label><br></br>
          <input type="email" placeholder="Enter email" required></input><br></br>
        </div>
        <div className='login-form-label'>
          <label>Password</label><br></br>
          <input type="password" placeholder="Password" required></input>
        </div>
        <div className='login-form-buttons'>
          <input type="reset" value="RESET"></input>
          <input className='login-form-buttons-login' type="submit" value="LOGIN"></input>
        </div>
        <div className='login-form-register'>
          <p>New User? <span onClick=''>Register here</span></p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm