import React from 'react';
import LogoLibonati from '../../assets/LogoLibonati';
import './home.scss';
import MainSection from './helpers/MainSection';
import SectionTwo from './helpers/SectionTwo';
import Shows from './helpers/Shows';

const Home = () => (
  <div className="container-home text-libonatiGold">

    {/* Logo */}
    <div className="fitHeight mt-10 mb-[20vh] md:conatiner">
      <LogoLibonati height={100} />
    </div>

    {/* Content */}
    <div className="mb-36 w-full text-libonatiGold z-10">

      {/* Separator on Mobile */}
      <div className="flex lg:hidden w-full mt-12">
        <div className="w-3/12" />
        <div className="w-6/12 h-[0.25rem] -mt-12">
          <div className="bg-libonatiGold w-full h-full" />
        </div>
        <div className="w-3/3" />
      </div>

      {/* The Band and Swiper Section */}
      <section className="md:container mx-auto flex flex-col lg:flex-row xl:px-10 2xl:px-0">
        <MainSection />
      </section>
    </div>

    {/* Separator on Mobile */}
    <div className="flex lg:hidden w-full">
      <div className="w-3/12" />
      <div className="w-6/12 h-[0.255rem] -mt-12">
        <div className="bg-libonatiGold w-full h-full" />
      </div>
      <div className="w-3/3" />
    </div>

    {/* History and Video */}
    <div className="w-full">
      <section className="flex flex-col items-center mx-auto mb-24 md:mb-36 xl:px-10 2xl:px-0">
        <SectionTwo />
      </section>
    </div>

    {/* Separator on Mobile */}
    <div className="flex lg:hidden w-full">
      <div className="w-3/12" />
      <div className="w-6/12 h-[0.255rem] -mt-12">
        <div className="bg-libonatiGold w-full h-full" />
      </div>
      <div className="w-3/3" />
    </div>

    {/* Shows */}
    <div className="w-full">
      <section className="flex flex-col mx-auto w-full">
        <Shows />
      </section>
    </div>
  </div>
);
export default Home;
