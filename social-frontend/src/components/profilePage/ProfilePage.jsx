import React, { useEffect, useState } from 'react';
import './profilePage.css';
import {NavigationBar, WelcomeBar} from '../../components';

const ProfilePage = () => {
  const [user, setUser]= useState({});
  const [loading, setLoading]= useState(false);
  useEffect(() => {
    if(!loading){
      setLoading(true);
      fetch("/user/5",{
        method: "GET",
        headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb2hpdEBnbWFpbC5jb20iLCJleHAiOjE3MTMwNDIzMDIsImlhdCI6MTcxMzAyMDcwMn0.MDXJYZW8HPJpFyM8K5s_x19g6v-wzR_st_Ufiw2rTPM'},
      }).then(res => res.json()).then(json => setUser(json)).catch(err => {console.log(err); setLoading(false)});
    }
  }, [])
  return (
    <div className='profilePage'>
      <div className='profilePage-top'><WelcomeBar /></div>
      <div className='profilePage-bottom'>
        <div className='profilePage-bottom-left'><NavigationBar /></div>
        <div className='profilePage-bottom-right'>
          <div className='profilePage-bottom-right-left'>
          <form>
          <div className='profilePage-bottom-right-label'>
            <label>Name :</label>
            <input type='text' placeholder='Name' value={user.name} readOnly></input>
          </div>
          <div className='profilePage-bottom-right-label'>
            <label>Email :</label>
            <input type='email' placeholder='Email' value={user.emailId} readOnly></input>
          </div>
          <div className='profilePage-bottom-right-label'>
            <label>Phone :</label>
            <input type='number' placeholder='Phone' value={user.phNum} readOnly></input>
          </div>
          <div className='profilePage-bottom-right-label'>
            <label>Bio :</label>
            <input type='text' placeholder='Bio' value={user.bio} readOnly></input>
          </div>
          </form>
          </div>
          <div className='profilePage-bottom-right-right'>
            <img src={`data:image/jpg;base64,${user.pic}`} alt='profilePic'></img>
            <a href='/Profile/edit'><button>/Edit</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage