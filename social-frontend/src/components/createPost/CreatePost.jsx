import React from 'react';
import './createPost.css';

const CreatePost = () => {
  return (
    <div className='createPost'>
        <div className='createPost-background'>
            <div className='createPost-top'></div>
            <div className='createPost-top'>
                <input type='file'></input>
                <button>Create Post</button>
            </div>
        </div>
    </div>
  )
}

export default CreatePost