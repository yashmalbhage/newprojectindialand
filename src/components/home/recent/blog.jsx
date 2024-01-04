import React from 'react'
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard2 from './Blogcard'

export const Blog = () => {
  return (
    <section className='recent padding'>
    <div className='container'>
      <Heading title='Recent blogs' subtitle='We publish blogs on regular basis so please do follow us' />
      <RecentCard2 />
    </div>
  </section>
    
  )
}
