import React from 'react'

const HeroForm = () => {
  return (
    <form action="">
        <div className='bg-white px-5 py-7 flex-col flex gap-y-5 lg:w-[470px] lg:h-[450px] '>
        <h3 className='font-bold font-syne text-3xl'>Tell us about your project</h3>
        <p className='font-bold font-Poppins'>Achieving an exceptional digital presence requires experience, careful planning, and creativity.</p>
        <input type="text" placeholder='Enter Your Name' className='border focus:outline-[#5d62ee] p-3'/>
      <input type="text" placeholder='Enter Your Email' className='border focus:outline-[#5d62ee] p-3'/>
      <input type="number" placeholder='Enter Your Number' className='border focus:outline-[#5d62ee] p-3'/>
        <button className='bg-custom-color text-white p-3'>SUBMIT MESSAGE</button>
        </div>
    </form>
  )
}

export default HeroForm
