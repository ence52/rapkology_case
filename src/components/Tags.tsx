"use client";
import tags from "@/data/tags";
import Link from "next/link";
import React, { useState } from "react";
import { IoCompassOutline } from "react-icons/io5";

const Tags = () => {
  const [selectedTag, setSelectedTag] = useState(0);
  return (
    <div className=" flex flex-col gap-y-6 ">
      <h2 className="text-4xl font-bold font-saira-condensed">
        NE GÖRMEK İSTERSİN?
      </h2>
      <div className="flex-wrap flex gap-2">
        {tags.map((tag, index) => (
          <button
            key={index}
            className={`block border cursor-pointer px-2 py-1 text-base overflow-clip  ${
              selectedTag === index
                ? "text-theme-black bg-primary border-transparent"
                : " border-white text-white"
            }`}
            onClick={() => setSelectedTag(index)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tags;
