import React from 'react';
import './blogPage.css';
import blogBackground from '../../assets/Blog_Page.gif';

const BlogPage = () => {
  return (
    <div className='blogPage'>
      <div className='blogPage-top'><h1>Mag<span>net</span></h1></div>
      <div className='blogPage-middle'><img src={blogBackground} alt='err404'></img></div>
      <div className='blogPage-bottom'><p>C o m i n g<span>S o o n</span></p></div>
    </div>
  )
}

export default BlogPage