import React from 'react';
import './registerPage.css';
import {Navbar, RegisterForm} from '../../components';

const RegisterPage = () => {
  return (
    <div className='registerPage'>
        <div className='registerPage-top'>
            <Navbar></Navbar>
        </div>
        <div className='registerPage-bottom'>
            <RegisterForm />
        </div>
    </div>
  )
}

export default RegisterPage