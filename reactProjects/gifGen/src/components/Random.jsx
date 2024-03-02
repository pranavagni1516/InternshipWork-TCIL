import React from 'react'
import Spin  from './Spin.jsx';
import useGif from '../hooks/useGif.js';



const Random = () => {

  const {gif,loading,fetchData} = useGif();
  function clickHandler(){
    fetchData();
  }

  return (
    <div className='w-[900px]  mt-5 flex flex-col rounded-[40px] bg-green-500 items-center mx-auto justify-evenly border border-black gap-y-4'>
      <h2 className='text-4xl font-bold border underline border-none mt-4'>A RANDOM GIF</h2>
      <div className='overflow-hidden w-[450px] h-[300px] mt-5 flex items-center justify-center mx-auto'>
        {loading ? (<Spin/>):(<img src={gif} alt="" width="450"/>)}
      </div>
      <button className='w-[500px] h-10  rounded-[25px] text-center  bg-yellow-500 hover:bg-blue-300 transition-all duration-200 mb-10' onClick={clickHandler}>GENERATE</button>
    </div>
  )
}

export default Random