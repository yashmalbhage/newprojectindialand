import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"
import { Commonabt } from "../commonabout/Commonabt"
import Awards from "../home/awards/Awards"
const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />

        <Commonabt/>
        <Awards/>
        
      </section>
    </>
  )
}

export default About
