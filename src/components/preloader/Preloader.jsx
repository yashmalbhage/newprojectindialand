import React, { useEffect } from 'react'
import './preloader.css'
import { preLoaderAnim } from '../animation/anim'
const Preloader = () => {
    useEffect(()=>{
        preLoaderAnim()
    })
  return (
    <div>
        <div className="preloader">
            <div className="preloadertext">
                <h4>IndiaLand Groups</h4>
                {/* <p>The brighter side of life</p> */}
            </div>
        </div>
    </div>
  )
}

export default Preloader