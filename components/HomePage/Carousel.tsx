"use client";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination,Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'





const CarouselSlider = ({slides,className, slidesPerView}: {slides : any, className : any, slidesPerView : number}) => {

  return (
    <>
      <div className=''>
        <Swiper
        spaceBetween={10}
        slidesPerView={slidesPerView}
        loop={true}
        centeredSlides={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
          // navigation
          pagination={{
            clickable: true,
          }}
         
          modules={[Navigation, Pagination,Autoplay]}
          onSwiper={swiper => console.log(swiper)}
          breakpoints={{
    
            1280: {
              slidesPerView: 1,
              
            },
          }}
          
          className={className}
      
        >
          {slides.map((image:any, index:any) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <img
                  src={image.image}
                  alt={image.title}
                  className='block h-full w-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default CarouselSlider;
