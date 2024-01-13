import React from 'react'
import Back from '../common/Back'
import Heading from '../common/Heading'
import './project2.css'
import img from '../images/coimbatore/1.jpg'
import { Slider } from '../slider/Slider'
// import im2 from '../images/Coimbatore/2.jpg'

import im3 from '../images/Pune/3.jpg'

import im5 from '../images/Pune/5.jpg'
import im6 from '../images/Pune/6.jpg'

import VideoBackground from '../videobg/Videobg'
import videobg from './coimbatore.mp4'
import YourComponent from '../projectdesc/Projectdsc'
import Imagegrid from '../Imagegrid/Imagegrid'


export const Project2 = () => {
  const sections = [
    {
      title: 'Introduction and Location',
      paragraph:
        
      "Spread across 12 acres, the state-of-the-art IT Park encompasses a build-up space of 1.1 million sq ft. Specifically designed to meet the needs of IT/ITES companies, this cutting-edge facility is located 10 kilometers north of Coimbatore and 12 kilometers from the airport. Its strategic proximity to NH47 makes it easily accessible. This pioneering IT Park is the first of its kind in the region, showcasing a commitment to technological advancements.",
    },
    {
      title: 'Eco-Friendly Design and Specifications',
      paragraph:
        "Notably, the IT Park features an eco-friendly design, with a Gold Rated green building specification aimed at enhancing user comfort and ensuring high energy and floor efficiency. The emphasis on sustainability aligns with modern standards for environmentally conscious infrastructure. The property is fully compliant with the National Building Code, emphasizing safety and regulatory adherence. The incorporation of international standard facilities positions it as a premier destination for IT/ITES companies.",
    },
    {
      title: ' Location Benefits and Connectivity',
      paragraph:
        " The IT Park's strategic location serves as a significant advantage, being situated 10 kilometers north of Coimbatore and merely 12 kilometers away from the airport. With close proximity to NH47, it offers excellent connectivity, facilitating seamless transportation for businesses and employees alike. This accessibility enhances the appeal of the IT Park for companies looking to establish their presence in the region.",
    },
    {
      title: 'Facilities and Compliance',
      paragraph:
        "The IT Park boasts state-of-the-art facilities designed in accordance with international standards. This ensures that it meets the specific requirements of IT/ITES companies, integrating advanced technologies for optimal comfort and operational efficiency. Full compliance with the National Building Code underscores the commitment to safety and regulatory standards, providing a secure and conducive environment for businesses.",
    },
    {
      title: 'Special Economic Zone (SEZ) and Serene Environment',
      paragraph:
        "The designated area as a Special Economic Zone (SEZ) underscores its significance for the development of IT and ITES facilities. Nestled in a serene and pollution-free atmosphere, the INDIALAND TECH PARK emerges as a cutting-edge information technology hub. With a commitment to top-notch infrastructure facilities, it stands as a testament to the forward-looking approach in fostering a conducive environment for technological innovation and business growth.",
    },
   
    // Add more sections as needed
  ];
 
  return (
    <div>
         <section className='about'>
          <VideoBackground  videoFile={videobg} title="INDIALAND TECH PARK"/>
        
            <YourComponent sections={sections}/>
            <Imagegrid img1='../images/coimbatore/1.jpg' img2='../images/coimbatore/3.jpg' img3='../images/coimbatore/4.jpg' img4='../images/coimbatore/6.jpg' img5='../images/coimbatore/2.jpg'/>


      

        
      </section>
        
    </div>
  )
}
