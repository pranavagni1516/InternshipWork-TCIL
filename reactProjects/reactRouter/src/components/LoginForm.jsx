import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [showPass,setShowPass] = useState(false);
    const [formData,setFormData] = useState({email:"",password:""})
    function changeHandler(event){
        setFormData((prevData) =>(
            {
                ...prevData,
            [event.target.name] : event.target.value}
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("loggedin");
        navigate("/dashboard");
    }
  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>Email Address <sup>*</sup></p>
             <input type="email" required value={formData.email} onChange={changeHandler} placeholder='Enter email id' name='email'/>
        </label>
        <label>
            <p>Password<sup>*</sup></p>
            <input type={showPass ? ("text") : ("password")} required value={formData.password} onChange={changeHandler} placeholder='Enter password' name='password'/>
            <span onClick={() => setShowPass((prev) => !prev)}>
                {showPass ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>
            <Link to="#"><p>Forgot Password</p></Link>
        </label>

        <button>Sign In</button>
    </form>
  )
}

export default LoginForm