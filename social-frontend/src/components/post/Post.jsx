import React, { useState, useEffect } from 'react';
import './post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

const Post = ({name, image, likes}) => {
  // const [post, setPost]= useState({});
  // const [loading, setLoading]= useState(false);
  // useEffect(() => {
  //   if(!loading){
  //     setLoading(true);
  //     fetch("/post/1",{
  //       method: "GET",
  //       headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaGlyYWpAZ21haWwuY29tIiwiZXhwIjoxNzEzMjEzNDkzLCJpYXQiOjE3MTMxOTE4OTN9.c2ZcsQ-4EV3y88a1glk7L1yn9GxAAG_7DIOi-miyx6w'},
  //     }).then(res => res.json()).then(json => setPost(json)).catch(err => {console.log(err); setLoading(false)});
  //   }
  // }, []);

  return (
    <div className='post'>
      <div className='post-c1'>
        <div><button><FontAwesomeIcon icon={faReact} /></button></div>
        <p>{name}</p>
      </div>
      <div className='post-c2'>
        <img src={`data:image/jpg;base64,${image}`} alt='post'></img>
      </div>
      <div className='post-c3'>
        <div className='post-c3-likes'><button><FontAwesomeIcon className='post-c3-icon' icon={faThumbsUp} /></button><span>{likes}</span></div>
        <div><button><FontAwesomeIcon className='post-c3-icon' icon={faTelegram} /></button></div>
      </div>
      <div className='post-c4'>
        <a href='#comments'>Comments</a>
      </div>
    </div>
  )
}

export default Post