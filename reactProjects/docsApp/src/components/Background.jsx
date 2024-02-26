import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed w-full h-screen z-[2]'>
    <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold'>Documents</div>
    <h1 className='absolute top-1/2 text-[13vw] -translate-x-[50%] -translate-y-[50%] left-1/2 leading-none tracking-tighter '>Docs.</h1>
    </div>
    </>
  )
}

export default Background;