import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"
import { Commonabt } from "../commonabout/Commonabt"
import Awards from "../home/awards/Awards"
import MissonCard from "./missoncard/MissonCard"
import { faBullseye, faCrosshairs, faBullseyePointer } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash, faEyeDropper, faBlind } from '@fortawesome/free-solid-svg-icons';
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />

        <Commonabt/>
        {/* <Awards/> */}
        
        <section className='featuredd background'>
        <div className='container'>
          <Heading title='Our Philosophy' />
          <div className='missoncontainer'>

          <MissonCard icon={faBullseye} name="Mission" para="Our mission is to pursue real estate investment, development and management opportunities responsibly and with integrity for the benefit of our investors, partners, tenants, employees, company, and the community."/>
          <MissonCard icon={faEye} name="Vision" para="To increase the operating capacity of our rent yielding asset 3X to 6 million sq. ft. by year 2020. To increase the market cap of our non-listed real estate operating portfolio to INR 3.5 billion by 2022."/>
          <MissonCard icon={faFlagCheckered} name="Core" para="Driven by extraordinary visionaries, IndiaLand is committed to creating World class Buildings adhering to best practices of quality construction. We are adamant about minimising the risk of our Clients and Personnel by adopting high safety and health standards."/>
          </div>


          
        </div>
        <div className="container">
        <br/>
        <br/>
        <br/>


        <Heading title='Our Presence' />
          <div className='missoncontainer'>



          <MissonCard icon={faMapMarker} name="INDIALAND HEAD OFFICE, Mumbai" number="+91 9962098032,

+91 7824077222" email="info@indialand.net" addr="ADDRESS 1607, 16th Floor, Lodha Supremus, Senapati Bapat Marg, Lower Parel, Mumbai – 400013

"/>
          <MissonCard icon={faMapMarker} name="CYBER CITY Pune" number="+91 9962098032,

+91 7824077222" email="info@indialand.net" addr="Sholapur Bazar Road, Off East Street, Pune - 411 001"/>
          <MissonCard icon={faMapMarker} name="INDIALAND TECH PARK Coimbatore" number="+91 9962098032,

+91 7824077222" email="info@indialand.net" addr="CHIL SEZ Road, CHIL SEZ IT Park, Saravanampatty, Keeranatham, Tamil Nadu - 641 035"/>
          <MissonCard icon={faMapMarker} name="INDUSTRIAL AND LOGISTICS PARK Chennai" number="+91 9962098032,

+91 7824077222" email="info@indialand.net" addr="14, 3rd Main Rd, Sidco Industrial Estate, Ambattur Industrial Estate, Chennai, Tamil Nadu 600058"/>

          </div>
        </div>


      </section>
        
      </section>
    </>
  )
}

export default About
