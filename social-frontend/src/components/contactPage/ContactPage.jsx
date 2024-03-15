import React from 'react';
import './contactPage.css';
import {Navbar, Contacts} from '../../components';
import contact1 from '../../assets/Contacts/contact1.jpg';
import contact2 from '../../assets/Contacts/contact2.jpg';
import contact3 from '../../assets/Contacts/contact3.jpg';

const ContactPage = () => {
  return (
    <div className='contactPage'>
      <div className='contactPage-top'><Navbar /></div>
      <div className='contactPage-bottom'>
        <div className='contactPage-bottom-top'>
          <h1>Let's Start a Conversation</h1>
        </div>
        <div className='contactPage-bottom-bottom'>
          <div><Contacts image={contact1} name='Rohit Kumar Singh' role='Backend Dev' email='rohitsingh20082002@gmail.com'></Contacts></div>
          <div><Contacts image={contact3} name='Dhiraj Kumar Gupta' role='Frontend Dev' email='dhirajgupta@gmail.com'></Contacts></div>
          <div><Contacts image={contact2} name='Raushan Kumar' role='Frontend Dev' email='raushankumar@gmail.com'></Contacts></div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage