// import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
// import useConversation from "../../zustand/useConversation";
// import useGetConversations from "../../hooks/useGetConversations";
// import toast from "react-hot-toast";

const Searchinput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search..' className='input input-bordered bg-gray-700 border-gray-600 text-white rounded-full'/>
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <IoSearchSharp className='w-6 h-6 outline-none' />
        </button>
    </form>
  )
}

export default Searchinput