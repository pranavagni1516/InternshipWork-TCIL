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
    <form onSubmit={submitHandler} className='flex flex-col w-full mt-4 gap-y-4 top-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-100 mb-1 leading-[1.375]'>Email Address <sup className='text-pink-200'>*</sup></p>
             <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type="email" required value={formData.email} onChange={changeHandler} placeholder='Enter email id' name='email'/>
        </label>
        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-100 mb-1 leading-[1.375]'>Password<sup className='text-pink-200'>*</sup></p>
            <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type={showPass ? ("text") : ("password")} required value={formData.password} onChange={changeHandler} placeholder='Enter password' name='password'/>
            <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPass((prev) => !prev)}>
                {!showPass ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
            <Link to="#"><p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password</p></Link>
        </label>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Sign In</button>
    </form>
  )
}

export default LoginForm