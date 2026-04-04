import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'


const App = () => {
  const [userData, setUserData] = useState([])

  const [index, setindex] = useState(1)
  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
    console.log(response.data)
  }
useEffect(function(){
  getData()
}, [index])

  let printUserData=<h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>
  if(userData.length > 0){
    printUserData=userData.map(function(elem,idx){
      return <div key={idx}>
        <Card elem={elem}/>        
      </div>
        })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
   
      <div className='flex h-[82%] flex-wrap p-2 gap-4'>
      {printUserData}
      </div>

      <div className='flex justify-center gap-6 items-center p-4'>
        <button
        style={{opacity:index == 1 ? 0.6 : 1 }}
         disabled={index == 1}
        onClick={()=>{

           if(index>1){
            setindex(index-1)
            setUserData([])
           }
        }}
         className='bg-amber-400 cursor-pointer text-black font-semibold py-2 px-4 rounded text-xl active:scale-95 '>
          Prev
          </button>
            <h4>Page{index}</h4>
        <button
        onClick={()=>{
          setindex(index+1)
          setUserData([])
        }}
         className='bg-amber-400 cursor-pointer text-black font-semibold py-2 px-4 rounded text-xl active:scale-95 '>Next</button>
      </div>
    </div>
  )
}

export default App
