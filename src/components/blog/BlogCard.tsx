import React from "react";
import Image from "next/image";
import { Post } from "@/data/mock_data";
import Link from "next/link";
const BlogCard = (post: Post) => {
  return (
    <Link
      href={`/blog/${post.attributes.slug}`}
      className="col-span-2 row-span-1 flex md:gap-x-4 gap-x-2 items-center md:text-2xl text-xl"
    >
      <div className="h-24 relative aspect-video">
        <Image
          src={post.attributes.img}
          alt={post.attributes.title}
          layout="fill"
          className="object-cover"
        />
      </div>
      <p className="line-clamp-3 md:leading-7 leading-5.5">
        {post.attributes.desc}
      </p>
    </Link>
  );
};

export default BlogCard;
