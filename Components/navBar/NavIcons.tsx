"use client"
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Bars from './Bars';

const NavIcons = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    // Set initial width
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='flex gap-5 items-center'>
    <div className='bg-custom-color rever rounded-full p-2'>
  <FontAwesomeIcon icon={faCartShopping} className='w-5 h-5 cursor-pointer' size="xl" />
    </div>
    {
        width >= 1024 ?
        <FontAwesomeIcon icon={faMagnifyingGlass} className='w-5 h-5 cursor-pointer ' size='xl'/>
        :
        <Bars />
    }
  </div>
  )
}

export default NavIcons
