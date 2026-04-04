import React from 'react'

const App = () => {
 const getData=async()=>{
  const response=await fetch('https://jsonplaceholder.typicode.com/todos/')
  const data=await response.json();
  console.log(data);
  
 }
// .json() is used to fetch the data from the api
  // async await is used to wait for the response from the API before moving on to the next line of code. This is important because we want to make sure that we have the data before we try to use it. If we didn't use await, we would try to use the data before it was available, which would cause an error.
  return (
    <div>
      <button onClick={getData}>get data</button>
    </div>
  )
}
export default App
