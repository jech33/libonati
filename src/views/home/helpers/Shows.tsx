/* eslint-disable no-param-reassign */
import React, { useCallback, useEffect, useState } from 'react';
import SpotifyWidget from '../../../components/spotify/SpotifyWidget';
import shows from '../../../config/shows.json';

const Shows = () => {
interface _show {
  [key: string]: any
}

const [showsConverted, setShowsConverted] = useState<any[]>([]);

const convertShows = useCallback(
  () => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const year = { year: 'numeric' };
    const convert = JSON.parse(JSON.stringify(shows));
    convert.map((show:_show) => {
      const showDate = new Date(show.date);
      show.date = showDate;
      return show;
    });
    convert.sort((a:any, b:any) => b.date - a.date);
    convert.map((show:any) => {
      show.year = show.date.toLocaleDateString('en-US', year);
      show.date = show.date.toLocaleDateString('en-US', options); // Saturday, September 17, 2016
      return show;
    });
    setShowsConverted(convert);
  },
  [],
);

useEffect(() => {
  convertShows();
}, [shows]);

return (
  <div className="parallax min-h-screen w-full flex flex-col">
    <div className="flex flex-col container mx-auto mt-20 px-10 2xl:px-0 items-center">
      <div className="w-full lg:max-w-[70rem]
      flex flex-col items-center
      py-10 px-10 mb-20
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
            <div className="px-2 md:w-3/12 lg:w-2/12">
              {show.date.toString()}
              <br />
              {show.year.toString()}
            </div>
            <div className="px-2 md:w-8/12 lg:w-9/12 text-libonatiWhiteFont">
              {show.venue}
            </div>
            <div className="px-2 md:w-3/12 lg:w-3/12">
              {show.location}
            </div>
          </div>
        ))}
      </div>

      {/* Spotify */}
      <div className="w-full z-10 mx-auto mb-20
        lg:max-w-[70rem]"
      >
        <SpotifyWidget />
      </div>

    </div>
  </div>
);
};

export default Shows;
