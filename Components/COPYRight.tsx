import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const COPYRight = () => {
  return (
    <div className='text-center font-syne px-10 bg-gray-800 text-white py-5'>
      <h3><FontAwesomeIcon icon={faCopyright} /> Uno 128. All Rights Reserved 2024. Licensing</h3>
      <p className='font-bold'><a href="https://www.128.digital/webflow-templates" target='_blank'>webflow-templates</a> by <a href="https://www.128.digital/" target='_blank'>128.digital</a>Powered by <a href="https://webflow.com/" target='_blank'>Webflow</a></p>
    </div>
  )
}

export default COPYRight
