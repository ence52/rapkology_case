import { Post } from "@/data/mock_data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

const ClipCard = (post: Post) => {
  return (
    <Link href={`/blog/${post.attributes.slug}`} className="w-full  relative">
      <div className="w-full aspect-video relative overflow-hidden">
        <Image
          alt={post.attributes.title}
          src={post.attributes.img}
          fill
          className="scale-115"
        />
        <div className="absolute w-full h-full bg-linear-to-t from-theme-black/60 to-transparent flex items-center justify-center">
          <FaRegCirclePlay className=" w-16 h-16   text-primary" />
        </div>
      </div>
      <p className="font-saira-condensed font-bold text-xl leading-6">
        {post.attributes.desc}
      </p>
    </Link>
  );
};

export default ClipCard;
