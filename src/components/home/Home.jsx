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

const Home = () => {
  return (
    <>
        {/* <Newheader/> */}
        {/* <Hero /> */}

        
        <VideoBackground videoFile={videobg} buttonText="Contact us" title="IndiaLand Groups"/>
        <div className="animatedpart"> <Featured /></div>



        <div className="animatedpart"> <Commonabt/></div>
        <div className="animatedpart"> <Awards /></div>
        <div className="animatedpart"> <Recent /></div>
        <div className="animatedpart"> <Blog/></div>



    
   

      
      {/* <Newabout/> */}
      


      
      {/* <Location /> */}
      
      {/* <Team /> */}
      {/* <Price /> */}
    
    </>

  
  )
}

export default Home
