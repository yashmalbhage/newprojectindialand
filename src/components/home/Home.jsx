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

const Home = () => {
  return (
    <>
        <Newheader/>
        {/* <Hero /> */}

   
    <Featured />

      <Commonabt/>
      {/* <Newabout/> */}
      <Awards />


      <Recent />
      {/* <Location /> */}
      <Blog/>
      {/* <Team /> */}
      {/* <Price /> */}
    
    </>

  
  )
}

export default Home
