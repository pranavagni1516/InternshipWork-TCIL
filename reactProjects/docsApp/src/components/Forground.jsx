import React from 'react'
import Card from './Card.jsx'

function Forground() {
    const data = [
        {
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing.",
            fileSize:".9 mb",
            close: false,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"},
        },
        {
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing.",
            fileSize:".9 mb",
            close: false,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"},
        },
        {
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing.",
            fileSize:".9 mb",
            close: false,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"},
        },
    ];
  return (
    <>
      <div className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap'>
        {data.map((item,index)=>(
            <Card data={item}/>
        ))}
      </div>
    </>
  )
}

export default Forground