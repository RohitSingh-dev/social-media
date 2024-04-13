import React, { useState, useEffect } from 'react';
import './post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

const Post = () => {
  const [post, setPost]= useState({});
  const [loading, setLoading]= useState(false);
  useEffect(() => {
    if(!loading){
      setLoading(true);
      fetch("/post/1",{
        method: "GET",
        headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb2hpdEBnbWFpbC5jb20iLCJleHAiOjE3MTMwNDIzMDIsImlhdCI6MTcxMzAyMDcwMn0.MDXJYZW8HPJpFyM8K5s_x19g6v-wzR_st_Ufiw2rTPM'},
      }).then(res => res.json()).then(json => setPost(json)).catch(err => {console.log(err); setLoading(false)});
    }
  }, []);

  return (
    <div className='post'>
      <div className='post-c1'>
        <div><button><FontAwesomeIcon icon={faReact} /></button></div>
        <p>{post.user_name}</p>
      </div>
      <div className='post-c2'>
        <img src={`data:image/jpg;base64,${post.pic}`} alt='post'></img>
      </div>
      <div className='post-c3'>
        <div className='post-c3-likes'><button><FontAwesomeIcon className='post-c3-icon' icon={faThumbsUp} /></button><span>{post.likes}</span></div>
        <div><button><FontAwesomeIcon className='post-c3-icon' icon={faTelegram} /></button></div>
      </div>
      <div className='post-c4'>
        <a href='#comments'>Comments</a>
      </div>
    </div>
  )
}

export default Post