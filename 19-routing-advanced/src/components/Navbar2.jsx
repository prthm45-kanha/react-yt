import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    let navigate=useNavigate()
  return (
   <div className=' py-2 px-5 bg-cyan-600 '>
    <button 
    onClick={()=>{
        navigate('/');
    }}
     className='font-medium bg-emerald-400 rounded px-5 py-2 m-2 active:scale-95 cursor-pointer'>
     Return to Home Page
    </button>

    <button
    onClick={()=>{
        navigate(-1);
    }}
     className='font-medium bg-emerald-400 rounded px-5 py-2 m-2 active:scale-95 cursor-pointer'>
        Back
    </button>

    <button
    onClick={()=>{
        navigate(+1);
    }}
     className='font-medium bg-emerald-400 rounded px-5 py-2 m-2 active:scale-95 cursor-pointer'>
     Next
    </button>
   </div>

  )
}

export default Navbar2
