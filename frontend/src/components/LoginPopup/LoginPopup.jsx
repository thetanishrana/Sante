import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Sign Up");

  return (
    <div className='login-popup'>
        <div className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2> <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Sign Up"?<input type="text" placeholder='Name' />:<></>}
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
            </div>
            <button>{currState==="Login"?"Login":"Create account"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" name="" id="" />
                <p>I agree to the <u>terms of use</u> & <u>privacy policy</u>.</p>
            </div>
            {currState==="Login"
                ?<p>Create a new account? <span onClick={()=>setCurrState('Sign Up')}>Sign Up</span></p>
                :<p>Already have an account? <span onClick={()=>setCurrState('Login')}>Login</span></p>
            }
        </div>
    </div>
  )
}

export default LoginPopup
