import React, {useState } from 'react'
import Spin  from './Spin.jsx';
import useGif from '../hooks/useGif.js';



const Tag = () => {
  // const [gif,setGif] = useState('');
  // const [loading,setLoading] = useState(false);
  const [tag,setTag] = useState('car');
  // function changeHandler(event){
  //   setTag(event.target.value)
  // }
  
  // async function fetchData(){
  //   setLoading(true);
  //   // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=kPP90iBwNSiKi0RADfd9CT56vKdKzeFp&tag=${tag}&rating=g`;
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // }
  // useEffect(()=>{
  //   fetchData();
  // },[])
  const {gif,loading,fetchData} = useGif(tag);
  function clickHandler(){
    fetchData();
  }

  return (
    <div className='w-[900px]  mt-5 flex flex-col rounded-[40px] bg-blue-500 items-center mx-auto justify-evenly border border-black gap-y-4 mb-[20px]'>
      <h2 className='text-4xl font-bold border underline border-none mt-4 uppercase'>RANDOM {tag} GIF</h2>
      <div className='overflow-hidden w-[450px] h-[300px] mt-5 flex items-center justify-center mx-auto'>
        {loading ? (<Spin/>):(<img src={gif} alt="" width="450"/>)}
      </div>
      <input className='w-[450px] text-lg text-center py-2 rounded-lg mb-[20px]' value={tag} onChange={(event) => setTag(event.target.value)} type="text" />
      <button className='w-[500px] h-10  rounded-[25px] text-center  bg-yellow-500 hover:bg-blue-300 transition-all duration-200 mb-10' onClick={clickHandler}>GENERATE</button>
    </div>
  )
}

export default Tag