import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='font-syne'>
      <div>
        <h1 className='text-4xl'>
        Your Business is Our Work
        </h1>
        <ul>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
        </ul>
      </div>

      <div>
        <h3 className='text-3xl'>Contacts</h3>
        <p>3rd Avenue, 128 Manhatten, New York, USA</p>
        <p>Mon - Fri: 8am - 7pm Weekend: Time Off</p>
        <a href="https://maps.google.com/">Google Map</a>
        <ul>
            <a></a>
            <a></a>
            <ul className='flex gap-2'>
                <a></a>
                <a></a>
                <a></a>
            </ul>
        </ul>
      </div>

    <div>
        <h3 className='text-3xl'>Our Support</h3>
        <span>+1 212 425 8617</span>
        <p>Our onane scheduang and payment system is safe.</p>
        <div>Need help? <span className='font-bold text-2xl'>Contact Us</span></div>
    </div>
        </div>
    </footer>
  )
}

export default Footer
