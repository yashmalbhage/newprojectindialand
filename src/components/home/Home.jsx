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

const Home = () => {
  return (
    <>
        
        <Hero />

   
    <Featured />

      <Commonabt/>
      <Awards />


      <Recent />
      {/* <Location /> */}
      <Blog/>
      <Team />
      {/* <Price /> */}
    
    </>

  
  )
}

export default Home
