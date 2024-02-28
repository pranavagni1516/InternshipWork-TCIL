import React from 'react'
import Card from './Card'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';


const Testimonials = (props) => {

    let reviews = props.reviews;

    function leftShiftHandler(){
        
    }
    function rightShiftHandler(){

    }
    function surpriseMeHandler(){

    }

  return (
    <div className='flex flex-col mx-auto space-y-6 w-[700px] bg-slate-100 mt-4 rounded-md'>
    
        <Card review={reviews[0]}/>
        <div className='text-3xl flex mt-5 gap-3 text-violet-400 font-bold mx-auto'>
            <button onClick={leftShiftHandler} className='cursor-pointer hover:text-violet-500'>
                <FiChevronLeft/>
            </button>
            <button onClick={rightShiftHandler} className='cursor-pointer hover:text-violet-500'>
                <FiChevronRight/>
            </button>
        </div>
        <div>
            <button onClick={surpriseMeHandler} className='bg-violet-400 mb-4 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded:md font-bold rounded-md text-white text-lg'>Surprise me</button>
        </div>
    
    </div>
  )
}

export default Testimonials