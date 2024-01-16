import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"
import magar from '../../../Assets/cybercity.jpg'

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Projects' subtitle='prime land parcels in South Mumbai, Coimbatore, suburban Chennai (Padalam, Oragadam), and Pune (Hinjewadi) for high-end commercial and residential development.' />
        
            <RecentCard />
         


               
       
        </div>
      </section>
    </>
  )
}

export default Recent
