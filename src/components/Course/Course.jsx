import React from 'react'
import one from "../Course/image/Rectangle 168.png"
import two from "../Course/image/Rectangle 169.png"
import three from "../Course/image/Rectangle 170.png"
import four from "../Course/image/Rectangle 171.png"
import five from "../Course/image/Rectangle 172.png"
import six from "../Course/image/Rectangle 173.png"
import seven from "../Course/image/Rectangle 174.png"
import eight from "../Course/image/Rectangle 175.png"
import "./Course.css"
const Course = () => {
  return (
    <div className='course'>
        <div>
            <h3>explore your prefered course</h3>
            <div>
                <p>choose your favorite course to acquire, and be the best in your niche.</p>
            </div>
        </div>
        <div className='head'>
            <div className='tech'>
                <h3>tech & mechanics</h3>
                <button>See All....</button>
            </div>
            <div className='up'>
                <div className='now'>
                    <img src={one} alt="" />
                    <h4>advanced cryptocurrency</h4>
                    <h3>#20,000</h3>
                    <div className='btn'>
                        <button className='btn1'>60SQP</button>
                        <button className='btn2'>Enroll Now</button>
                    </div>
                </div>
                <div className='now'>
                    <img src={two} alt="" />
                    <h4>uI/UX Design</h4>
                    <h3>#15,000</h3>
                    <div className='btn'>
                        <button className='btn1'>60SQP</button>
                        <button className='btn2'>Enroll Now</button>
                    </div>
                </div>
                <div className='now'>
                    <img src={three} alt="" />
                    <h4>front-end development</h4>
                    <h3>#14,000</h3>
                    <div className='btn'>
                        <button className='btn1'>60SQP</button>
                        <button className='btn2'>Enroll Now</button>
                    </div>
                </div>
                <div className='now'>
                    <img src={four} alt="" />
                    <h4>Back-end development</h4>
                    <h3>#15,000</h3>
                    <div className='btn'>
                        <button className='btn1'>60SQP</button>
                        <button className='btn2'>Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='head'>
            <div className='tech'>
                <h3>history & health</h3>
                <button>See All....</button>
            </div>
            <div className='up'>
                <div className='now'>
                    <img src={five} alt="" />
                    <h4>skin care production</h4>
                    <h3>#15,000</h3>
                    <div className='btn'>
                        <button className='btn1'>60SQP</button>
                        <button className='btn2'>Enroll Now</button>
                    </div>
                </div>
                <div className='now'>
                    <img src={six} alt="" />
                    <h4>page management</h4>
                    <h3>#15,000</h3>
                    <div className='btn'>
                        <button className='btn1'>60SQP</button>
                        <button className='btn2'>Enroll Now</button>
                    </div>
                </div>
                <div className='now'>
                    <img src={seven} alt="" />
                    <h4>true africa history</h4>
                    <h3>#15,000</h3>
                    <div className='btn'>
                        <button className='btn1'>60SQP</button>
                        <button className='btn2'>Enroll Now</button>
                    </div>
                </div>
                <div className='now'>
                    <img src={eight} alt="" />
                    <h4>africa healing and <br /> herbs methodolgy</h4>
                    <h3>#15,000</h3>
                    <div className='btn'>
                        <button className='btn1'>60SQP</button>
                        <button className='btn2'>Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Course