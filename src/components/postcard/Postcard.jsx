import React from 'react'
import Heading from '../common/Heading'

export const Postcard = (title, subtitle, para1, para2, img) => {
  return (
    <div>
        <div className='about'>
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title={title} subtitle={subtitle} />

            <p> {para1}</p>
            <br></br>
            <p>{para2}</p>
            <br></br>
          </div>
          <div className='right row'>
            <img src={img} alt='' />
          </div>
        </div>
    </div>
    </div>
  )
}
