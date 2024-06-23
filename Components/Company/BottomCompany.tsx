"use client";
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import comp from "../../public/company.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import gsap from 'gsap';

const BottomCompany= () => {
  const CompanyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      const el = CompanyRef.current;
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(el, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, delay: 0.6, ease: "power4.out" });
            observer.disconnect();
          }
        });
      }, { threshold: 0.1 });
  
      if(el) observer.observe(el);
  
      return () => {
        observer.disconnect;
      };
    }, []);
  return (
    <div className='flex justify-between items-center gap-5 bg-[#f2f9ff] max-lg:flex-col-reverse' ref={CompanyRef}>
      <div className='flex-col flex gap-y-5 lg:w-[800px] p-5 max-sm:p-2'>
        <h3 className='font-Poppins text-gray-500 py-3 font-bold'>THE DIFFERENCE</h3>
        <h1 className='font-syne font-bold text-4xl'>Experience true business performance increases</h1>
        <div className='flex justify-between max-lg:flex-col max-lg:gap-y-5'>
            <div>
                <div className='font-syne text-gradient font-bold text-7xl '>90 <span className='text-2xl relative'>
                    <FontAwesomeIcon icon={faPlus} className='absolute -top-10 -right-5'/></span></div>
                <h3 className='font-bold py-3'>Business Increase</h3>
                <p className='font-Poppins'>Far far away, behind the word mountains, far from the countries</p>
            </div>
            <div>
                <div className='font-syne text-gradient font-bold text-7xl'>200 <span className='text-2xl relative'>
                    <FontAwesomeIcon icon={faPlus} className='absolute -top-10 -right-5 '/></span></div>
                <h3 className='font-bold py-3'>New Accounts</h3>
                <p className='font-Poppins'>Far far away, behind the word mountains, far from the countries</p>
            </div>
        </div>
      </div>
      <div>
        <Image src={comp} alt='our company' className='lg:w-[1100px] lg:min-h-[480px]' />
      </div>
    </div>
  );
};

export default BottomCompany;
