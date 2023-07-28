import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {MdOutlineCall} from 'react-icons/md'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import banner from "../Images/Banner.jpg"

const Header = () => {
  return (
    <div className='head'>
      <div className='up'>
        <div>
          <h3>Nigeria's Biggest SuperMarket Chain</h3>
        </div>
        <div className='icon'>
          <AiOutlineMail />
          <h3>Mustaphas902@gmail.com</h3>
        </div>
        <div className='icon'>
          <MdOutlineCall />
          <h3>08140922052</h3>
        </div>
      </div>
      <div className='mar'>
        <marquee behavior="" direction="">Welcome to my supermarket</marquee>
      </div>
      <div className='down'>
        <div>
          <h1>OLA MALL</h1>
        </div>
        <div className='sea'>
          <ul>
            <li>
              Products
              <RiArrowDropDownLine />
            </li>
            <li>
              Promotion
            </li>
            <li>
              Explore
              <RiArrowDropDownLine />
            </li>
            <li>
              Contact
            </li>
            <li>
              <AiOutlineShoppingCart />
              Items
            </li>
          </ul>
          <div className='bs'>
            <BsSearch />
            <input type="text" placeholder='Search for products....'/>
          </div>
        </div>
      </div>
      <div className="banner">
        <img src={banner} alt="" />
      </div>
    </div>
  )
}

export default Header