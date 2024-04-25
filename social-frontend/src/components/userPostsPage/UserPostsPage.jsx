import React, { useState, useEffect } from 'react';
import './userPostsPage.css';
import {CreatePost, NavigationBar, Post, WelcomeBar} from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

const UserPostsPage = () => {
  const [isOpen, setIsOpen]= useState(false);
  const [post, setPost]= useState([]);
  const [loading, setLoading]= useState(false);

  useEffect(() => {
    if(!loading){
      setLoading(true);
      fetch("/post/user/1",{
        method: "GET",
        headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaGlyYWpAZ21haWwuY29tIiwiZXhwIjoxNzEzMzMzNzEyLCJpYXQiOjE3MTMyNDczMTJ9.VWzdawy3n24GrlEZLTWH_At6vxc_yAnr3KOSEJdtUFw'},
      }).then(res => res.json()).then(json => setPost(json)).catch(err => {console.log(err); setLoading(false)});
    }
  }, []);

  function togglePopUp(){
    setIsOpen(!isOpen);
  };

  return (
    <div className='userPostsPage'>
      <div className='userPostsPage-top'><WelcomeBar /></div>
      <div className='userPostsPage-bottom'>
        <div className='userPostsPage-bottom-left'><NavigationBar /></div>
        <div className='userPostsPage-bottom-right'>
            <div className='userPostsPage-bottom-right-top'>
                <h1>All Posts</h1>
                <button onClick={togglePopUp}><FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>Create Post</button>
                <div className='createPost-scrollProperty'>{isOpen? document.body.style.overflow= 'hidden': document.body.style.overflow= 'unset'}</div>
                {isOpen? <CreatePost toggle={togglePopUp}/> : null}
            </div>
            <div className='userPostsPage-bottom-right-bottom'>
              {
                post.map((postResponse) => {
                  return <Post name={postResponse.user_name} image={postResponse.pic} likes={postResponse.likes}/>
                })
              }
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserPostsPage