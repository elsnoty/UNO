import React from 'react'
import banner from "../../public/banner.webp"
import HeroContent from './HeroContent'
import HeroForm from './HeroForm'
const Hero = () => {
  return (
    <div className='h-screen bg-cover bg-center px-24 py-8 max-xl:px-10 max-sm:px-5 max-sm:h-full relative z-[0]' style={{backgroundImage: `url(${banner.src})`}}>
      <div className='flex items-center justify-between
    gap-5 max-lg:flex-col max-xl:justify-center h-full max-lg:h-auto max-lg:pt-7'>
      <HeroContent />
      <HeroForm />
      </div>
    </div>
  )
}

export default Hero
