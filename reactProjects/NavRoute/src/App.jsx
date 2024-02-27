import React from 'react';
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { Services } from './components/pages/Services';
import { Home } from './components/pages/Home';

function App() {
  return (
    <>

    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App