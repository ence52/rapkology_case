import React from "react";
import Image from "next/image";
import { Post } from "@/data/mock_data";
import Link from "next/link";

const TrendCard = ({
  post,
  isVertical,
}: {
  post: Post;
  isVertical: boolean;
}) => {
  return (
    <Link
      href={`/blog/${post.attributes.slug}`}
      className={`w-full h-full  flex flex-col justify-between gap-y-4  group ${
        isVertical ? "" : " md:pl-12"
      } `}
    >
      <div className="flex items-start gap-x-4">
        <div className="h-8 relative aspect-square rounded-[10px] overflow-hidden">
          <Image
            src={`${post.attributes.img}`}
            alt={post.attributes.authors[0]}
            fill
            className="rounded-[10px] object-cover scale-120"
          />
        </div>
        <h4 className="text-base md:font-normal font-bold">
          {post.attributes.authors[0]}
        </h4>
      </div>
      <div className="flex flex-col justify-between h-full">
        {isVertical && (
          <div className=" w-full  relative aspect-video overflow-hidden">
            <Image
              src={`${post.attributes.img}`}
              alt={post.attributes.authors[0]}
              fill
              className="rounded-[10px] object-cover scale-120"
            />
          </div>
        )}
        <p className="font-saira-condensed font-bold md:text-2xl text-xl uppercase md:py-0 py-2 leading-6 group-hover:text-primary duration-300">
          {post.attributes.desc}
        </p>
        <button className="text-start border-b border-b-transparent group-hover:text-primary duration-300 hover:border-b-primary/60 py-4 border-t hover:cursor-pointer border-t-theme-lighter-black">
          Daha Fazla Oku
        </button>
      </div>
    </Link>
  );
};

export default TrendCard;
