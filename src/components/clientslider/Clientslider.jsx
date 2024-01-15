import React from 'react'
import Heading from '../common/Heading'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Clientslider = ({ clientimgs }) => {
  return (
    <div>
        <Heading title="Our clients"/>
        <div className="clietimgslider">
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {clientimgs.map((clientimg, index)=>
          <SwiperSlide key={index}><img src={clientimg.img} alt="" /></SwiperSlide>
        
        )}
    
   
      ...
    </Swiper>

        </div>
        
    </div>
  )
}

export default Clientslider