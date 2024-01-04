import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


const Featured = () => {

  return (
    <ScrollAnimation animateIn="fadeIn" duration={10000} delay={1000}>
       <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Featured Property Types' subtitle='Find All Type of Property.' />
          <FeaturedCard />
        </div>
      </section>
    </>S
</ScrollAnimation>
   
    
  )
}

export default Featured
