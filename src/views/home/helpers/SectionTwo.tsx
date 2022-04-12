import React from 'react';

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

    <div className="flex flex-col
          w-full lg:w-6/12
          lg:pl-10 py-3 lg:pb-0 pb-8
          px-8 md:px-3
          text-center lg:text-left"
    >
      <h1 className="text-center lg:text-right mb-10 lg:mb-0">
        HISTORY
      </h1>
      <h2 className="text-center lg:text-right text-libonatiGrayYellow">
        Vestibulum in facilisis lectus. Praesent sit amet urna pulvinar,
        gravida magna commodo, molestie purus. Cras laoreet vitae risus vel...
      </h2>
      <br />
      <p className="text-center lg:text-right text-libonatiGrayYellow">
        Vestibulum in facilisis lectus. Praesent sit amet urna pulvinar,
        gravida magna commodo, molestie purus. Cras laoreet vitae risus vel
        laoreet. Suspendisse dignissim efficitur urna nec elementum. Duis
        faucibus neque ac erat finibus, bibendum ullamcorper quam egestas.
        Quisque non felis ex. Aenean id metus nec quam facilisis vulputate.
        Quisque sem mauris, tempor ac dui eget, fringilla luctus velit. Ut
        dignissim in diam a tincidunt. Curabitur id neque urna. Nulla laoreet
        mi sed neque efficitur ultrices. Suspendisse quis mattis urna, vitae
        pellentesque ex.
      </p>
    </div>
  </div>
);

export default SectionTwo;
