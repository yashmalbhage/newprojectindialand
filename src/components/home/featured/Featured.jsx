import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


const Featured = () => {

  return (
    
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Featured Property Types' subtitle='Find All Type of Property.' />
          <FeaturedCard />
        </div>
      </section>
    </>
    
  )
}

export default Featured
