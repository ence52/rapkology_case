import React from "react";
import Image from "next/image";
import { Post } from "@/data/mock_data";
const BlogPageSlider = (post: Post) => {
  return (
    <div className="w-full h-full">
      <div className="w-full aspect-video relative overflow-hidden">
        <Image
          src={post.attributes.img}
          alt={post.attributes.title}
          fill
          className="object-cover scale-110"
        />
      </div>

      <h2 className="text-2xl font-bold line-clamp-3 leading-7">
        {post.attributes.desc}
      </h2>
    </div>
  );
};

export default BlogPageSlider;
