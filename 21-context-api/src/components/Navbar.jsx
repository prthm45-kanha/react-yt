
import { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {

    const [theme]=useContext(ThemeDataContext)

      return (
  
     <div className={`flex text-lg justify-between font-bold py-8 px-10 text-white 
${theme === 'light' ? 'bg-cyan-600' : 'bg-[darkslategrey]'}`}>

      <h2>Bansal DharamKanta</h2>
      <Nav2 />
    </div>
  )
}

export default Navbar
