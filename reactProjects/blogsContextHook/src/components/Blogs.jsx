import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Loader from './Loader'

const Blogs = () => {
    const {posts,loading} = useContext(AppContext);
  return (
    <div>
        {
            loading ? 
            (<Loader/>) : 
            (
                posts.length === 0 ? 
                (<div>
                    <p>No Post Found</p>
                </div>) :
                (<div></div>)
            )
        }
    </div>
  )
}

export default Blogs