import React from 'react'
import './Newheader.css'
import Lottie from 'lottie-react'
import animationDaya from './Animation - 1704569191958.json'
import Particlesbg from '../particlesbg/Particlesbg'
import { Slider } from '../slider/Slider'
export const Newheader = () => {
  return (
    <div>
        < Particlesbg/>
        <div className="newcontainer">
            <div className="title">
                <h1>
                Pioneering Grade A<br/>
                Commercial and<br/>
                Industrial Spaces in<br/>
                India
                </h1>
                <p>IndiaLand has its presence across India in major cities like Mumbai,<br/>Chennai, Coimbatore and Pune.</p>
            </div>
            <div className="animation">
            {/* <Lottie animationData={animationDaya}/> */}
            


            </div>

            
        </div>


    
</div>
  )
}
