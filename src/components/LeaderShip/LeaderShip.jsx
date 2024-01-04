import React from 'react'
import Header from '../common/header/Header'
import Back from "../common/Back"
import img from '../images/teammate2.jpg'
import img1 from '../images/Harish.jpg'
import './leadership.css'
import { Postcard } from '../postcard/Postcard'
import Heading from '../common/Heading'
import { Profilecard } from '../Profilecard/Profilecard'

export const LeaderShip = () => {
  return (
    <div>
         <section className='about'>
        <Back name='Leadership' title='LeaderShip in IndiaLand' cover={img} />
        <div className='about'>
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title ="Harish Fabiani" subtitle="Chair Person" />

            <p>Mr. Harish Fabiani, received his diploma in Electronics and Telecommunications Engineering in 1981 from Delhi University. In 1988, he completed an Executive Education program in Finance/General Corporate Management at Madrid IESE (Institute of Higher Business Studies).</p>
            <br></br>
            <p>He has two decades of experience managing various companies. He is actively involved with Technology companies, Commercial real estate ventures, Finance and Trading etc. Mr. Fabiani has been a strategic advisor to companies on issues of corporate governance and transparency.</p>
            <br></br>
          </div>
          <div className='right row' style={{width:"152rem"}}>
            <img src={img1} alt='' />
          </div>
        </div>
    </div>
    <section className='recent padding'>
    <div className='container'>
      <Heading title='Our leaders' subtitle='' />
      <Profilecard />
    </div>
  </section>

        
      </section>








    </div>
  )
}
