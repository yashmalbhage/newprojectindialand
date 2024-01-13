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
import Imagegrid from '../Imagegrid/Imagegrid'


export const Project3 = () => {
  const sections = [
    {
      title: 'Introduction',
      paragraph:
        
        "Chennai, the bustling metropolis with a population of 7 million, stands as the capital of the southern state of Tamil Nadu. Renowned for its vibrant atmosphere and cultural richness, Chennai plays a crucial role in the economic landscape of South India.",
    },
    {
      title: 'Oragadam - Automobile Manufacturing Hub',
      paragraph:
    "Oragadam, an industrial area near Chennai, has earned prominence as a significant hub for the automobile industry. Home to a multitude of Fortune 500 companies, Oragadam specializes in the manufacturing of a wide array of Original Equipment Manufacturer (OEM) products. This spans from crucial engines to the minutest auto components, solidifying its reputation as the largest automobile manufacturing hub in South Asia.",
    },
    {
      title: 'IndiaLand Industrial and Logistic Park',
      paragraph:
        "Spanning 18 acres of strategically located land, the IndiaLand Industrial and Logistic Park in close proximity to Oragadam caters to the specific needs of companies within the automobile sector. Recognizing the substantial space requirements for storing and safeguarding inventories, this industrial park serves as an ideal solution. Its strategic location, merely 4-5 kilometers from major automobile companies, positions it as a pivotal player in meeting the logistical and supply chain demands of these large corporations.",
    },
    {
      title: ' Proximity and Convenience',
      paragraph:
        "The strategic placement of the industrial and logistic park in close proximity to major automobile companies proves instrumental in enhancing efficiency and reducing transportation costs. This close-knit relationship fosters a seamless integration of storage facilities with manufacturing plants, addressing the immediate needs of companies operating within the bustling Oragadam industrial area.",
    },
    {
      title: 'Role in the Automobile Supply Chain',
      paragraph:
        "As the IndiaLand Industrial and Logistic Park aligns itself with the dynamic requirements of the automobile industry, it emerges as a vital player in the larger supply chain ecosystem. By providing essential logistical support to renowned corporations, it contributes significantly to the continued growth and success of the automobile manufacturing sector in the region.",
    },
   
    // Add more sections as needed
  ];
  return (
    <div>
         <section className='about'>
       <VideoBackground videoFile={vidoebg} title="Indialand industrial and logistic  park oragadam"/>

        
    
    <YourComponent sections={sections}/>
    <Imagegrid img1='../images/Chennai/2.jpg' img2='../images/Chennai/3.jpg' img3='../images/Chennai/4.jpg' img4='../images/Chennai/5.jpg' img5='../images/Chennai/1.jpg'/>

  
        
      </section>
        
    </div>
  )
}
