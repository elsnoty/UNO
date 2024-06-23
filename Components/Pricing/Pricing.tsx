import React from 'react'
import check from "../../public/ckeck.png"
import Image from 'next/image';

interface Pricing {
    price: number,
        plan: string;
        type: string;
        inf1o: string;
        inf2o: string;
        inf3o: string;
        inf4o: string;
        reco?: string;
}

const Pricing = () => {
  return (
    <div className='px-24 py-8 max-xl:px-10 max-sm:px-5'>
      <div className='font-syne font-bold text-center'>
        <h3>PRICING PLANS</h3>
        <h1 className='text-4xl'>Let’s find the perfect plan</h1>
      </div>
      <div className='flex flex-wrap justify-center gap-14 pt-5'>
        {
            data.map((value,index)=>(
                <div key={index} className={`flex-col flex font-syne relative bg-white shadow-2xl p-5 gap-y-5 rounded-lg
                 ${index === 1 && "bg-gradient-to-tr from-[#5cc2ed66] via-[#5d62ee66] to-[#c298d366]"}`}>
                    <div className='flex gap-3 items-start pt-5'>
                    <div className=' text-gradient font-bold text-4xl '>
                        {value.price}$
                    </div>
                    <h3 className='rounded-full border p-1'>{value.plan}</h3>
                    </div>
                    <h1 className='font-bold text-4xl'>{value.type}</h1>
                    <hr />
                    <div className=' flex-col flex gap-y-5 pt-3'>
                    <h3 className='flex items-center gap-3 text-lg'><Image src={check} alt='check' width={16}/>{value.inf1o}</h3>
                    <h3 className='flex items-center gap-3 text-lg'><Image src={check} alt='check' width={16}/>{value.inf2o}</h3>
                    <h3 className='flex items-center gap-3 text-lg'><Image src={check} alt='check' width={16}/>{value.inf3o}</h3>
                    <h3 className='flex items-center gap-3 text-lg'><Image src={check} alt='check' width={16}/>{value.inf4o}</h3>
                    </div>
                    <button className="text-red text-center align-middle hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border bg-white px-3 text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-custom-color before:transition-all before:duration-500 
                    hover:text-white hover:shadow-white hover:before:left-0 hover:before:w-full"><span className="relative z-[1] text-center align-middle">Let’s Talk</span></button>
                    </div>
            ))
        }
      </div>
    </div>
  )
}

export default Pricing

const data: Pricing[]= [
    {
        price: 80,
        plan: "Monthly",
        type: "Basic plan",
        inf1o: "Branding strategy & identity",
        inf2o: "Marketing campaign & PR",
        inf3o: "Website and app designing",
        inf4o: "Video production & editing",
    },
    {
        price: 100,
        plan: "Monthly",
        type: "Standard",
        inf1o: "Branding strategy & identity",
        inf2o: "Marketing campaign & PR",
        inf3o: "Website and app designing",
        inf4o: "Video production & editing",
        reco: "Best"
    },
    {
        price: 120,
        plan: "Monthly",
        type: "Premium",
        inf1o: "Branding strategy & identity",
        inf2o: "Marketing campaign & PR",
        inf3o: "Website and app designing",
        inf4o: "Video production & editing",
    }
]