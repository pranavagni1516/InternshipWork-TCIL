import React from 'react'
import frameImage from '../assets/frame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from 'react-icons/fc'

const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div className='flex flex-col'>
    <div className='flex flex-row w-11/12 max-w-[1160px]  mx-auto pt-12  gap-y-0 justify-between'>
        <div className='flex flex-col w-11/12 max-w-[450px] mb-0'>
            <h1 className='text-white text-3xl font-bold leading-[2.375rem]'>{title}</h1>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className='text-richblack-100'>{desc1}</span><br />
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>
            {formtype === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
            <div className='flex w-full items-center my-4 mb-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading-[1.375rem]'>or</p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>
            <button className='w-full flex justify-center items-center rounded-[8px] font-medium h-[] border border-richblack-700 ps-[12px] py-[8px] gap-x-2 mt-6'>

            <FcGoogle/>
            <p className='text-richblack-100'>Sign Up with Google</p></button>
        </div>

        <div className='relative w-11/12 max-w-[450px] mb-3 max-h-[450px]'>
            <img src={frameImage} alt="pattern" width={558} height={504} loading='lazy'/>
            <img className='absolute -top-4 right-4' src={image} alt="students" width={558} height={490} loading='lazy'/>
        </div>
        
    </div>


    </div>
  )
}

export default Template