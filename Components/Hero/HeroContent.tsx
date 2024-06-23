import React from 'react'

const HeroContent = () => {
  return (
    <div className='flex-col flex gap-y-8 text-white max-lg:items-center max-lg:my-10'>
      <span className='w-10 h-1 bg-white'></span>
      <h1 className='font-syne text-5xl font-bold lg:max-w-[700px] max-lg:text-3xl'>We provide the solutions to grow your business.</h1>
      <p className='font-Poppins font-bold'>We help startups and digital agencies launch projects on time, with no pain.</p>
      <button className="group relative min-h-[50px] w-40 overflow-hidden border hover:shadow-white border-white bg-transparent text-white shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-white before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-white after:duration-500 hover:text-black hover:before:h-full hover:after:h-full">
      <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-white before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-white after:duration-500 hover:text-black group-hover:before:h-full group-hover:after:h-full"></span>
      <span className="absolute bottom-0 left-0 right-0 top-0 z-0 flex h-full w-full items-center justify-center group-hover:text-black font-bold">Read More</span>
    </button>
    </div>
  )
}

export default HeroContent
