import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setdata] = useState([])

  const getData =async()=>{
        const response= await axios.get('https://picsum.photos/v2/list');       
       setdata(response.data);
  }
  // idhar .json krne ki jroorat nahi h data fetch krne ke liye
  return (
    <div>
      <button onClick={getData}>Get data</button>
    {data.map(function(elem,idx){
        return <h3>hello,{elem.author},{idx}</h3>
      })}
    </div>
  )
}

export default App
