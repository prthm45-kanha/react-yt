import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const [task, setTask] = useState([]);
  const submitHandler=(e)=>{
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({title, detail});
    setTask(copyTask);
    


    setTitle('');
    setDetail('');
  } 
  const deleteNode=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
  }
  return (
    <div className='bg-black lg:flex  h-screen text-white '>

     <form onSubmit={(e)=>{
      submitHandler(e);
     }} className='flex flex-col items-start lg:w-1/2 gap-4 p-10'>
      <h1 className='text-3xl font-bold'>Add Notes</h1>

        <input 
      type='text'
       placeholder='Enter Notes Heading'
       value={title}
       className='px-5 w-full py-3  border-2 rounded'
       onChange={(e)=>{
        setTitle(e.target.value);
       }}/>

       <textarea
       type='text'
       placeholder='write details'
       className='px-5 w-full py-2 h-20 border-2 rounded'
       value={detail}
       onChange={(e)=>{
        setDetail(e.target.value);
       }}/>

      <button className='bg-white w-full active:bg-gray-800 text-black px-5 py-3 rounded'>Add Notes</button>
     
           </form>

        <div className='lg:w-1/2 lg:border-l-2 p-10'>

          <h1 className='text-3xl font-bold'>Recent Notes</h1>

          <div className='flex flex-wrap gap-5 h-full mt-5 overflow-auto'>
            
             {task.map(function(elem,idx){
              return <div key={idx}>
<div className='relative h-52 w-40 rounded-2xl items-start flex flex-col justify-between bg-black bg-cover py-9 pb-2 px-6 text-black bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'> 

 <div>
  <h3 className='font-bold text-lg leading-tight'>{elem.title}</h3>
  <p className='leading-tight mt-3 text-xs font-semibold text-gray-600'>{elem.detail}</p>
 </div>
 <button onClick={()=>{
  deleteNode(idx);
 }} className='w-full cursor-pointer active:scale-95 bg-red-600 py-1 text-xs rounded font-bold text-white'> Delete </button>
 </div>


              </div>
})}
               
          </div>
        </div>
    </div>
  )
}

export default App 
