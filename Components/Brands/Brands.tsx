import React from 'react'
import co from "../../public/co.webp"
import rever from "../../public/river.webp"
import forbes from "../../public/frobex.webp"
import teakwood from "../../public/teak.webp"
import Image from 'next/image'
const Brands = () => {
  return (
    <div className='py-10'>
    <div className='flex justify-evenly gap-x-5 gap-y-7 flex-wrap px-20 max-md:px-7 pb-4'>
      <Image src={co} alt='CoPixel'  className='transition-transform hover:translate-x-4 duration-200 cursor-pointer'/>
      <Image src={rever} alt='RRVERLAND'  className='transition-transform hover:translate-x-4 duration-200 cursor-pointer'/>
      <Image src={forbes} alt='FORBES'  className='transition-transform hover:translate-x-4 duration-200 cursor-pointer'/>
      <Image src={teakwood} alt='TEAKWOOD'  className='transition-transform hover:translate-x-4 duration-200 cursor-pointer'/>
    </div>
    <hr />
    </div>
  )
}

export default Brands
