import React from 'react';
import './Contact.css';
import Header from '../Header/Header';
import Footer from '../Footer'
import{ImLocation} from 'react-icons/im'
import {MdOutlineCall} from 'react-icons/md'
import {AiOutlineMail} from 'react-icons/ai'


const COntact = () => {

  return (
    <div>
      <Header />
      <div className='action'>
        <form action="">
          <em>We Would Love To Hear From You</em>
          <div className='text'>
            <input type="text" placeholder='Name'/>
          </div>
          <div className='email'>
            <input type="email" placeholder='Email'/>
          </div>
          <div>
            <textarea placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
            <div>
              <button>Send Message</button>
            </div>
          </div>
        </form>
        <div className='side'>
          <div className='other'>
            <ImLocation />
            <div>
              <h1>Address</h1>
              <p>The Palms Shopping Mall,1, Bisway Street, Oniru, Victoria Island, Lagos, Nigeria.</p>
            </div>
          </div>
          <div className='other'>
            <MdOutlineCall />
            <div>
              <h1>Phone Number</h1>
              <p>+23490 1400 0001
                +23490 1400 0002</p>
            </div>
          </div>
          <div className='other'>
            <AiOutlineMail />
            <div>
              <h1>Phone Number</h1>
              <p>support@retailsupermarkets.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default COntact;
