import React from 'react'
import Image from 'next/image'
import logo from "../../public/Logo.png"
import NavLinks from './NavLinks'
import NavIcons from './NavIcons'


const Nav = () => {
  return (
    <nav className='flex items-center justify-between fixed w-full text-white px-24 py-3 max-xl:px-10 max-sm:px-5'>
      <Image src={logo} alt='Logo' className='bg-custom-color cursor-pointer'/>
      <div className='max-lg:hidden'>
      <NavLinks />
      </div>
      <NavIcons />
    </nav>
  )
}

export default Nav
