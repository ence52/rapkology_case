"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import HeroSlider from "./HeroSlider";
import heroData from "@/data/hero_data";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Navigation } from "swiper/modules";

const Hero = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section id="hero" className="md:h-[700px] h-[770px] w-full relative">
      <Swiper
        className="h-full"
        loop={true}
        modules={[Navigation]}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {heroData.map((item, index) => (
          <SwiperSlide key={index} className="h-full">
            <HeroSlider {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full h-40 absolute z-20 scale-x-[-1] -bottom-20 -left-10 scale-110 ">
        <Image src={"/mountains_2.svg"} alt="" fill className="object-cover" />
      </div>
      {/* Prev Button */}
      <div
        ref={prevRef}
        className="absolute md:left-20 left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
      >
        <GoArrowLeft className="text-4xl" />
      </div>

      {/* Next Button */}
      <div
        ref={nextRef}
        className="absolute md:right-20 right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
      >
        <GoArrowRight className="text-4xl" />
      </div>
      <div className="gap-x-1  h-6 flex  justify-center items-center absolute md:bottom-22 bottom-40 z-10 md:right-[36%] right-[45%] -translate-x-1/2">
        {heroData.map((_, index) => (
          <button
            onClick={() => {
              setActiveIndex(index);
              swiperInstance?.slideTo(index);
            }}
            key={index}
            className={` rounded-full ${
              index === activeIndex
                ? "bg-theme-black h-2.5 w-2.5"
                : "bg-primary-darker h-2 w-2"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
