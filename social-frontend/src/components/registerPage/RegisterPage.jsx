import React, { useState } from 'react';
import './registerPage.css';
import {Navbar} from '../../components';
import RegisterPageIcon from '../../assets/SignInPageIcon.png';

const RegisterPage = () => {
  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  let handleRegister = async (e)=> {
    e.preventDefault();
    if(password.length>=5){
      try{
        let res= await fetch("/register",{
          method: "POST",
          body: new URLSearchParams({
            'name': name,
            'username': email,
            'password': password,
          }),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        });
        let resJSON= await res.text();
        if(res.status===201){
          console.log(resJSON);
          setName("");
          setEmail("");
          setPassword("");
          alert("User Registered successfuly");
        }
        else{
          alert("Invalid Input");
        }
      }
      catch(err){
        console.log(err);
      }
    }
    else{
      console.log("password length is less than 5");
      alert("Password length should be more than 5")
    }
    
  };
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
              <form onSubmit={handleRegister}>
                <div className='registerPage-bottom-right-heading'>
                  <h1>Create <span>Account !</span></h1>
                </div>
                <div className='registerPage-bottom-right-input'>
                  <input type="text" placeholder="*Name" value={name} onChange={(e)=> setName(e.target.value)} required></input><br></br>
                </div>
                <div className='registerPage-bottom-right-input'>
                  <input type="email" placeholder="*Email" value={email} onChange={(e)=> setEmail(e.target.value)} required></input><br></br>
                </div>
                <div className='registerPage-bottom-right-input'>
                  <input type="password" placeholder="*Password" value={password} onChange={(e)=> setPassword(e.target.value)} required></input>
                </div>
                <div className='registerPage-bottom-right-buttons'>
                  <input className='registerPage-bottom-right-buttons-reset' type="reset" value="Reset"></input>
                  <input className='registerPage-bottom-right-buttons-register' type="submit" value="Register"></input>
                </div>
                <div className='registerPage-bottom-right-login'>
                  <p>Already have an account ? <a href='/SignInPage'>Sign In</a></p>
                </div>
              </form>
            </div>
          </div>
      </div>
  )
}

export default RegisterPage