import React, { use, useState } from 'react'

const App = () => {
  // const [userName, setuserName] = useState('Kanha');

  // const[age, setAge] = useState(22);

  // function change(){
  //   setuserName('Pratham');
  //   setAge(21);
  // }
  
  const [count, setCount] = useState(0);

  function dec(){
       setCount(count-1);
  }
  function inc(){
setCount(count+1);
  }

  function Jum(){
    setCount(count+5);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
      <button onClick={Jum}>Jump by 5 </button>
      

      {/* <h1>My name is {userName}<br/> My age is {age}</h1>
      <button onClick={change}>Click</button> */}
    </div>
  )
}

export default App
