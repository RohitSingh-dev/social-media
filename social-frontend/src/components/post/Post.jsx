import React from 'react';
import './post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import image from '../../assets/sample_post.jpg';

const Post = (name) => {
  return (
    <div className='post'>
      <div className='post-c1'>
        <div><button><FontAwesomeIcon icon={faReact} /></button></div>
        <p>@{name="Rohit"}</p>
      </div>
      <div className='post-c2'>
        <img src={image} alt='post'></img>
      </div>
      <div className='post-c3'>
        <div><button><FontAwesomeIcon className='post-c3-icon' icon={faThumbsUp} /></button></div>
        <div><button><FontAwesomeIcon className='post-c3-icon' icon={faTelegram} /></button></div>
      </div>
      <div className='post-c4'>
        <a href='#comments'>Comments</a>
      </div>
    </div>
  )
}

export default Post