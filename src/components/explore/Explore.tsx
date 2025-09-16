import React from "react";
import Image from "next/image";
import { IoCompassOutline } from "react-icons/io5";
import TrendCard from "../trends/TrendCard";
import { writers } from "@/data/writers";
import Tags from "../Tags";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
const Explore = () => {
  return (
    <div className="w-full p-20 grid grid-cols-3 gap-x-20">
      {/* Left Side */}
      <div className="col-span-2 flex flex-col gap-y-10">
        <div className="flex items-center gap-x-5  bg-pink-500 self-start">
          <h2 className="text-6xl font-bold font-saira-condensed">KEŞFET</h2>
          <IoCompassOutline className="text-6xl text-primary" />
        </div>
        {writers.map((writer, index) => (
          <div key={index} className="w-full h-full flex ">
            <div className="w-2/5 h-full ">
              <div className="w-full aspect-video relative">
                <Image
                  src={writer.profilePicUrl}
                  alt={writer.writerName}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="py-6 text-white/25">24 MART 2024</h4>
            </div>
            <TrendCard props={writer} />
          </div>
        ))}
      </div>

      {/* Right Side */}
      <div className="col-span-1 space-y-40">
        <Tags />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default Explore;
