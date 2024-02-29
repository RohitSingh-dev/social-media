import React from 'react';
import './signInPage.css';
import {Navbar} from '../../components';
import SignInPageIcon from '../../assets/SignInPageIcon.png';

const SignInPage = () => {
  return (
    <div className='signInPage'>
        <div className='signInPage-top'>
            <Navbar></Navbar>
        </div>
        <div className='signInPage-bottom'>
            <div className='signInPage-bottom-left'>
                <img src={SignInPageIcon} alt="icon" />
            </div>
            <div className='signInPage-bottom-right'>
                <form onSubmit=''>
                    <div className='signInPage-bottom-right-form-heading'>
                        <h1>Hello!<br /> <span>Welcome Back !</span></h1>
                    </div>
                    <div className='signInPage-bottom-right-form-input'>
                        <input type="email" placeholder="*Email" required></input><br></br>
                    </div>
                    <div className='signInPage-bottom-right-form-input'>
                        <input type="password" placeholder="*Password" required></input>
                    </div>
                    <div className='signInPage-bottom-right-form-button'>
                        <input type="submit" value="Sign In"></input>
                    </div>
                    <div className='signInPage-bottom-right-form-register'>
                        <p>Need an account ? <a href='/RegisterPage'>Register Here</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignInPage