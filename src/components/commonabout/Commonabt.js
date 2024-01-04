import React from 'react'
import Heading from '../common/Heading'
import './main.css'


export const Commonabt = () => {
  return (
    <div className='about'>
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='About IndiaLand' subtitle='Check out our company story' />

            <p>India Land, a part of the Americorp Group, has developed five million square feet of real estate, including IT parks, SEZs, and industrial and commercial spaces across major Indian cities. </p>
            <br></br>
            <p> They hold prime land parcels in South Mumbai, Coimbatore, suburban Chennai (Padalam, Oragadam), and Pune (Hinjewadi) for high-end commercial and residential development.</p>
            <br></br>
            <button className='btn4'>More about us</button>
          </div>
          <div className='right row'>
            <img src='./images/aboutindiland.jpg' alt='' />
          </div>
        </div>
    </div>
  )
}
