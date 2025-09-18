"use client";
import tags from "@/data/tags";
import Link from "next/link";
import React, { useState } from "react";
import { IoCompassOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TagButton from "./TagButton";
const Tags = () => {
  const [selectedTag, setSelectedTag] = useState(0);
  return (
    <div className=" flex flex-col gap-y-6 ">
      <div className="flex-wrap md:flex hidden gap-2 ">
        {tags.map((tag, index) => (
          <TagButton
            key={index}
            tag={tag}
            index={index}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
        ))}
      </div>
      <div className="md:hidden block">
        <Swiper
          className="w-full"
          spaceBetween={10}
          slidesPerView="auto"
          freeMode={true}
        >
          {tags.map((tag, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <TagButton
                tag={tag}
                index={index}
                selectedTag={selectedTag}
                setSelectedTag={setSelectedTag}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Tags;
