import React from "react";
import { list2 } from "../../data/Data";
import './RecentCard2.css'; // Create a CSS file for styling

const RecentCard2 = () => {
  return (
    <>
      <div className='content grid1 mtop' style={{ justifyContent: 'center' }}>
        {list2.map((val, index) => {
          const { cover, subtitle, name, price } = val;
          return (
            <div className='box shadow' key={index} style={{marginLeft:'2%'}}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-comment'></i> {subtitle}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{price}</button> <label htmlFor=''></label>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard2;
