"use client";
import React, { useState, useEffect, useRef } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavLinks from './NavLinks';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import logo from "../../public/Logo.png";
import Image from 'next/image';

const Bars = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handelBars = () => {
    if (isOpen) {
      setAnimate(true);
      setTimeout(() => {
        setIsOpen(false);
        setAnimate(false);
      }, 500); 
    } else {
      setIsOpen(true);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      handelBars();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <FontAwesomeIcon 
        icon={faBars} 
        className='w-5 h-5 cursor-pointer' 
        size='xl' 
        onClick={handelBars} 
      />
      {isOpen && (
        <div 
          ref={menuRef}
          className={`absolute left-0 top-0 bg-white p-5 text-black h-screen w-[50%] min-w-[280px] 
            ${animate ? 'animate-slideOut' : 'animate-slideIn'}`} 
          style={{ zIndex: 100 }}
        >
          <div className='flex justify-between items-start pb-4'>
            <Image src={logo} alt='logo' />
            <FontAwesomeIcon 
              icon={faXmark} 
              size='xl' 
              className='cursor-pointer' 
              onClick={handelBars} 
            />
          </div>
          <NavLinks />
        </div>
      )}
    </div>
  );
};

export default Bars;
