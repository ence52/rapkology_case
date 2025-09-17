import React from "react";
import Image from "next/image";
import { IoCompassOutline } from "react-icons/io5";
import TrendCard from "../trends/TrendCard";
import { writers } from "@/data/writers";
import Tags from "../Tags";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
import ExploreTitle from "./ExploreTitle";

const Explore = () => {
  return (
    <div className="w-full  md:p-20 px-4 md:grid md:grid-cols-3 gap-x-20">
      {/* Left Side */}
      <div className="md:col-span-2 py-20  flex flex-col md:gap-y-10 gap-y-2">
        <ExploreTitle />
        {writers.map((writer, index) => (
          <div key={index} className="w-full h-full flex md:flex-row flex-col ">
            <div className="md:w-2/5 md:h-full w-full ">
              <div className="w-full aspect-video relative">
                <Image
                  src={writer.profilePicUrl}
                  alt={writer.writerName}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="md:py-6 py-3 md:text-base text-sm text-white/25">
                24 MART 2024
              </h4>
            </div>
            <TrendCard props={writer} />
          </div>
        ))}
        <button className="clip-button cursor-pointer hover:bg-primary duration-300  md:px-10 px-6 py-2 text-sm md:text-base md:py-4 mx-auto font-bold bg-white text-black">
          Tümünü Gör
        </button>
      </div>

      {/* Right Side */}
      <div className="col-span-1 md:space-y-40 space-y-20">
        <Tags />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default Explore;
