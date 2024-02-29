import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"

const SignupForm = () => {
    const [showPass,setShowPass] = useState(false);
    const[formData,setFormData] = useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""})
    function changeHandler(event){
        setFormData((prevData) =>(
            {
                ...prevData,
            [event.target.name] : event.target.value}
        ))
    }
  return (
    <div>
        {/* student-instructor tab */}
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>
        <form>
            {/* first and last name */}
            <div>
            <label>
                <p>First Name<sup>*</sup></p>
                <input type="text" required name='firstname' onChange={changeHandler} placeholder='Enter First Name' value={formData.firstName}/>
            </label>
            <label>
                <p>Last Name<sup>*</sup></p>
                <input type="text" required name='lastname' onChange={changeHandler} placeholder='Enter First Name' value={formData.lastName}/>
            </label>
            </div>
            {/* Email */}
            <label>
            <p>Email Address <sup>*</sup></p>
             <input type="email" required value={formData.email} onChange={changeHandler} placeholder='Enter email id' name='email'/>
            </label>
            {/* Create Password and ConfirmPassword */}
            <div>
                <label>
                <p>Create Password<sup>*</sup></p>
                <input type={showPass ? ("text") : ("password")} required value={formData.password} onChange={changeHandler} placeholder='Enter password' name='password'/>
                <span onClick={setShowPass(!showPass)}>
                    {showPass ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                </span>
                </label>
                <label>
                <p>Confirm Password<sup>*</sup></p>
                <input type={showPass ? ("text") : ("password")} required value={formData.confirmPassword} onChange={changeHandler} placeholder='Enter password' name='confirmPassword'/>
                <span onClick={setShowPass(!showPass)}>
                    {showPass ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                </span>
                </label>
            </div>
            <button>Create Account</button>
        </form>
    </div>
  )
}

export default SignupForm