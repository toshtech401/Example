import React from 'react'
import "./Settings.css"

const Settings = () => {
  return (
    <div className='set'>
        <div>
            <h3>Settings</h3>
            <p>Manage All Your Settings In Here.</p>
        </div>
        <div className='circle'>
             
        </div>
        <form action="">
            <div className=''>
                <label htmlFor="">Username</label>
                <div>
                    <input type="text" />
                    <button className='edit'>Edit</button>
                </div>
                
            </div>
            <div>
                <label htmlFor="">Email</label>
                <div>
                    <input type="text" />
                    <button className='edit'>Edit</button>
                </div>
            </div>
            
        </form>
        <div className='dob'>
            <button>Save</button>
            <button>Log Out</button>
        </div>
    </div>
  )
}

export default Settings