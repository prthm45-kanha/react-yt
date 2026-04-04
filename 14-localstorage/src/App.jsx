import React from 'react'

const App = () => {
 const useer={
  username:'Pratham',
  age:21,
  city:'Mathura'
 } // ye object form ha, ise local storage me store karne ke liye hume ise string me convert karna padega,
 // islye hum JSON.stringify() ka use karenge, jo object ko string me convert kar deta hai.


localStorage.setItem('user',JSON.stringify(useer)); 
// to convert object to string and store in local storage
localStorage.setItem('user',JSON.parse(JSON.stringify(useer)));
// to convert string back to object and store in local storage



  return (
    <div> 
      
   
    </div>
  )
}

export default App
