import React, { useState } from 'react'
import "./Sidebar.css"
import gifted from '../images/gifted.png'
import dash from "../images/Dashboard.png"
import grp1 from "../images/Group 31.png"
import grp2 from "../images/Group 33.png"
import wheel from "../images/wheel.png"
import cap from "../images/cap.png"
import card from "../images/Bank Cards.png"
import col from "../images/collab.png"
import order from "../images/Order.png"
import grp3 from "../images/Group 34.png"
import grp4 from "../images/Group 35.png"
import grp5 from "../images/Group 36.png"
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Sidebar = () => {
  const [openToggle, setOpenToggle] = useState(false);
  const handleToggle = () => {
    setOpenToggle(!openToggle)
}

  return (
    <div className={`${openToggle ? 'app nav-mobile-sub' : 'app'}`}>
      <div className="header">
        <img className='logo' src={gifted} alt="" onClick={handleToggle}/>
        <div onClick={handleToggle} className='tog'>
          {
            openToggle ? < RxCross2 /> : <IoMdMenu />
          }
        </div>
      </div>

      <div className="dash">
        <img src={dash} alt="" />
        <p style={{ display: openToggle ? 'none' : 'block' }}>Dashboard</p>
      </div>
      <div className="sidebar">
        <div className='bar'>
          <img src={grp1} alt="" />
          <p style={{ display: openToggle ? 'none' : 'block' }}>quiz competition</p>
        </div>
        <div className='bar'>
          <img src={grp2} alt="" />
          <p style={{ display: openToggle ? 'none' : 'block' }}>quiz leaderboard</p>
        </div>
        <div className='bar'>
          <img src={wheel} alt="" />
          <p style={{ display: openToggle ? 'none' : 'block' }}>spin to win</p>
        </div>
        <div className='bar'>
          <img src={cap} alt="" />
          <p style={{ display: openToggle ? 'none' : 'block' }}>courses</p>
        </div>
        <div className='bar'>
          <img src={card} alt="" />
          <p style={{ display: openToggle ? 'none' : 'block' }}>payment </p>
        </div>
        <div className='bar'>
            <img src={col} alt="" />
            <p style={{ display: openToggle ? 'none' : 'block' }}>referrals history</p>
        </div>
        <div className='bar'>
          <img src={order} alt="" />
          <p style={{ display: openToggle ? 'none' : 'block' }}>earnings history</p>
        </div>
      </div>
      <div className="content">
        <div className='down'>
          <img src={grp3} alt="" />
          <p style={{ display: openToggle ? 'none' : 'block' }}>Settings</p>
        </div>
        <div className='down'>
          <img src={grp4} alt="" />
          <p style={{ display: openToggle ? 'none' : 'block' }}>Get Help</p>
        </div>
        <div className='down'>
          <img src={grp5} alt="" />
          <p style={{ display: openToggle ? 'none' : 'block' }}>Community</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar