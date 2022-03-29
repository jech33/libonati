/* eslint-disable import/no-unresolved */
import React from 'react';
// import Swiper core and required modules
import { Navigation, FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Additional imports
import images from '../../../assets/data.json';

const SwiperHome = ({ id }:{id:string}) => {
  const slidesCrew = images.crew;

  return (
    <Swiper
      id={id}
      // install Swiper modules
      modules={[Navigation, FreeMode, Pagination]}
      slidesPerView={1}
      spaceBetween={0}
      freeMode
      loop
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={(swiper) => console.log(swiper)}
    >
      { slidesCrew.map((crewMate) => (
        <SwiperSlide>
          <div className="absolute px-20 py-10
          h-full w-full lg:h-full lg:w-full
          bg-gradient-to-t from-black opacity-90"
          />
          <div className="absolute flex flex-col justify-end px-20 py-10
          h-full w-full lg:h-full lg:w-full
          text-libonatiWhiteFont"
          >
            <h3>{crewMate.nickname}</h3>
            <p className="memberDescription">{crewMate.instrument}</p>
          </div>
          <img
            className={`md:object-cover h-full object-cover
            ${crewMate.id === 4 ? 'object-left' : 'object-center'}`}
            src={images.link + crewMate.homePhotoId}
            alt={crewMate.nickname}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperHome;
