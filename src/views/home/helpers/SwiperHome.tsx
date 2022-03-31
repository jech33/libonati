/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
// import Swiper core and required modules
import { Navigation, FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Additional imports
import { CircularProgress } from '@mui/material';
import images from '../../../config/photos.json';

const SwiperHome = ({ id }:{id:string}) => {
  const slidesCrew = images.crew;
  const [loadingImg, setLoadingImg] = useState(true);

  return (
    <>
      {loadingImg && (
      <div className="h-screen flex md:h-full w-full justify-center items-center p-0 m-0">
        <CircularProgress color="inherit" className="text-libonatiGold" />
      </div>
      )}
      <Swiper
        id={id}
        className={`${loadingImg && 'hidden'}`}
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
          h-screen w-full lg:h-full lg:w-full
          bg-gradient-to-t from-black opacity-90"
            />
            <div className="absolute flex flex-col justify-between py-10
          h-full w-full lg:h-full lg:w-full
          text-libonatiGold text-center"
            >
              <p className="memberDescription"> </p>
              <h3 className="bg-black bg-opacity-60 w-2/6 py-2 mx-auto">{crewMate.nickname.toUpperCase()}</h3>
            </div>
            <img
              className={`object-cover h-full ${loadingImg && 'hidden'}
                  ${crewMate.id === 4 ? 'object-left' : 'object-center'}`}
              src={images.link + crewMate.homePhotoId}
              alt={crewMate.nickname}
              onLoad={() => setLoadingImg(false)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperHome;
