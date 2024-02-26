import React from 'react';
import './registerPage.css';
import {Navbar} from '../../components';
import RegisterPageIcon from '../../assets/SignInPageIcon.png';

const RegisterPage = () => {
  return (
    <div className='registerPage'>
        <div className='registerPage-top'>
            <Navbar></Navbar>
        </div>
        <div className='registerPage-bottom'>
            <div className='registerPage-bottom-left'>
            <img src={RegisterPageIcon} alt="icon" />
            </div>
            <div className='registerPage-bottom-right'>
              <form onSubmit=''>
                <div className='registerPage-bottom-right-heading'>
                  <h1>Create <span>Account !</span></h1>
                </div>
                <div className='registerPage-bottom-right-input'>
                  <input type="text" placeholder="*Name" required></input><br></br>
                </div>
                <div className='registerPage-bottom-right-input'>
                  <input type="email" placeholder="*Email" required></input><br></br>
                </div>
                <div className='registerPage-bottom-right-input'>
                  <input type="password" placeholder="*Password" required></input>
                </div>
                <div className='registerPage-bottom-right-buttons'>
                  <input className='registerPage-bottom-right-buttons-reset' type="reset" value="Reset"></input>
                  <input className='registerPage-bottom-right-buttons-register' type="submit" value="Register"></input>
                </div>
                <div className='registerPage-bottom-right-login'>
                  <p>Already have an account ? <span onClick=''>Sign In</span></p>
                </div>
              </form>
            </div>
          </div>
      </div>
  )
}

export default RegisterPage