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
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => {
  return (
    <>
    <Hero />
        
       

   
    <Featured />
    <ScrollAnimation  animateIn="fadeIn" duration={100} delay={1200}>
      <Commonabt/> </ScrollAnimation>
      <ScrollAnimation  animateIn="fadeIn" duration={100} delay={1200}>
      <Awards /></ScrollAnimation>
      <ScrollAnimation  animateIn="fadeIn" duration={100} delay={1200}><Recent /></ScrollAnimation>
      <ScrollAnimation  animateIn="fadeIn" duration={100} delay={1020}> <Blog/></ScrollAnimation>



      
      {/* <Location /> */}
     
      {/* <Price /> */}
    
    </>

  
  )
}

export default Home
