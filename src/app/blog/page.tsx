"use client";
import BlogPageSlider from "@/components/blog/BlogPageSlider";
import Breadcrumbs from "@/components/BreadCrumbs";
import ExploreTitle from "@/components/explore/ExploreTitle";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Tags from "@/components/tags/Tags";
import TrendsGrid from "@/components/trends/TrendsGrid";
import TrendsTitle from "@/components/trends/TrendsTitle";
import mock_data from "@/data/mock_data";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BlogCard from "@/components/blog/BlogCard";
import Link from "next/link";
import ClipCard from "@/components/ClipCard";
import { BsCameraVideoFill } from "react-icons/bs";
import data from "@/data/mock_data";

const Blog = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState<any>(null);
  return (
    <div className="py-20 md:px-20 px-4 space-y-12 ">
      {/* Blog Hero Section */}
      <div className="w-full relative overflow-hidden p-4 md:p-14 pb-24 bg-primary text-black font-saira-condensed uppercase font-bold leading-7">
        <Image
          src="/blog/texture.png"
          alt="Blog Hero"
          fill
          className="object-cover *:opacity-40"
        />

        <div className="-top-14 -right-60 absolute h-full w-full z-10">
          <Image
            src="/blog/style.svg"
            alt="Style Logo"
            fill
            className="object-contain -rotate-[8deg]"
          />
        </div>

        <div className="relative z-20">
          <Breadcrumbs />
          <h1 className="text-5xl font-bold py-6">BLOG</h1>
          <div className="md:grid md:grid-cols-5 flex flex-col md:grid-rows-4 gap-y-2 gap-x-4">
            <div className="md:col-span-3 md:row-span-4 relative ">
              <Swiper
                onSwiper={setSwiperRef}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              >
                {mock_data.map((item, index) => (
                  <SwiperSlide key={index} className="h-full">
                    <BlogPageSlider {...item} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="gap-x-1 md:hidden h-6 flex justify-center items-center ">
                {data.map((_, index) => (
                  <button
                    onClick={() => {
                      setActiveIndex(index);
                      swiperRef?.slideTo(index);
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
            </div>

            {/* Right Side */}
            {mock_data.slice(0, 4).map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>

        <div className="flex ">
          <div className="w-full h-40 absolute -bottom-20 md:scale-60 md:-left-90  scale-x-150">
            <Image
              src={"/mountains_2.svg"}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full h-40 absolute  -bottom-20 md:-right-90 hidden md:block scale-x-[-0.6] scale-y-60">
            <Image
              src={"/mountains_2.svg"}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="gap-x-1  h-6 flex justify-center items-center absolute bottom-25 left-[52%] -translate-x-1/2">
          {data.map((_, index) => (
            <button
              onClick={() => {
                setActiveIndex(index);
                swiperRef?.slideTo(index);
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
      </div>

      {/* Explore Section */}
      <div id="explore" className="space-y-12 relative w-full overflow-hidden">
        <ExploreTitle />
        {/* Tags  */}
        <Tags />
        <TrendsGrid cols={4} rows={2} isVertical={true} />
        <div className="w-3/5 aspect-square absolute -z-10  top-8 -rotate-[14deg] -left-30">
          <Image
            alt="logo"
            src={"/diamond.svg"}
            fill
            className="object-contain"
          />
        </div>
      </div>
      {/* Clips */}
      <div className="md:hidden space-y-4">
        <div className="flex items-center gap-x-3 select-none">
          <h2 className=" text-4xl font-bold font-saira-condensed">KLİPLER</h2>
          <BsCameraVideoFill className=" text-4xl text-primary " />
        </div>
        <div className="flex flex-col gap-y-10">
          {mock_data.map((post, index) => (
            <ClipCard {...post} key={index} />
          ))}
        </div>
      </div>
      {/* Footer and Newsletter Section */}
      <div className="w-full md:flex gap-x-[18%] items-end space-y-8 md:space-y-0">
        <div className="w-full  flex flex-col ">
          <Link href={"/"} className="w-2/3  h-26 relative">
            <Image
              alt="logo"
              src={"/logo.svg"}
              fill
              className="object-contain"
            />
          </Link>
          <Newsletter />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
