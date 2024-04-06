import React from 'react';
import './userPostsPage.css';
import {NavigationBar, Post, WelcomeBar} from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

const UserPostsPage = () => {
  return (
    <div className='userPostsPage'>
      <div className='userPostsPage-top'><WelcomeBar /></div>
      <div className='userPostsPage-bottom'>
        <div className='userPostsPage-bottom-left'><NavigationBar /></div>
        <div className='userPostsPage-bottom-right'>
            <div className='userPostsPage-bottom-right-top'>
                <h1>All Posts</h1>
                <button><FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>Create Post</button>
            </div>
            <div className='userPostsPage-bottom-right-bottom'><Post /></div>
        </div>
      </div>
    </div>
  )
}

export default UserPostsPage