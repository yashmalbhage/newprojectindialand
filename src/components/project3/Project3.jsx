import React from 'react'
import Back from '../common/Back'
import Heading from '../common/Heading'
import './project3.css'
import img from '../images/Chennai/1.jpg'
import { Slider } from '../slider/Slider'
import im2 from '../images/Pune/2.jpg'
import im3 from '../images/Pune/3.jpg'
import im4 from '../images/Pune/4.jpg'
import im5 from '../images/Pune/5.jpg'
import im6 from '../images/Pune/6.jpg'




export const Project3 = () => {
  return (
    <div>
         <section className='about'>
        <Back name='INDIALAND INDUSTRIAL AND LOGISTIC PARK ORAGADAM ' title='Chennai' cover={img} />
        <div className='about'>
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title ="INDIALAND INDUSTRIAL AND LOGISTIC PARK ORAGADAM " subtitle="Chennai" />

            <p>
Chennai is a bustling metro with population of 7 million and the Capital of the Southern State of Tamil Nadu. The Industrial Area, Oragadam, near Chennai is a home for a large number of Automobile companies (many of them being Fortune 500 companies), manufacturing a large range of OEM products ranging from the crucial engines to the smallest auto components. The locality has the distinction of being the largest Automobile manufacturing hub in South Asia.

</p>
            <br></br>
            <p>
            IndiaLand Industrial and Logistic Park is located in 18 acres of Land close to companies engaged in the Automobile sector who need large spaces to store and safe keep their inventories in close proximity to their manufacturing plants. The site is at a distance of just 4-5 Kms from these major companies and thus plays a pivotal role in providing all logistical and supply chain needs of these large companies.


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
