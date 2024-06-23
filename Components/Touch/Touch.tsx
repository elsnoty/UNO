import React from 'react';

const Touch = () => {
  return (
    <div className='bg-[#f2f9ff] py-10 px-4 md:px-10 h-full w-full'>
      <div className='font-syne font-bold text-center'>
        <h3>GET IN TOUCH</h3>
        <h1 className='text-4xl'>Let’s work together</h1>
        <div className='flex flex-col gap-6 md:flex-row md:justify-center md:gap-10 mt-10'>
          <div className='flex flex-col gap-3 md:flex-row md:gap-7'>
            <input type='text' placeholder='Name' className='border-none focus:outline-[#5cc2ed] px-4 py-2 md:w-64' />
            <input type='text' placeholder='Email' className='border-none focus:outline-[#5cc2ed] px-4 py-2 md:w-64' />
          </div>
          <textarea placeholder='Message' className='resize-none border-none focus:outline-[#5cc2ed] px-4 py-2 md:w-96' />
        </div>
        <button className='bg-custom-color text-white p-3 mt-4 md:w-52 md:mt-6 hover:scale-95 duration-300 ease-linear block mx-auto'>SEND MESSAGE</button>
      </div>
    </div>
  );
};

export default Touch;
