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
import MissonCard from '../../about/missoncard/MissonCard';



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
      spaceBetween={50}
      slidesPerView={1}
      Pagination={{ clickable: true }}
      Autoplay={{ delay: 0, disableOnInteraction: false }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><MissonCard para="We decided to come to Coimbatore mainly because of the abundant here and good quality colleges and and also the proactive support from the industrial in ." name="VenuGopal Center Head"/></SwiperSlide>
      <SwiperSlide><MissonCard para="The success of the first wave of that have made their , including Bosch, Cognizant, and Dell Computers, all goes very well for the" name="Ashok Bakthavasth"/></SwiperSlide>
      <SwiperSlide><MissonCard para="The success of the first wave of that have made their , including Bosch, Cognizant, and Dell Computers, all goes very well" name="Racehl Premnath"/></SwiperSlide>
      <SwiperSlide><MissonCard para="We have the resource requirement all round the year, for , and people with chemistry background, bio sciences" name="Venugopal"/></SwiperSlide>

     

     
      ...
    </Swiper>

        </div>





      </div>


    </div>
  
  
  );
};

export default Testi;
