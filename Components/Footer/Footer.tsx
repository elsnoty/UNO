import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrosoft, faChrome, faAndroid, faApple, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 md:flex md:justify-between font-syne pb-10">
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h1 className="text-4xl mb-4 lg:w-80">Your Business is Our Work</h1>
          <ul className="flex gap-4">
            <a href="https://www.microsoft.com/" target='_blank' className="hover:text-gray-400 hover:scale-95 duration-150 transition-all"><FontAwesomeIcon icon={faMicrosoft} size="2x" /></a>
            <a href="https://www.google.com/chrome/" target='_blank' className="hover:text-gray-400 hover:scale-95 duration-150 transition-all"><FontAwesomeIcon icon={faChrome} size="2x" /></a>
            <a href="https://www.android.com/" target='_blank' className="hover:text-gray-400 hover:scale-95 duration-150 transition-all"><FontAwesomeIcon icon={faAndroid} size="2x" /></a>
            <a href="https://www.apple.com/" target='_blank' className="hover:text-gray-400 hover:scale-95 duration-150 transition-all"><FontAwesomeIcon icon={faApple} size="2x" /></a>
          </ul>
        </div>

        <div className="mb-8 md:mb-0 md:w-1/3">
          <h3 className="text-3xl mb-4">Contacts</h3>
          <p>3rd Avenue, 128 Manhattan, New York, USA</p>
          <p>Mon - Fri: 8am - 7pm Weekend: Time Off</p>
          <a href="https://maps.google.com/" target='_blank' className="text-blue-400 hover:underline">Google Map</a>
          <ul className="flex flex-wrap gap-4 mt-4">
            <a href="#" className="hover:text-gray-400 hover:scale-95 duration-150 transition-all"><FontAwesomeIcon icon={faPhone} size="2x" className='px-1'/>+1 212 425 8617</a>
            <a href="#" className="hover:text-gray-400 hover:scale-95 duration-150 transition-all"><FontAwesomeIcon icon={faEnvelope} size="2x" className='px-1'/>information@office.com</a>
          </ul>
          <ul className='flex gap-x-4 pt-5'>
            <a href="https://www.facebook.com/" target='_blank' className="hover:text-gray-400 hover:scale-95 duration-150 transition-all"><FontAwesomeIcon icon={faFacebook} size='xl'/></a>
            <a href="https://www.X.com" target='_blank' className="hover:text-gray-400 hover:scale-95 duration-150 transition-all"><FontAwesomeIcon icon={faTwitter} size='xl'/></a>
            <a href="https://www.instagram.com" target='_blank' className="hover:text-gray-400 hover:scale-95 duration-150 transition-all"><FontAwesomeIcon icon={faInstagram} size='xl'/></a>
          </ul>
        </div>

        <div className="md:w-1/3">
          <h3 className="text-3xl mb-4">Our Support</h3>
          <span className='text-gradient text-3xl'>+1 212 425 8617</span>
          <p className="mt-2">Our online scheduling and payment system is safe.</p>
          <div className="mt-4">Need help? <span className="font-bold text-2xl">Contact Us</span></div>
        </div>
      </div>
      <hr />
    </footer>
  );
};

export default Footer;
