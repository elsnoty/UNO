import React from 'react'
import workflow from "../../public/workflow.svg"
import budget from "../../public/budget.svg"
import market from "../../public/market.svg"
import solution from "../../public/solution.svg"
import Image, { StaticImageData } from 'next/image'

interface Service {
  id: number,
  image: StaticImageData,
  headLine: string,
  content: string,
}

const OurService = () => {
  return (
    <div id='OurServices' className='px-24 py-10 max-xl:px-10 flex flex-col items-center max-sm:px-5'>
      <div className='text-center'>
        <p className='font-bold font-Poppins text-gray-500 py-3'>OUR SERVICES</p>
        <h1 className='font-bold text-4xl font-syne'>We’re a creative agency. Ask us about distinctive branding</h1>
      </div>
      <div className='grid grid-cols-4 gap-3 my-10 content-center font-syne max-lg:grid-cols-2 max-sm:grid-cols-1'>
        {
          data.map((value, index) => (
            <div key={value.id} className={`relative overflow-hidden border
            ${index === 1 ? 'bg-custom-color text-white' : 'bg-white'} shadow-2xl transition-all before:absolute before:bottom-0 
            before:left-0 before:top-0 before:z-0 before:h-full before:w-0 
            ${index === 1 ? 'before:bg-white hover:text-black' : 'before:bg-custom-color hover:text-white'} before:transition-all before:duration-500 
           hover:shadow-white hover:before:left-0 hover:before:w-full 
            hover:before:${index === 1 ? ' text-black' : 'bg-custom-color'}`}>
              <div className='flex flex-col gap-y-5 items-center justify-center text-center font-syne p-3 h-[500px] z-[1] relative'>
                <div>
                  <Image src={value.image} alt='serviceImg' />
                </div>
                <h1 className='font-bold text-3xl'>{value.headLine}</h1>
                <p>{value.content}</p>
              </div>
            </div>
          ))
        }
      </div>
      <button className="text-red text-center align-middle hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border bg-white px-3 text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gray-900 before:transition-all before:duration-500 
      hover:text-white hover:shadow-white hover:before:left-0 hover:before:w-full"><span className="relative z-[1] text-center align-middle">Let’s Talk</span></button>
    </div>
  )
}
export default OurService;

const data: Service[] = [
  {
    id: 1,
    image: workflow,
    headLine: "Workflow Automation",
    content: "Bring to the table win-win survival strategies to ensure proactive domination.",
  },
  {
    id: 2,
    image: budget,
    headLine: "Budget Accounting",
    content: "Bring to the table win-win survival strategies to ensure proactive domination.",
  },
  {
    id: 3,
    image: market,
    headLine: "Market Forecasts",
    content: "Bring to the table win-win survival strategies to ensure proactive domination.",
  },
  {
    id: 4,
    image: solution,
    headLine: "Solution Defining",
    content: "Bring to the table win-win survival strategies to ensure proactive domination.",
  },
]
