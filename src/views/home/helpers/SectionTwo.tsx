import React from 'react';
import langEn from '../utils/dictionary/language_en';

const SectionTwo = () => (
  <div className="md:container flex flex-col-reverse lg:flex-row text-center border-libonatiGold">
    <div className="md:p-2
          w-full h-screen md:h-[30rem] min-h-[30rem] lg:w-6/12
          lg:border-r-4 lg:border-t-4 lg:border-libonatiGold"
    >
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/pi8Gb9v74CY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>

    <article className="flex flex-col
          w-full lg:w-6/12
          lg:pl-10 py-3 lg:pb-0 pb-8
          px-8 md:px-3
          text-center lg:text-left"
    >
      <h1 className="text-center lg:text-right mb-10 lg:mb-0">
        {langEn.secondSection.title}
      </h1>
      <h2 className="text-center lg:text-right text-libonatiGrayYellow">
        {langEn.secondSection.subtitle}
      </h2>
      <br />
      <p className="text-center lg:text-right text-libonatiGrayYellow">
        {langEn.secondSection.description}
      </p>
    </article>
  </div>
);

export default SectionTwo;
