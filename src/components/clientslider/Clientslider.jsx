import React from 'react'
import Heading from '../common/Heading'
import { Navigation, Pagination, Scrollbar, A11y,  Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Clientslider = ({ clientimgs, slides}) => {
  let slidesPerViewDesktop = slides;
  const slidesPerViewMobile = 4;
  const initialSlidesPerView = window.innerWidth >= 768 ? slidesPerViewDesktop : slidesPerViewMobile;
  return (
    <div>
        <Heading title="Our clients"/>
        <div className="clietimgslider" style={{margin:'4%'}}>
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={initialSlidesPerView}
      // navigation
      // pagination={{ clickable: true}}
      autoplay
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {clientimgs.map((clientimg, index)=>
          <SwiperSlide key={index}><img src={clientimg.img} alt="" style={{width:"90%"}}/></SwiperSlide>
        
        )}
    
   
      
    </Swiper>

        </div>
        
    </div>
  )
}

export default Clientslider