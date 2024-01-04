import React from 'react'
import Back from '../common/Back'
import Heading from '../common/Heading'
import './pro1.css'
import img from '../images/1.jpg'
import { Slider } from '../slider/Slider'
import im2 from '../images/Pune/2.jpg'
import im3 from '../images/Pune/3.jpg'
import im4 from '../images/Pune/4.jpg'
import im5 from '../images/Pune/5.jpg'
import im6 from '../images/Pune/6.jpg'




export const Project1 = () => {
  return (
    <div>
         <section className='about'>
        <Back name='INDIALAND GLOBAL INDUSTRIAL PARK' title='Hinjewadi, Pune' cover={img} />
        <div className='about'>
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title ="INDIALAND GLOBAL INDUSTRIAL PARK" subtitle="Hinjewadi, Pune" />

            <p>Pune is the 2nd largest city in Maharashtra with a population of about 4 million. Pune is known as the “Oxford of the East” due to the presence of a large number of Educational Institutions. The city is emerging rapidly as an Automobile and IT & ITES destination.
</p>
            <br></br>
            <p>The Industrial Park is located in Hinjewadi situated west of the city of Pune. The site is at a distance of 18 Km from Pune railway Station and 23 Km from the airport. The site is located close to the Pune-Mumbai Expressway which passes through Hinjewadi Town. Hinjewadi has emerged as a preferred IT & ITES destination and has tremendously contributed to the growing presence of IT & ITES companies in Pune.</p>
            <br></br>
            <p>The Industrial Park spreads out in 28 acres of land, oriented North-South, nestled on Eastern side of Western Ghats, with access roads of 20M on the northern side.</p>
            <br></br>
            <p>The site is located close to the Rajiv Gandhi Infotech Park, which houses IT Companies such as Infosys, Wipro, Geometric Software solutions, CTS, TCS etc. Educational institutes like Symbiosis and Mercedes Benz Education Academy have also set base at Hinjewadi</p>
          </div>
          <div className='right row' >
            <img src={img} alt="" />
          </div>
        </div>
    </div>
    

        
      </section>
        
    </div>
  )
}
