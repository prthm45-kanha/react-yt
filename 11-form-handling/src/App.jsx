import React from 'react'

const App = () => {

  // When a form is submitted in HTML, the browser’s default behavior is to reload the page and send the form data to a
  //  server. In React, which works as a Single Page Application (SPA), this behavior is not desired because reloading
  //   the page would reset all the state and disrupt the user experience. That’s why we use e.preventDefault() inside 
  //   the submit handler—it prevents the browser from performing its default action. Instead, React can handle the
  //    form submission using JavaScript, allowing you to control what happens next (like validation, API calls, or
  //      updating state) without refreshing the page.
  const submitHandler =(e)=>{
    e.preventDefault();
    console.log("Form submitted");
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input type="text" placeholder="Enter your name" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
