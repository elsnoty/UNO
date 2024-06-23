import React from 'react'
import new1s from "../../public/6322d3331af34d0c240ea28f_20.webp"
import new2s from "../../public/new2s.webp"
import new3s from "../../public/new3s.webp"
import Image, { StaticImageData } from 'next/image'

interface LatestNews {
    image: StaticImageData,
    date: string,
    title: string,
    content: string,
    type: string,
}

const news: LatestNews[] = [
    {
        image: new1s,
        date: "September 15, 2022",
        title: "Sexbots and cybersex: Kate Davis explores relationship replacements",
        content: "Bring to the table win-win survival strategies to ensure proactive domination.",
        type: "Business"
    },
    {
        image: new2s,
        date: "September 16, 2022",
        title: "Apartamento at ten: a decade of celebrating the everyday home",
        content: "Bring to the table win-win survival strategies to ensure proactive domination.",
        type: "Business"
    },
    {
        image: new3s,
        date: "September 17, 2022",
        title: "Aron Klein’s captivating images of the Bulgarian demon chasers",
        content: "Bring to the table win-win survival strategies to ensure proactive domination.",
        type: "Creative"
    },
]

const Latest = () => {
    return (
        <div className='px-24 py-10 max-xl:px-3'>
            <div className='font-syne font-bold text-center'>
                <h3>LASTEST NEWS</h3>
                <h1 className='text-4xl'>Thoughts and experiments</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center pt-10 gap-5 w-full'>
                {
                    news.map((value, index) => (
                        <div key={index} className='flex-col flex gap-y-5 group font-syne sm:max-w-[400px] hover:scale-105 duration-500 transition-all'>
                            <div className='max-w-[400px] overflow-hidden relative'>
                                <div className='group-hover:scale-110 duration-700 transition-all'>
                                    <Image src={value.image} alt='News' className='' />
                                </div>
                                <p className='absolute top-0 right-0 bg-custom-color px-3 py-1 z-[1] font-bold'>{value.type}</p>
                            </div>
                            <p className='font-bold'>{value.date}</p>
                            <h1 className='font-bold text-3xl group-hover:underline group-hover:underline-offset-2'>{value.title}</h1>
                            <p>{value.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Latest;
