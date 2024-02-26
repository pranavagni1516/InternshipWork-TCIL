import React from 'react';
import Background from './components/Background';
import Forground from './components/Forground'

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800 font-roboto'>
      <Background/>
      <Forground/>
    </div>
  )
}

export default App