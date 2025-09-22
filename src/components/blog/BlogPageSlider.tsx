import React from "react";
import Image from "next/image";
import { Post } from "@/data/mock_data";
import { FaRegCirclePlay } from "react-icons/fa6";
import Link from "next/link";

const BlogPageSlider = (post: Post) => {
  return (
    <Link href={`/blog/${post.attributes.slug}`} className="w-full h-full">
      <div className="w-full aspect-video relative overflow-hidden">
        <Image
          src={post.attributes.img}
          alt={post.attributes.title}
          fill
          className="object-cover scale-110"
        />
        <div className="w-full absolute bottom-1 h-full bg-linear-to-t from-theme-black/60 to-transparent"></div>

        <FaRegCirclePlay className="object-cover w-12 h-12 absolute right-4 bottom-4 text-primary" />
      </div>

      <div className="md:flex items-center">
        <h2 className="md:text-2xl text-xl font-bold line-clamp-3 md:leading-7 leading-5.5">
          {post.attributes.desc}
        </h2>
        <div className="w-140 hidden md:block"></div>
      </div>
    </Link>
  );
};

export default BlogPageSlider;
