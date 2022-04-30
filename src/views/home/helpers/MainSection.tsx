import React from 'react';
import SwiperHome from './SwiperHome';
import langEn from '../utils/dictionary/language_en';
// It should have all text on a json file
const MainSection = () => (
  <>
    <article className="flex flex-col
          sm:w-12/12 lg:w-6/12
          lg:pr-10 p-3 lg:pb-0 pb-8
          text-center lg:text-left"
    >
      <h1 className="text-center lg:text-left mb-10 lg:mb-0">
        {langEn.mainSection.title}
      </h1>
      <h2 className="text-libonatiGrayYellow">
        {langEn.mainSection.subtitle}
      </h2>
      <br />
      <p className="text-libonatiGrayYellow">
        {langEn.mainSection.description}
      </p>
    </article>
    <div className="sliderHome flex
          w-full lg:w-6/12 h-screen md:h-full max-h-screen min-h-[30rem]
          lg:border-l-4 lg:border-t-4 lg:border-libonatiGold"
    >
      <div className="w-full md:pl-2 md:pt-2 md:mb-2
            flex sm:justify-items-center
            shadow-gray shadow-xl"
      >
        <SwiperHome id="Home" />
      </div>
    </div>
  </>
);

export default MainSection;
