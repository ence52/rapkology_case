"use client";
import Image from "next/image";
import React from "react";
import ClippedButton from "./ClippedButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HeroSlider from "./HeroSlider";
import heroData from "@/data/hero_data";
const Hero = () => {
  return (
    <section className="md:h-[700px] h-[770px] w-full relative">
      <Swiper className="h-full">
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
    </section>
  );
};

export default Hero;
