import React from 'react'
import "./Get.css"


const Get = () => {
  return (
    <div className='get'>
        <div className='us'>
            <h3>Get Supports</h3>
            <p>Contact Us With Your Message. Our Team Will Get Back To You Soon.</p>
        </div>
        <form action="" className='fooorm'>
            <div className='edd'>
                <label htmlFor="">Username</label>
                <input type="text" />
            </div>
            <div className='edd'>
                <label htmlFor="">Your email</label>
                <input type="text" />
            </div>
            <div className='edd'>
                <label htmlFor="">Type your message here</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Get