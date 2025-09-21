"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import HeroSlider from "./HeroSlider";
import heroData from "@/data/hero_data";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Hero = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  // Navigation refs hazır olduktan sonra Swiper’a ata
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
        modules={[Navigation, Pagination]}
        onSwiper={setSwiperInstance}
      >
        {heroData.map((item, index) => (
          <SwiperSlide key={index} className="h-full">
            <HeroSlider {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Image
        src={"/mountains.svg"}
        alt=""
        width={1440}
        height={186}
        className="object-cover absolute bottom-0 z-10 "
      />

      {/* Prev Button */}
      <div
        ref={prevRef}
        className="absolute left-20 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
      >
        <GoArrowLeft className="text-4xl" />
      </div>

      {/* Next Button */}
      <div
        ref={nextRef}
        className="absolute right-20 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
      >
        <GoArrowRight className="text-4xl" />
      </div>
    </section>
  );
};

export default Hero;
