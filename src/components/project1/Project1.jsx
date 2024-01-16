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
import Clientslider from '../clientslider/Clientslider'

export const Project1 = () => {
   
const clientimgs = [
  {index:1, img:'../images/Home Page clients/acer.png'},
  {index:2, img:'../images/Home Page clients/atlas_copco.jpg'},
  {index:3, img:'../images/Home Page clients/borosil_logo.jpg'},
  {index:4, img:'../images/Home Page clients/Hamleys.jpg'},
  {index:5, img:'../images/Home Page clients/lakeme_saloon_logo.jpg'},
  {index:6, img:'../images/Home Page clients/pantaloon_logo.jpg'},
  {index:7, img:'../images/Home Page clients/renault_logo.jpg'},
  {index:8, img:'../images/Home Page clients/tacobell_logo.jpg'},
  {index:9, img:'../images/Home Page clients/tata_logo.jpg'},
  {index:10, img:'../images/Home Page clients/wow_momo_logo.jpg'}
]
  const sections = [
    {
      title: ' Introduction',
      paragraph:
        
        "Pune is the 2nd largest city in Maharashtra with a population of about 4 million. Pune is known as the “Oxford of the East” due to the presence of a large number of Educational Institutions. The city is emerging rapidly as an Automobile and IT & ITES destination.",
    },
    {
      title: 'Location and connectiity',
      paragraph:
        "The Industrial Park is located in Hinjewadi situated west of the city of Pune. The site is at a distance of 18 Km from Pune railway Station and 23 Km from the airport. The site is located close to the Pune-Mumbai Expressway which passes through Hinjewadi Town. Hinjewadi has emerged as a preferred IT & ITES destination and has tremendously contributed to the growing presence of IT & ITES companies in Pune.",
    },
    {
      title: ' Hinjewadi as an IT & ITES Hub',
      paragraph:
        "The Industrial Park spreads out in 28 acres of land, oriented North-South, nestled on Eastern side of Western Ghats, with access roads of 20M on the northern side.",
    },
    {
      title: ' Industrial Park Overview',
      paragraph:
        "Occupying 28 acres of land with a North-South orientation, the Industrial Park is nestled on the eastern side of the Western Ghats. Access roads of 20 meters on the northern side ensure efficient connectivity within the park. This well-planned layout aligns with the industrial needs of the region, fostering a conducive environment for businesses.",
    },
    {
      title: 'Educational and Corporate Presence',
      paragraph:
        "The site's significance is further underscored by its proximity to the Rajiv Gandhi Infotech Park, housing renowned IT companies such as Infosys, Wipro, Geometric Software Solutions, CTS, and TCS. Additionally, esteemed educational institutions like Symbiosis and the Mercedes Benz Education Academy have established their presence in Hinjewadi, creating a holistic environment that integrates academia and industry. As Pune continues to evolve, the Industrial Park in Hinjewadi remains at the forefront of shaping the city's industrial and educational landscape.",
    },
   
    // Add more sections as needed
  ];
  return (
    <div>
         <section className='about'>
          <VideoBackground videoFile={videong} title='INDIALAND GLOBAL INDUSTRIAL PARK'/>
          <YourComponent sections={sections}/>
          
          <Imagegrid img1='../images/Pune/2.jpg' img2='../images/Pune/3.jpg' img3='../images/Pune/4.jpg' img4='../images/Pune/6.jpg' img5='../images/Pune/7.jpg'/>
          <Clientslider clientimgs={clientimgs} slides={5}/>

       
    

        
      </section>
        
    </div>
  )
}
