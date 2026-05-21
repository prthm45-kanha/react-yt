import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-cyan-800  font-bold  flex justify-between items-center text-white py-5 px-10'>
      <h2 className='text-xl'>Bansal Dharmkanta</h2>
      <div className='flex gap-10'>
        <Link className='text-lg' to='/'>Home</Link>
        <Link className='text-lg' to='/about'>About</Link>
        <Link className='text-lg' to='/course'>Courses</Link>
        <Link className='text-lg' to='/contact'>Contact</Link>
        <Link className='text-lg' to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
