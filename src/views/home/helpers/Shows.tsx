import React, { useEffect, useState } from 'react';
import shows from '../../../config/shows.json';

const Shows = () => {
interface _show {
  [key: string]: any
}

const [showsConverted, setShowsConverted] = useState<any[]>([]);

useEffect(() => {
  const convert = shows.map((show:_show) => {
    const showDate = new Date(show.date);
    // eslint-disable-next-line no-param-reassign
    show.date = showDate;
    return show;
  });
  setShowsConverted(convert);
}, []);

return (
  <div className="parallax min-h-screen w-full flex flex-col">
    <div className="flex flex-col container mx-auto mt-20 px-10 2xl:px-0 items-center">
      <div className="w-full lg:max-w-[70rem]
      flex flex-col items-center
      py-10 px-10
      bg-libonatiDarkBlack/80 rounded-xl"
      >
        <h1 className="text-libonatiWhiteFont">LIVE SHOWS</h1>
        <hr className="border-libonatiGrayYellow w-full" />
        {showsConverted.map((show:any) => (
          <div
            key={show.id}
            className="flex flex-col md:flex-row w-full lg:max-w-[70rem]
            py-3 px-4
            border-b-[0.065rem] border-libonatiGrayYellow"
          >
            <div className="px-2 md:w-2/12">
              {show.date.toString()}
            </div>
            <div className="px-2 md:w-9/12 text-libonatiWhiteFont">
              {show.venue}
            </div>
            <div className="px-2 md:w-3/12">
              {show.location}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Shows;
