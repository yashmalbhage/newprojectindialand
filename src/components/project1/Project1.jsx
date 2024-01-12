import React from 'react'
import Back from '../common/Back'
import Heading from '../common/Heading'
import './pro1.css'
import img from '../images/1.jpg'
import VideoBackground from '../videobg/Videobg'
import { Slider } from '../slider/Slider'
import im2 from '../images/Pune/2.jpg'
import im3 from '../images/Pune/3.jpg'
import im4 from '../images/Pune/4.jpg'
import im5 from '../images/Pune/5.jpg'
import im6 from '../images/Pune/6.jpg'
import YourComponent from '../projectdesc/Projectdsc'
import videong from './pune.mp4'
import Imagegrid from '../Imagegrid/Imagegrid'

export const Project1 = () => {
  const sections = [
    {
      title: 'Project description',
      paragraph:
        
        "Pune is the 2nd largest city in Maharashtra with a population of about 4 million. Pune is known as the “Oxford of the East” due to the presence of a large number of Educational Institutions. The city is emerging rapidly as an Automobile and IT & ITES destination.",
    },
    {
      title: 'Project description',
      paragraph:
        "The Industrial Park is located in Hinjewadi situated west of the city of Pune. The site is at a distance of 18 Km from Pune railway Station and 23 Km from the airport. The site is located close to the Pune-Mumbai Expressway which passes through Hinjewadi Town. Hinjewadi has emerged as a preferred IT & ITES destination and has tremendously contributed to the growing presence of IT & ITES companies in Pune.",
    },
    {
      title: 'Project description',
      paragraph:
        "The Industrial Park spreads out in 28 acres of land, oriented North-South, nestled on Eastern side of Western Ghats, with access roads of 20M on the northern side.",
    },
    {
      title: 'Project description',
      paragraph:
        "In summary, Chennai's dynamic industrial landscape, fueled by the Oragadam Industrial Area, establishes the city as a key player in South Asia's automobile manufacturing sector. The IndiaLand Industrial and Logistic Park, with its strategic location and dedicated infrastructure, stands as a vital resource for automotive giants, offering efficient solutions for storage and distribution in the heart of this thriving industrial hub.",
    },
    {
      title: 'Project description',
      paragraph:
        "The site is located close to the Rajiv Gandhi Infotech Park, which houses IT Companies such as Infosys, Wipro, Geometric Software solutions, CTS, TCS etc. Educational institutes like Symbiosis and Mercedes Benz Education Academy have also set base at Hinjewadi",
    },
   
    // Add more sections as needed
  ];
  return (
    <div>
         <section className='about'>
          <VideoBackground videoFile={videong} title='INDIALAND GLOBAL INDUSTRIAL PARK'/>
          <YourComponent sections={sections}/>
          <Imagegrid img1='../images/Pune/2.jpg' img2='../images/Pune/3.jpg' img3='../images/Pune/4.jpg' img4='../images/Pune/6.jpg' img5='../images/Pune/7.jpg'/>

       
    

        
      </section>
        
    </div>
  )
}
