"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from "../../public/Logo.png"
import NavLinks from './NavLinks'
import NavIcons from './NavIcons'

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    // Set initial scroll position
    if (typeof window !== 'undefined') {
      handleScroll();
    }

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`flex items-center justify-between fixed w-full px-24 py-4 max-xl:px-10 max-sm:px-5 transition-colors duration-300 
    ${isScrolled ? 'bg-gradient-to-r from-blue-200 via-purple-200 to-purple-300 text-black' : 'bg-transparent text-white'}
`}>
      <a href="#">
      <Image src={logo} alt='Logo' className='cursor-pointer' />
      </a>
      <div className='max-lg:hidden'>
        <NavLinks />
      </div>
      <NavIcons />
    </nav>
  )
}

export default Nav;
