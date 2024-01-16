import React from "react";
import { list2 } from "../../data/Data";
import './RecentCard2.css'; // Create a CSS file for styling

const RecentCard2 = () => {
  return (
    <>
      <div className='blogcontainer' style={{ justifyContent: 'center'}}>
        {list2.map((val, index) => {
          const { cover, subtitle, name, price, link } = val;
          return (
            <div className='box shadow' key={index} style={{marginLeft:'2%'}}>
              <div className='img' style={{display:'flex', justifyContent:'center'}}>
                <img src={cover} alt='' style={{width:"60%"}}/>
              </div>
              <div className='text'>
                <div className='category flex'>
                </div>
                <h5>{name}</h5>
                <p>
                  <i className='fa fa-comment'></i> {subtitle}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <a href={link}>                  <button className='btn4'>{price}</button> <label htmlFor=''></label>
</a>
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
