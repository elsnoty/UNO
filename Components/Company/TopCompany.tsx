"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import comp from "../../public/company2.jpg";
import Modal from './Model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';

const TopCompany: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleImageClick = (): void => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <div className='flex justify-between items-center gap-5 bg-[#f2f9ff] mt-10 max-lg:flex-col'>
      <div className='relative cursor-pointer' onClick={handleImageClick}>
        <Image src={comp} alt='our company' className='lg:w-[1000px] lg:min-h-[480px]' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <FontAwesomeIcon icon={faPlay} className='play-icon' size='2xl'/>
        </div>
      </div>
      <div className='flex-col flex gap-y-5 lg:w-[800px] pb-5 pl-2'>
        <h3 className='font-Poppins text-gray-500 py-3 font-bold'>OUR COMPANY</h3>
        <h1 className='font-syne font-bold text-4xl'>Creator of quality designs and thinker of fresh ideas.</h1>
        <p className='font-syne'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
          A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
        <button className='bg-custom-color text-white p-3 hover:scale-95 duration-100 ease-linear w-40'>Read More</button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoUrl="https://www.youtube.com/watch?v=wN8_eb3l0mw"
      />
    </div>
  );
};

export default TopCompany;

