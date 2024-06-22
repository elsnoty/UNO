import React from 'react'

const HeroContent = () => {
  return (
    <div className='flex-col flex gap-y-8 text-white max-lg:items-center max-lg:my-10'>
      <span className='w-10 h-1 bg-white'></span>
      <h1 className='font-syne text-5xl font-bold lg:max-w-[700px] max-lg:text-3xl'>We provide the solutions to grow your business.</h1>
      <p className='font-Poppins font-bold'>We help startups and digital agencies launch projects on time, with no pain.</p>
      <button className="font-Poppins font-bold hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-white 
      bg-transparent px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 
      before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-700 hover:text-black 
      hover:shadow-white hover:before:left-0 hover:before:w-full z-[1]"><span className="relative">Read More</span></button>
    </div>
  )
}

export default HeroContent
