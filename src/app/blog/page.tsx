"use client";
import BlogPageSlider from "@/components/BlogPageSlider";
import Breadcrumbs from "@/components/BreadCrumbs";
import ExploreTitle from "@/components/explore/ExploreTitle";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Tags from "@/components/Tags";
import TrendsGrid from "@/components/trends/TrendsGrid";
import TrendsTitle from "@/components/trends/TrendsTitle";
import data from "@/data/mock_data";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Blog = () => {
  return (
    <div className="py-20 md:px-20 px-4 space-y-12">
      {/* Blog Hero Section */}
      <div className="w-full relative overflow-hidden p-14 pb-24 bg-primary text-black font-saira-condensed uppercase font-bold leading-7">
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
          <div className="grid grid-cols-5 grid-rows-4 gap-y-2 gap-x-4">
            <div className="col-span-3 row-span-4 relative">
              <Swiper
                className="h-full"
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                  el: ".blog-pagination",
                  bulletClass: "blog-bullet",
                  bulletActiveClass: "blog-bullet-active",
                }}
              >
                {data.map((item, index) => (
                  <SwiperSlide key={index} className="h-full">
                    <BlogPageSlider {...item} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="blog-pagination gap-x-1 h-5 flex items-center"></div>
            </div>

            {/* Right Side */}
            {data.slice(0, 4).map((post, index) => (
              <div
                key={index}
                className="col-span-2 row-span-1 flex gap-x-4 items-center text-2xl"
              >
                <div className="h-24 relative aspect-video">
                  <Image
                    src={post.attributes.img}
                    alt={post.attributes.title}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <p className="line-clamp-3 leading-6">{post.attributes.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex">
          <div className="w-full h-40 absolute -bottom-20 scale-60 -left-90">
            <Image
              src={"/mountains_2.svg"}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full h-40 absolute -bottom-20 -right-90 scale-x-[-0.6] scale-y-60">
            <Image
              src={"/mountains_2.svg"}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Explore Section */}
      <ExploreTitle />
      <Tags />
      <TrendsGrid cols={4} rows={2} isVertical={true} />
      {/* Footer and Newsletter Section */}
      <div className="w-full flex gap-x-[18%]">
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
