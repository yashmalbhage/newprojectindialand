import React from 'react'
import { profile } from '../data/Data'
import './main.css'
export const Profilecard = () => {
  return (
    <>
    <div className='content grid3 mtop'>
      {profile.map((val, index) => {
        const { cover, location, name, description } = val
        return (
          <div className='box shadow' key={index}>
            <div className='img'>
              <img src={cover} alt='' />
            </div>
            <div className='text'>
             
              <h4>{name}</h4>
              <p>
                <i className='fa-shield-al'></i> {location}
              </p>
              <p>{description}</p>
            </div>
           
          </div>
        )
      })}
    </div>
  </>
  )
}
