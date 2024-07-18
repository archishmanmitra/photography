import React from 'react'
import { RiMenu2Line } from "react-icons/ri";
import Button from './Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="fixed top-0 z-40 flex items-center w-full px-5 pt-8 pb-4 text-center justify-between backdrop-blur-lg bg-[rgba(9,9,11,0.6)]">
      <RiMenu2Line size={30} />
      <Link to='/' href='#home' className="z-10 pt-3 ml-16 font-serif text-3xl text-center ">
        ARCHISHMAN MITRA
      </Link>
      <Link to='/about'>
      <Button name='contact' />
      </Link>
      
    </header>
  )
}

export default Navbar