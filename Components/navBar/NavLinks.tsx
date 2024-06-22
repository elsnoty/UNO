"use client"
import React, { useState } from 'react'
import NavLinksProp from './NavLinksProp'
import DropDown from './DropDown'

const NavLinks = () => {
    const [hoverStates, setHoverStates] = useState(Array(2).fill(false));

    const handleHover = (index: number, isHovering: boolean) => {
        const newHoverStates = [...hoverStates];
        newHoverStates[index] = isHovering;
        setHoverStates(newHoverStates);
    };

    return (
        <div className='flex gap-5 max-lg:flex-col'>
            <NavLinksProp
                text='DEMOS'
                className={`font-Archivo hover:text-gradient font-bold cursor-pointer relative`}
                onMouseEnter={() => handleHover(0, true)}
                onMouseLeave={() => handleHover(0, false)}
            >
                {hoverStates[0] && (
                    <DropDown />
                )}
            </NavLinksProp>
            <NavLinksProp
                text='OUR SERVICES'
                className={`font-Archivo hover:text-gradient font-bold cursor-pointer relative `}
                onMouseEnter={() => handleHover(1, true)}
                onMouseLeave={() => handleHover(1, false)}
            >
                {hoverStates[1] && (
                    <DropDown />
                )}
            </NavLinksProp>
            <NavLinksProp text='COMPANY' className='font-Archivo hover:text-gradient font-bold cursor-pointer'/>
            <NavLinksProp text='PRICING' className='font-Archivo hover:text-gradient font-bold cursor-pointer'/>
            <NavLinksProp text='REVIEWS' className='font-Archivo hover:text-gradient font-bold cursor-pointer'/>
            <NavLinksProp text='NEWS' className='font-Archivo hover:text-gradient font-bold cursor-pointer'/>
            <NavLinksProp text='CONTACT US' className='font-Archivo hover:text-gradient font-bold cursor-pointer'/>
            <NavLinksProp text='PAGES' className='font-Archivo hover:text-gradient font-bold cursor-pointer'/>
        </div>
    );
}

export default NavLinks;
