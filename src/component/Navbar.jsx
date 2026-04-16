
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-10 bg-cyan-900 justify-between items-center'>
      <h2 className='text-2xl font-bold'>PANKAJ</h2>
      <div className='flex underline gap-10'>
        <Link className='text-lg font-medium' to='/'>Home</Link>
        <Link className='text-lg font-medium' to='/about'>About</Link>
        <Link className='text-lg font-medium' to='/contact'>Contact</Link>
        <Link className='text-lg font-medium' to='/offer'>Offer</Link>
        <Link className='text-lg font-medium' to='/product'>Product</Link>
       




        
      </div>
    </div>
  )
}

export default Navbar
