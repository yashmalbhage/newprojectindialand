import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import { Commonabt } from "../commonabout/Commonabt"
import { Blog } from "./recent/blog"
import { Newabout } from "../Newabt/Newabout"
import { Newheader } from "../neHeader/Newheader"
import VideoBackground from "../videobg/Videobg"
import videobg from './coimbatore.mp4'
import './home.css'
import Preloader from "../preloader/Preloader"
import Testi from "./testimonials/Testi"
import Clientslider from "../clientslider/Clientslider"
import { faInbox } from "@fortawesome/free-solid-svg-icons"









const Home = () => {
  
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
  return (

    <>

  
       <>
        {/* <Newheader/> */}
        {/* <Hero /> */}

        
        <VideoBackground videoFile={videobg} buttonText="Contact us" title="IndiaLand Groups"/>
        <div className="animatedpart"> <Featured /></div>



        <div className="animatedpart"> <Commonabt/></div>
        <div className="animatedpart"> <Awards /></div>
        <div className="animatedpart"> <Recent /></div>
        <div className="animatedpart"> <Blog/>
        <Clientslider clientimgs={clientimgs} slides={6}/>

        {/* <Testi/> */}
        
        </div>



    
   

      
      {/* <Newabout/> */}
      


      
      {/* <Location /> */}
      
      {/* <Team /> */}
      {/* <Price /> */}
    
    </>

    </>
   
  
  )
}

export default Home
