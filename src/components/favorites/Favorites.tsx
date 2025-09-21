"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import FavoritesCard from "./FavoritesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { favorites } from "@/data/favorites_data";

const Favorites = () => {
  return (
    <section className="w-full md:h-[447px] py-20 md:py-0 md:px-20 px-4 flex flex-col md:flex-row gap-y-10 md:gap-y-0">
      {/* Left Side */}
      <div className="md:w-2/5  md:h-full md:gap-y-20 gap-y-10 flex flex-col select-none">
        <div className="w-full md:h-1/4 h-22 bg-theme-white clip-title flex items-center gap-x-9 justify-center">
          <div className="h-2/5 w-1/3 relative">
            <Image
              src={"/favorites_section/youtube_logo.svg"}
              alt={"youtube"}
              fill
              className="object-contain"
            />
          </div>
          <div className="h-2/5 w-1/3 relative">
            <Image
              src={"/favorites_section/spotify_logo.svg"}
              alt={"spotify"}
              fill
              className="object-contain"
            />
          </div>
        </div>
        <h2 className="md:text-6xl text-5xl md:pl-20 font-saira-condensed font-bold self-center text-center md:text-start md:self-start">
          AYIN <br /> FAVORİLERİ
        </h2>
      </div>

      {/* Right Side */}
      <div className="md:w-3/5 w-full  md:pl-10  flex flex-col justify-center items-center gap-y-8">
        <Swiper
          className={`w-full h-2/3 flex items-center`}
          slidesPerView="auto"
          spaceBetween={40}
          freeMode={true}
          loop={true}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".favorites-pagination",
            bulletClass: "favorites-bullet",
            bulletActiveClass: "favorites-bullet-active",
          }}
        >
          {favorites.map((fav, index) => (
            <SwiperSlide
              key={index}
              className="md:!w-auto h-3/4 px-10 md:px-0 md:aspect-[9/10]  aspect-[7/8] flex items-center justify-center"
            >
              <FavoritesCard fav={fav} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination container */}
        <div className="favorites-pagination flex w-2/3  h-1.5 rounded-full " />
      </div>
    </section>
  );
};

export default Favorites;
