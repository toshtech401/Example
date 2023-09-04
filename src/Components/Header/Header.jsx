import React, {useState} from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {MdOutlineCall} from 'react-icons/md'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import banner from "../Images/Banner.jpg"
import open from '../Images/open.svg'
import close from '../Images/close.svg'

const Header = () => {
  const [openToggle, setOpenToggle] = useState(false);
    
    const handleToggle = () => {
        setOpenToggle(!openToggle)
    }
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
          <h1>OLA MALL</h1>
          <button onClick={handleToggle} className="toggle">
          {
            openToggle ? <img src={close} alt="" /> : <img src={open} alt="" />
          }
        </button>
        </div>
        <div  className='sea'>
          <ol>
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