import React, {useState} from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {MdOutlineCall} from 'react-icons/md'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import banner from "../Images/Banner.jpg"
import open from '../Images/open.svg'
import close from '../Images/close.svg'
import '../Contact/Contact.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const [openToggle, setOpenToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

    
    const handleToggle = () => {
        setOpenToggle(!openToggle)
    }
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
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
        <marquee behavior="" direction="">Welcome to my supermarket.Any Concerns Please Contact : <span>mustaphas902@gmail.com</span> </marquee>
      </div>
      <div className='down'>
        <div className='tog'>
          <h1></h1>
          <button onClick={handleToggle} className="toggle">
          {
            openToggle ? <img src={close} alt="" /> : <img src={open} alt="" />
          }
        </button>
        </div>
        <div  className='sea'>
          <ol>
            <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <li className="dropbtn">
                Products <RiArrowDropDownLine />
              </li>
              {isOpen && (
              <div className="dropdown-content">
                <a href="#">Appliances</a>
                <a href="#">Bakery</a>
                <a href="#">Cleaning</a>
                <a href="#">Coffee & Tea</a>
                <a href="#">Liquor</a>
                <a href="#">Personal Care</a>
                <a href="#">Soft Drinks</a>
                <a href="#">Snacks</a>
                <a href="#">Wine</a>
              </div>
            )}
            </div>
            <li>
              Promotion
            </li>
            <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <li className="dropbtn">
                Explore <RiArrowDropDownLine />
              </li>
              {isOpen && (
              <div className="dropdown-content">
                <a href="#">Bakery & Deli</a>
                <a href="#">Baby</a>
                <a href="#">Fruits & Vegetables</a>
                <a href="#">Meat & Poultry</a>
                <a href="#">Recipes</a>
                <a href="#">Wine & Liquor</a>
              </div>
            )}
            </div>
            <li>
              Contact
            </li>
            <li>
              <AiOutlineShoppingCart />0
              Items
            </li>
          </ol>
          <div className='bs'>
            <BsSearch />
            <input type="text" placeholder='Search for products....'/>
          </div>
           
        </div>
          
      </div>
      <div className={`${openToggle ? 'nav-mobile nav-mobile-sub' : 'nav-mobile'}`}>
            <ul>
              <li>
            Products <RiArrowDropDownLine />
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
              <AiOutlineShoppingCart />0
              Items
            </li>
            </ul>
          </div>
      <div className="banner">
        <img src={banner} alt="" />
      </div>
    </div>
  )
}

export default Header