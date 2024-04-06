import React from 'react';
import './profilePage.css';
import {NavigationBar, WelcomeBar} from '../../components';
import image from '../../assets/sample_post.jpg';

const ProfilePage = () => {
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
            <input type='text' placeholder='Name' value="Rohit" readOnly></input>
          </div>
          <div className='profilePage-bottom-right-label'>
            <label>Email :</label>
            <input type='email' placeholder='Email' value="rohit@gmail.com" readOnly></input>
          </div>
          <div className='profilePage-bottom-right-label'>
            <label>Phone :</label>
            <input type='number' placeholder='Phone' value="9876543210" readOnly></input>
          </div>
          <div className='profilePage-bottom-right-label'>
            <label>Bio :</label>
            <input type='text' placeholder='Bio' value="Hi" readOnly></input>
          </div>
          </form>
          </div>
          <div className='profilePage-bottom-right-right'>
            <img src={image} alt='profile_pic'></img>
            <button>/Edit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage