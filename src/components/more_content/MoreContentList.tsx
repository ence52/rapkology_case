import React from "react";
import data from "@/data/mock_data";
import Image from "next/image";
import Link from "next/link";
const MoreContentList = () => {
  return (
    <ul className="divide-y-2 divide-theme-light-gray">
      {data.slice(0, 3).map((item, index) => (
        <li key={index} className="relative">
          <Link
            href={`/blog/${item.attributes.slug}`}
            className="flex items-center space-x-2.5 py-7"
          >
            <div className="h-20 aspect-video relative">
              <Image
                src={item.attributes.img}
                alt={item.attributes.title}
                className="object-contain"
                fill
              />
            </div>
            <span className="font-saira-condensed hover:text-primary duration-300 font-bold text-2xl uppercase">
              {item.attributes.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoreContentList;
