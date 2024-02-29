import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [showPass,setShowPass] = useState(false);
    const [formData,setFormData] = useState({email:"",password:""})
    function changeHandler(event){
        setFormData((prevData) =>(
            {
                ...prevData,
            [event.target.name] : event.target.value}
        ))
    }
  return (
    <form>
        <label>
            <p>Email Address <sup>*</sup></p>
             <input type="email" required value={formData.email} onChange={changeHandler} placeholder='Enter email id' name='email'/>
        </label>
        <label>
            <p>Password<sup>*</sup></p>
            <input type={showPass ? ("text") : ("password")} required value={formData.password} onChange={changeHandler} placeholder='Enter password' name='password'/>
            <span onClick={setShowPass(!showPass)}>
                {showPass ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>
            <Link to="#"><p>Forgot Password</p></Link>
        </label>

        <button>Sign In</button>
    </form>
  )
}

export default LoginForm