import React from 'react'
import Card from './Card'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';
import { useState } from 'react';

const Testimonials = (props) => {

    let reviews = props.reviews;
    const [index,setIndex] = useState(0);
    function leftShiftHandler(){
        if(index-1<0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }
    }
    function rightShiftHandler(){
        if(index+1 >= reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }
    function surpriseMeHandler(){
        setIndex(Math.floor(Math.random() * reviews.length));
    }

  return (
    <div className='flex flex-col mx-auto space-y-6 w-[95vw] md:w-[700px] justify-center items-center mt-10 p-10 bg-slate-100 transition-all shadow-md duration-200 rounded-md'>
    
        <Card review={reviews[index]}/>
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