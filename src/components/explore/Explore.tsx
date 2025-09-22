import React from "react";
import Image from "next/image";
import TrendCard from "../trends/TrendCard";
import Tags from "../tags/Tags";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
import ExploreTitle from "./ExploreTitle";
import mock_data from "@/data/mock_data";
import formatDate from "@/utils/FormatDate";
import TagsTitle from "../tags/TagsTitle";
import Link from "next/link";

const Explore = () => {
  return (
    <section
      id="explore"
      className="w-full  md:p-20 px-4 md:grid md:grid-cols-3 gap-x-20"
    >
      {/* Left Side */}
      <div className="md:col-span-2 pb-20  flex flex-col md:gap-y-10 gap-y-2">
        <ExploreTitle />
        <div className="md:hidden w-full pb-10">
          <Tags />
        </div>
        {mock_data.map((post, index) => (
          <div key={index} className="w-full h-full flex md:flex-row flex-col ">
            <div className="md:w-2/5 md:h-full w-full ">
              <div className="w-full aspect-video relative">
                <Image
                  src={post.attributes.img}
                  alt={post.attributes.authors[0]}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="md:py-6 py-3 md:text-base text-sm text-white/25">
                {formatDate(post.createdAt)}
              </h4>
            </div>
            <TrendCard post={post} isVertical={false} />
          </div>
        ))}
        <Link
          href={"/blog"}
          className="clip-button cursor-pointer hover:bg-primary duration-300  md:px-10 px-6 py-2 text-sm md:text-base md:py-4 mx-auto font-bold bg-white text-black"
        >
          Tümünü Gör
        </Link>
      </div>

      {/* Right Side */}
      <div className="col-span-1 md:space-y-40 space-y-20">
        <div className="md:block hidden space-y-6">
          <TagsTitle />
          <Tags />
        </div>
        <Newsletter />
        <Footer />
      </div>
    </section>
  );
};

export default Explore;
