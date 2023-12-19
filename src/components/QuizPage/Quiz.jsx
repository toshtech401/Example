import React from 'react'
import "./Quiz.css"

const Quiz = () => {
  return (
    <div className='quiz'>
        <div className='ques'>
            <h3>Question 1 - 15</h3>
            <p>Note: Choose your answer below and press continue once done.</p>
        </div>
        <div className='top'>
            <button></button>
        </div>
        <div className='quiz1'>
            <div className='first'>
                <button></button>
                <button></button>
            </div>
            <div className='first'>
                <button></button>
                <button></button>
            </div>
        </div>
        <button className='bbb'>Continue</button>
    </div>
  )
}

export default Quiz