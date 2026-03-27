import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
         <Card user='Pratham' age={21} img='https://images.unsplash.com/photo-1769863467291-23cf7902f686?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    <Card user='Bhumik' age={22} img='https://images.unsplash.com/photo-1768479397383-49806c934167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
    </div>
  )
}

export default App
 