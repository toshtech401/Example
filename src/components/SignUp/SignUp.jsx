import React, { useState } from 'react'
import "./SignUp.css"
import logo from "../images/gifted.png"
import { FcGoogle } from "react-icons/fc";


const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [error, setError] = useState({})

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData({
            ...formData, [name] : value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const validateErrors = {}

        if(!formData.username.trim()){
            validateErrors.username = 'Username is required!!'
        }
        if(!formData.email.trim()){
            validateErrors.email = 'Email is required!!'
        }
        if(!formData.password.trim()){
            validateErrors.password = 'Password is required!!'
        } else if(formData.password.length < 6){
            validateErrors.password = 'Password should atleast 6 characters'
        }

        if(!formData.email || !formData.password || !formData.username){
            alert("fields mmust not be empty")
        }


        setError(validateErrors)
        if(Object.keys(validateErrors).length === 0){
            alert("Form Submitted Successfully!!")
        }
    }
    
  return (
    <main>
        <div class="first">
            <img src={logo} alt=""/> 
            <h2>Sign Up</h2>
        </div>
        <form action="" onSubmit={handleSubmit}>
            <div class="inp">
                <label for="">Username</label>
                <input type="text" name='username' onChange={handleChange}/>
                {/* {error.username && <span>{error.username}</span>} */}
            </div>
            <div class="inp">
                <label for="">Enter your Email</label>
                <input type="email" name='email' onChange={handleChange}/>
                {/* {error.email && <span>{error.email}</span>} */}
            </div>
            <div class="inp">
                <label for="">Password</label>
                <input type="password" name='password' onChange={handleChange}/>
                {/* {error.password && <span>{error.password}</span>} */}
            </div>
            <div class="box">
                <input type="checkbox"/>
                <p>I Have Agree To The <span>Terms & Conditions</span> And The <span>Privacy & Policy</span> Of This Website.</p>
            </div>
            <div class="or">
                <button type='Submit'>Sign Up</button>
                <h2>OR</h2>
                <div className='svg'>
                 <FcGoogle />
                </div>
            </div>
        </form>
        <div class="pp">
            <p>Already Have An Existing Account?</p>
            <p><span>Click Here.....</span></p>
        </div>
        <footer>
            <div>
                <p>Back To Home</p>
            </div>
            <div>
                <p>Privacy & Policy</p>
            </div>
            <div>
                <p>Terms & Condition</p>
            </div>
        </footer>
    </main>
  )
}

export default SignUp