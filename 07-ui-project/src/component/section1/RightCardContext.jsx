import React from 'react'
import {MoveRight} from 'lucide-react'
const RightCardContext = (props) => {
  return (
   <div>
    <div className='absolute top-0 left-0 h-full w-full p-4 flex flex-col justify-between '>
       <h2 className='text-xl mb-25 font-bold bg-white rounded-full w-9 h-9 flex justify-center items-center'>{props.idd+1}</h2>
<div>
      <p className='text-white leading-relaxed text-xm'> {props.introoo}</p>

    </div> 
<div className='flex gap-3 justify-between'>
    <button  style={{ backgroundColor: props.colorr }} className=" text-white rounded-full font-medium px-3  " > {props.taggg} </button>
    <button className=" bg-green-500 text-white rounded-full font-2 px-2 py-2 "> <MoveRight /></button>
</div>
        

      </div>
   
   </div>
      
  )
}

export default RightCardContext


