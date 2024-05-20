import React from 'react'
import { RiMenu2Line } from "react-icons/ri";
import Button from './Button';

const Navbar = () => {
  return (
    <header className="fixed top-0 z-40 flex items-center w-full px-5 pt-8 pb-4 text-center justify-between backdrop-blur-lg bg-[rgba(9,9,11,0.6)]">
        <RiMenu2Line size={30}  />
        <a href="#parallax" className="z-10 pt-3 ml-16 font-serif text-3xl text-center ">
          ARCHISHMAN MITRA
        </a>
        <Button href='#footer'  name='contact'/>
      </header>
  )
}

export default Navbar