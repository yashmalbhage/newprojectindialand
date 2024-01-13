import React from 'react'
import Heading from '../common/Heading'
import './main.css'
import Lottie from 'lottie-react'
import animationDaya from './newanimate2.json'
import { Link } from 'react-router-dom'

export const Commonabt = () => {
  return (
    <div className='about'>
        <div className='container flex mtop'>
          <div className='left row' >
            <Heading title='About IndiaLand' subtitle='Check out our company story' />

            <p>India Land, a part of the Americorp Group, has developed five million square feet of real estate, including IT parks, SEZs, and industrial and commercial spaces across major Indian cities. </p>
            <br></br>
            <p> They hold prime land parcels in South Mumbai, Coimbatore, suburban Chennai (Padalam, Oragadam), and Pune (Hinjewadi) for high-end commercial and residential development.</p>
            <br></br>
            <div className="btnnewclass">
          {/* <button className='btn4' >More about us</button> */}
            </div>
            

            
          </div>
          <div className='right row'>
            <Lottie animationData={animationDaya}/>

          </div>
        </div>
    </div>
  )
}
