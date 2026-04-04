import React, { useState } from 'react'

const App = () => {
   const [num, setnum] = useState({user:'pratham', age: 22});

//  2 const [num, setnum] = useState([10,20,30]);

// 1 function btnClicked() {
//   const newNum = { ...num };
//   newNum.user = 'kanha';
//   newNum.age = 21;
//   setnum(newNum);
// }

function btnClicked() {
  setnum(prev=>({...prev,age:20,user:'kanha'}));
}

// BATCH UPDATE
// const [num, setnum] = useState(10);
// const btnClicked=()=>{
//         setnum(prev=>prev+1);
//         setnum(prev=>prev+1);
//         setnum(prev=>prev+1);

// }

//  2 function btnClicked() {
//   const newNum = [...num];
//   newNum.push(50);
//   setnum(newNum);
// }
  return (
    <div>

      {/* function 1
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>Click</button> */}
         
         {/* function 2
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button> */}
            
            {/* function 3 more optimise  */}
           <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>Click</button>

       {/* batch update
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button> */}
      
    </div>
  )
}

export default App
