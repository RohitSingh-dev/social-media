import React, { useState, useEffect } from 'react';
import './dashboard.css';
import {NavigationBar, Post, WelcomeBar} from '../../components';

const Dashboard = () => {
  const [post, setPost]= useState([]);
  const [loading, setLoading]= useState(false);

  useEffect(() => {
    if(!loading){
      setLoading(true);
      fetch("/post",{
        method: "GET",
        headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaGlyYWpAZ21haWwuY29tIiwiZXhwIjoxNzEzMzMzNzEyLCJpYXQiOjE3MTMyNDczMTJ9.VWzdawy3n24GrlEZLTWH_At6vxc_yAnr3KOSEJdtUFw'},
      }).then(res => res.json()).then(json => setPost(json)).catch(err => {console.log(err); setLoading(false)});
    }
  }, []);

  return (
    <div className='dashboard'>
      <div className='dashboard-top'><WelcomeBar /></div>
      <div className='dashboard-bottom'>
        <div className='dashboard-bottom-left'><NavigationBar /></div>
        <div className='dashboard-bottom-right'>
          {
            post.map((postResponse) => {
              return <Post name={postResponse.user_name} image={postResponse.pic} likes={postResponse.likes}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard