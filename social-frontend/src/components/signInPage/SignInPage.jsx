import React, { useState } from 'react';
import './signInPage.css';
import {Navbar} from '../../components';
import SignInPageIcon from '../../assets/SignInPageIcon.png';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const [email, setEmail]= useState("");
    const [password , setPassword]= useState("");
    const [message, setMessage]= useState("");
    const navigate= useNavigate();
    let handleSubmit = async (e)=> {
        e.preventDefault();
        try{
            let res = await fetch("/login",{
                method: "POST",
                body: JSON.stringify({
                    username: email,
                    password: password,
                }),
                headers: {'Content-Type': 'application/json'},
            });
            let resJSON = await res.text();
            if(res.status===200){
                console.log(resJSON);
                setEmail("");
                setPassword("");
                setMessage("Token Received Successfully");
                navigate("/Dashboard");
            }
            else{
                setMessage("Invalid Credentials");
            }
        }
        catch(err){
            console.log(err);
        }
    };
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
                <form onSubmit={handleSubmit}>
                    <div className='signInPage-bottom-right-form-heading'>
                        <h1>Hello!<br /> <span>Welcome Back !</span></h1>
                    </div>
                    <div className='signInPage-bottom-right-form-input'>
                        <input type="email" placeholder="*Email" value={email} onChange={(e)=> setEmail(e.target.value)} required></input><br></br>
                    </div>
                    <div className='signInPage-bottom-right-form-input'>
                        <input type="password" placeholder="*Password" value={password} onChange={(e)=> setPassword(e.target.value)} required></input>
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