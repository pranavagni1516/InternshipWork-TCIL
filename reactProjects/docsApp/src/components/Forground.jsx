import React from 'react'
import Card from './Card.jsx'

function Forground() {
  return (
    <>
      <div className='fixed top-0 left-0 z-[3] w-full h-full'>
        <Card/>
        <Card/>
      </div>
    </>
  )
}

export default Forground