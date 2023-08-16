import React, { useEffect } from 'react'
import './preloader.css'
import { preLoaderAnim } from './animate'

function PreLoader() {
    useEffect(() => { 
        preLoaderAnim()

    }, [] )
  return (
    <div className='preloader'>
        <div className='texts-container'>🎯
            <span> Your </span>
            <span> Account  </span>
            <span> Manager </span>

        </div>
    </div>
  )
}

export default PreLoader