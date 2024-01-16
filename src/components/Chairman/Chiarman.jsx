import React from 'react'
import Back from '../common/Back'
import Heading from '../common/Heading'
import img from '../images/Harish.jpg'
import './chairman.css'
import YourComponent from '../projectdesc/Projectdsc'
export const Chiarman = () => {
  const secctions = [
    {
      title:"Chairman's message",
      paragraph:"From thoughts to ideas. The Customer is at the core of our business. Every project is carefully selected and designed to delight our customers."
    },
    {
      title:"Chairman's message",
      paragraph:'Our technical team develops real estate to the highest quality and safety standards and exacting looks as visualized by our architects. At the core of every design is to create a stress free cheerful environment and foster innovative thinking.'
    },
    {
      title:"Chairman's messgae",
      paragraph:'At IndiaLand, caring for environment is not an empty slogan; it is a part of our business strategy. Green building norms are involved from the conceptualization stage to reduce consumption of resources like electricity and water and minimize the total cost of ownership for our customers.'
    },
    {
      title:"Chairman's message",
      paragraph:"More than anything else IndiaLand is about people. The passion and drive of IndiaLand’s employees is demonstrated in the high quality of our work."
    },
    {
      title:"Chairman's message",
      paragraph:"Our values foster an entrepreneurial work culture and create a platform for individuals to learn and grow with the organization. I invite you to explore Indialand. From thoughts to ideas."
    }
  
  ]
  return (
    <div>

        
        <section className='aboutchairman'>
        <Back name="Mr. Harish Fabiani" title="Chairman's Corner" cover={img} />
        <div className="chaiimage">  <img src={img} alt="" /></div>
        {/* <Heading title="Harish Fabiani" subtitle="Chair person"/> */}
        <YourComponent sections={secctions}/>
       
        <h3 id='quote'>Chairman's Quote</h3>

        <div className="message">
        
          <p>
          "Indialand was born out of a dream: A dream to build India of the 21st century, a dream to create places which are in harmony with nature and yet provide the most modern comforts. We believe in creating landmarks for modern India through imagination, innovation and creativity."

          </p>
        

        </div>
       
      

        
        
      </section>
        

    </div>
  )
}
