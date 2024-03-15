import React from 'react';
import './contacts.css';

const Contacts = ({image, name, role, email}) => {
  return (
    <div className='contacts'>
        <div className='contacts-top'>
          <img src={image} alt='pic'></img>
        </div>
        <div className='contacts-bottom'>
          <div className='contacts-bottom-decoration'></div>
          <div className='contacts-bottom-data'>
            <h2>{name}</h2>
            <span>{role}</span>
            <span className='contacts-bottom-data-email'>{email}</span>
          </div>
        </div>
    </div>
  )
}

export default Contacts