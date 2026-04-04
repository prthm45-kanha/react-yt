import React from 'react'

const App = () => {
  function inputChanging(val){
    console.log(val);
  }

  const pageScrolling=(elem)=>{
    if(elem>0){
      console.log("scrolling down at a speed of", elem);
    }
    else{
      console.log("scrolling up at a speed of", elem);
    }
  }
  return (
    <div onWheel={(elem)=>{
      pageScrolling(elem.deltaY);
    }} >
       <div className='bg-red-200 h-screen w-full'>Page1</div>
   <div className='bg-blue-200 h-screen w-full'>Page2</div>
   <div className='bg-green-200 h-screen w-full'>Page3</div>
   
   {/* <button onClick={()=>{
        console.log("button is clicked");
      }}>Click Me</button>
   

   <input onChange={function(elemm){
    inputChanging(elemm.target.value);
   }} type='text' placeholder='Enter Name'/> */}
    </div>
  )
}

export default App
