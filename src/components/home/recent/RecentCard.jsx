import React from "react"
import { list } from "../../data/Data"
// import './recent.css'

const RecentCard = () => {
  return (
    <>
      <div className='box-area-news'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type, link } = val
          return (
            <div className="box2">
                    <img src={cover} alt=""/>
                    <div className="overlay">
                        <h3>{name}</h3>
                        <a href={link}>Know more</a>
                    </div>
                </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
