import React from 'react';
import './registerForm.css';

const RegisterForm = () => {
  return (
    <div className='registerForm'>
      <form onSubmit=''>
        <div className='registerForm-heading'>
            <h1>Create Account !</h1>
        </div>
        <div className='registerForm-input'>
            <input type="text" placeholder="*Name" required></input><br></br>
        </div>
        <div className='registerForm-input'>
            <input type="email" placeholder="*Email" required></input><br></br>
        </div>
        <div className='registerForm-input'>
            <input type="password" placeholder="*Password" required></input>
        </div>
        <div className='registerForm-buttons'>
            <input className='registerForm-buttons-reset' type="reset" value="Reset"></input>
            <input className='registerForm-buttons-register' type="submit" value="Register"></input>
        </div>
        <div className='registerForm-login'>
            <p>Already have an account ? <span onClick=''>Sign In</span></p>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm