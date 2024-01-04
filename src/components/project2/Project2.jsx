import React from 'react'
import Back from '../common/Back'
import Heading from '../common/Heading'
import './project2.css'
import img from '../images/coimbatore/1.jpg'
import { Slider } from '../slider/Slider'
import im2 from '../images/Pune/2.jpg'
import im3 from '../images/Pune/3.jpg'
import im4 from '../images/Pune/4.jpg'
import im5 from '../images/Pune/5.jpg'
import im6 from '../images/Pune/6.jpg'




export const Project2 = () => {
  return (
    <div>
         <section className='about'>
        <Back name='INDIALAND TECH PARK' title='Coimbatore' cover={img} />
        <div className='about'>
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title ="INDIALAND TECH PARK" subtitle="Coimbatore" />

            <p>Spread over 12 acres with a build up space of 1.1 million sq ft, this state-of-the-art IT Park is designed specially to cater to IT/ITES companies. Located 10 kms north of Coimbatore and 12 kms from Airport, with close proximity to NH47, this IT Park project is first of its kind in this region. An Eco-Friendly design with Gold Rated green building specification for user comfort, high energy and floor efficiency. There’s full compliance with National building code, designed with International standard facilities, the property perfectly suits the requirements of IT/ITES companies—integration of computer communication, electronic systems and control technologies provides optimal comfort to the occupants.

</p>
            <br></br>
            <p>
The area has been designated as SEZ for the development of IT and ITES facilities. The land is nestled in a serene, pollution free atmosphere, INDIALAND TECH PARK is a state-of-the-art information technology park providing top-notch infrastructure facilities.
</p>
            <br></br>
            
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
