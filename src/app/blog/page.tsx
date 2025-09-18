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

const Blog = () => {
  return (
    <div className="py-20 md:px-20 px-4 space-y-12">
      {/* Blog Hero Section */}
      <div className="w-full relative overflow-hidden p-14 bg-primary text-black font-saira-condensed uppercase  font-bold  leading-7">
        <Image
          src="/blog/texture.png"
          alt="Blog Hero"
          fill
          className="object-cover *:opacity-40"
        />
        <div className="-top-14  -right-60 absolute h-full w-full ">
          <Image
            src="/blog/style.svg"
            alt="Style Logo"
            fill
            className="object-contain -rotate-[8deg] "
          />
        </div>
        <Breadcrumbs />
        <h1 className="text-5xl font-bold  py-6">BLOG</h1>
        <div className="grid grid-cols-5 grid-rows-4 gap-y-2 gap-x-4">
          <div className="col-span-3 row-span-4 bg-pink-300">
            <div className="w-full aspect-video relative overflow-hidden">
              <Image
                src={data[0].attributes.img}
                alt={data[0].attributes.title}
                fill
                className="object-cover scale-110"
              />
            </div>
            <h2 className="text-2xl font-bold">{data[0].attributes.desc}</h2>
          </div>
          {/* Right Side */}
          {data.slice(0, 4).map((post, index) => (
            <div
              key={index}
              className="col-span-2 row-span-1  flex gap-x-4 items-center text-2xl"
            >
              <div className="h-24 relative aspect-video">
                <Image
                  src={post.attributes.img}
                  alt={post.attributes.title}
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <p className="line-clamp-3"> {post.attributes.desc}</p>
            </div>
          ))}
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
