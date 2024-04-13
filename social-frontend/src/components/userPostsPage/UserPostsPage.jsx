import React, { useState, useEffect } from 'react';
import './userPostsPage.css';
import {NavigationBar, Post, WelcomeBar} from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

const UserPostsPage = () => {
  // const [post, setPost]= useState({});
  // const [loading, setLoading]= useState(false);
  // useEffect(() => {
  //   if(!loading){
  //     setLoading(true);
  //     fetch("/post/user/5",{
  //       method: "GET",
  //       headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb2hpdEBnbWFpbC5jb20iLCJleHAiOjE3MTMwNDIzMDIsImlhdCI6MTcxMzAyMDcwMn0.MDXJYZW8HPJpFyM8K5s_x19g6v-wzR_st_Ufiw2rTPM'},
  //     }).then(res => res.json()).then(json => setPost(json)).catch(err => {console.log(err); setLoading(false)});
  //   }
  // }, []);
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