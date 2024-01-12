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
import  VideoBackground from '../videobg/Videobg'
import vidoebg from './Chennai.mp4'
import YourComponent from '../projectdesc/Projectdsc'


export const Project3 = () => {
  const sections = [
    {
      title: 'Project description',
      paragraph:
        
        "Chennai, the vibrant capital of Tamil Nadu, stands out as a bustling metropolis with a population of 7 million. It proudly hosts the Oragadam Industrial Area, a prominent hub known for being the largest automobile manufacturing center in South Asia. This region attracts Fortune 500 companies, contributing to the city's industrial prowess. The automotive sector, in particular, plays a significant role in shaping the economic landscape of Chennai.",
    },
    {
      title: 'Project description',
      paragraph:
        "Nestled within this dynamic industrial environment is the IndiaLand Industrial and Logistic Park, strategically positioned on an expansive 18-acre land parcel. This dedicated space caters to the specific needs of major automotive players, offering an optimal solution for their inventory storage requirements. The park's location, just 4-5 kilometers away from key Fortune 500 manufacturing plants, positions it as a pivotal player in supporting the logistical and supply chain needs of these industry giants.",
    },
    {
      title: 'Project description',
      paragraph:
        "The IndiaLand Industrial and Logistic Park emerges as a critical facilitator, connecting the intricate network of automotive companies with streamlined storage and distribution solutions. Its strategic proximity enhances operational efficiency, making it an indispensable asset for the thriving automobile sector in the region. As a centralized hub for industrial and logistical activities, the park plays a crucial role in sustaining the growth and success of the automotive industry within the Oragadam Industrial Area.",
    },
    {
      title: 'Project description',
      paragraph:
        "In summary, Chennai's dynamic industrial landscape, fueled by the Oragadam Industrial Area, establishes the city as a key player in South Asia's automobile manufacturing sector. The IndiaLand Industrial and Logistic Park, with its strategic location and dedicated infrastructure, stands as a vital resource for automotive giants, offering efficient solutions for storage and distribution in the heart of this thriving industrial hub.",
    },
    {
      title: 'Project description',
      paragraph:
        "In summary, Chennai's dynamic industrial landscape, fueled by the Oragadam Industrial Area, establishes the city as a key player in South Asia's automobile manufacturing sector. The IndiaLand Industrial and Logistic Park, with its strategic location and dedicated infrastructure, stands as a vital resource for automotive giants, offering efficient solutions for storage and distribution in the heart of this thriving industrial hub.",
    },
   
    // Add more sections as needed
  ];
  return (
    <div>
         <section className='about'>
       <VideoBackground videoFile={vidoebg} title="Indialand industrial and logistic  park oragadam"/>

        <div className='about'>
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title ="INDIALAND INDUSTRIAL AND LOGISTIC PARK ORAGADAM " subtitle="Chennai" />

       
            <br></br>
            
          </div>
          <div className='right row' >
            <img src={img} alt="" />
          </div>
        </div>
    </div>
    
    <YourComponent sections={sections}/>
        
      </section>
        
    </div>
  )
}
