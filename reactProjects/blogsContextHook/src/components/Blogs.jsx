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
                (posts.map((post)=>(
                    <div key={post.id}>
                        <p className='text-3xl text-black font-bold'>{post.title}</p>
                        <p>By <span>{post.author}</span> on <span>{post.category}</span></p>
                        <p>Posted on {post.date}</p>
                        <p>{post.content}</p>
                        <div>
                            {
                                post.tags.map((tag,index)=>{
                                    return <span key={index}>{`#${tag}`}</span>
                                })
                            }
                        </div>
                    </div>
                )))
            )
        }
    </div>
  )
}

export default Blogs