import React from 'react'
import './Newheader.css'
import Lottie from 'lottie-react'
import animationDaya from './Animation - 1704569191958.json'
import Particlesbg from '../particlesbg/Particlesbg'
export const Newheader = () => {
  return (
    <div>
        < Particlesbg/>
        <div className="newcontainer">
            <div className="title">
                <h1>
                    IndiaLand Groups
                </h1>
                <h6>The Brighter side of life</h6>
            </div>
            <div className="animation">
            <Lottie animationData={animationDaya}/>

            </div>

            
        </div>


    
</div>
  )
}
