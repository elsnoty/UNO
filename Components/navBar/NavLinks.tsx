import React from 'react'
import NavLinksProp from './NavLinksProp'

const NavLinks = () => {

    return (
        <div className='flex gap-5 max-lg:flex-col'>
            <NavLinksProp
                text='OUR SERVICES'
                className={`font-Archivo hover:text-gradient font-bold cursor-pointer relative `}
                href="#OurServices"
            />
            <NavLinksProp text='COMPANY' className='font-Archivo hover:text-gradient font-bold cursor-pointer' href="#OurCompany"/>
            <NavLinksProp text='PRICING' className='font-Archivo hover:text-gradient font-bold cursor-pointer' href="#OurPricing"/>
            <NavLinksProp text='REVIEWS' className='font-Archivo hover:text-gradient font-bold cursor-pointer' href="#OurReviews"/>
            <NavLinksProp text='NEWS' className='font-Archivo hover:text-gradient font-bold cursor-pointer' href="#OurNews"/>
            <NavLinksProp text='CONTACT US' className='font-Archivo hover:text-gradient font-bold cursor-pointer' href="#OurContact"/>
        </div>
    );
}

export default NavLinks;
