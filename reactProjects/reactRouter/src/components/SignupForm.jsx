import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [accountType,setAccountType] = useState("student");
    const [showPass,setShowPass] = useState(false);
    const[formData,setFormData] = useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""})
    function changeHandler(event){
        setFormData((prevData) =>(
            {
                ...prevData,
            [event.target.name] : event.target.value}
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Passwords do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard")

    }

  return (
    <div>
        {/* student-instructor tab */}
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max mx-auto '>
            <button className={`${accountType==="student" ? "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>setAccountType("student")}>Student</button>
            <button className={`${accountType==="instructor" ? "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>setAccountType("instructor")}>Instructor</button>
        </div>
        <form onSubmit={submitHandler} className='flex flex-col w-full mt-4 gap-y-4 top-6'>
            {/* first and last name */}
            <div className='flex gap-x-3 justify-between'>
            <label>
                <p className='text-[0.875rem] text-richblack-100 mb-1 leading-[1.375]'>First Name<sup className='text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type="text" required name='firstName' onChange={changeHandler} placeholder='Enter First Name' value={formData.firstName}/>
            </label>
            <label>
                <p className='text-[0.875rem] text-richblack-100 mb-1 leading-[1.375]'>Last Name<sup className='text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type="text" required name='lastName' onChange={changeHandler} placeholder='Enter Last Name' value={formData.lastName}/>
            </label>
            </div>
            {/* Email */}
            <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-100 mb-1 leading-[1.375]'>Email Address <sup className='text-pink-200'>*</sup></p>
             <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type="email" required value={formData.email} onChange={changeHandler} placeholder='Enter email id' name='email'/>
            </label>
            {/* Create Password and ConfirmPassword */}
            <div className='flex justify-between gap-x-3'>
                <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-100 mb-1 leading-[1.375]'>Create Password<sup className='text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type={showPass ? ("text") : ("password")} required value={formData.password} onChange={changeHandler} placeholder='Enter password' name='password'/>
                <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPass((prev) => !prev)}>
                    {!showPass ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
                </label>
                <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-100 mb-1 leading-[1.375]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type={showPass ? ("text") : ("password")} required value={formData.confirmPassword} onChange={changeHandler} placeholder='Enter password' name='confirmPassword'/>
                <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPass((prev) => !prev)}>
                    {!showPass ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
                </label>
            </div>
            <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Create Account</button>
        </form>
    </div>
  )
}

export default SignupForm