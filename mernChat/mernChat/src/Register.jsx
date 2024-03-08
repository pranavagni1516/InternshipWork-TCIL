import React from 'react'

const Register = () => {
  return (
    <div className='bg-blue-50 h-screen flex items-center'>
        <form className='w-64 mx-auto'>
            <input type='text' placeholder="username" className='block w-full mb-2 p-2 rounded-sm border' />
            <input type='password' placeholder="password" className='block w-full mb-2 p-2 rounded-sm border' />
            <button className='bg-blue-500 text-white w-full p-2 rounded-sm'>Register</button>
        </form>
    </div>
  )
}

export default Register