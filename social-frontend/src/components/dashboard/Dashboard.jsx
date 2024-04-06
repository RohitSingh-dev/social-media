import React from 'react';
import './dashboard.css';
import {NavigationBar, Post, WelcomeBar} from '../../components';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard-top'><WelcomeBar /></div>
      <div className='dashboard-bottom'>
        <div className='dashboard-bottom-left'><NavigationBar /></div>
        <div className='dashboard-bottom-right'><Post /></div>
      </div>
    </div>
  )
}

export default Dashboard