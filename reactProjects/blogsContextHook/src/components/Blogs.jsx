import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Loader } from './Loader.jsx'

const Blogs = () => {
    const {loading} = useContext(AppContext);
  return (
    <div>
        {
            loading ? (<Loader/>):(<div>hi</div>)
        }
    </div>
  )
}

export default Blogs