import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between py-5 px-10 bg-[rgb(10,117,146)] text-white items-center'>
        <h3 className='font-bold text-lg'>Bansal Dharmkanta</h3>
        <div className='flex items-center gap-40  underline'>

          {/* <a href='/'>Home</a>
          <a href='/About'>Aboutt</a>
          <a href='/cont'>Contact</a>
           */}

            <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/cont'>Contact</Link>
                <Link to='/pro'>Product</Link>

                {/* Link is used to navigate between pages without refreshing the page, while a is used for traditional navigation that causes a full page reload. */}

        </div>
      </div>
    </div>
  )
}

export default Navbar
