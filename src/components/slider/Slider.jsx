import React from 'react'
import Carousal from "@itseasy21/react-elastic-carousel";
import Item from "./Item";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  
export const Slider = (img1, img2, img3, img4, img5, img6, img7) => {

  return (
    <div>
         <Carousal breakPoints={breakPoints}>
          <Item><img src={img1} alt="" /></Item>
          <Item><img src={img2} alt="" /></Item>
          <Item><img src={img3} alt="" /></Item>
          <Item><img src={img4} alt="" /></Item>
          <Item><img src={img5} alt="" /></Item>
          <Item><img src={img6} alt="" /></Item>
          <Item><img src={img7} alt="" /></Item>

         
        
        </Carousal>

    </div>
  )
}
