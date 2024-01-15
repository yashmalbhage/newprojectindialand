import React from 'react';
import { Carousel } from 'react-material-ui-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import  { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import  'swiper/css/bundle'
import { Paper, Button } from '@mui/material';
import Heading from '../../common/Heading';
import './testi.css'



const items = [
  {
    name: 'Item 1',
    description: 'Description for Item 1',
  },
  {
    name: 'Item 2',
    description: 'Description for Item 2',
  },
  {
    name: 'Item 3',
    description: 'Description for Item 3',
  },
];

const Testi= () => {
  return (
    <div>

      <div className="contaier">

        <Heading title="Testimonials" subtitle="What our clients say!"/>

        <div className="testimonialspart">
                  
<Swiper
  modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={2}
      Pagination={{ clickable: true }}
      Autoplay={{ delay: 0, disableOnInteraction: false }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>

      ...
    </Swiper>

        </div>





      </div>


    </div>
  
  
  );
};

export default Testi;
