import { writers } from "@/data/writers";
import React from "react";
import { IoIosTrendingUp } from "react-icons/io";
import TrendCard from "./TrendCard";
import ClippedButton from "../ClippedButton";
const Trends = () => {
  return (
    <section className="w-full md:h-[854px] md:p-20 px-5 md:py-0 py-20 flex items-center flex-col md:gap-y-10 gap-y-5">
      <div className="flex items-center md:gap-x-5  md:self-start">
        <h2 className="md:text-6xl text-4xl font-bold font-saira-condensed">
          TRENDLER
        </h2>
        <IoIosTrendingUp className="md:text-6xl text-4xl text-primary " />
      </div>
      <div className="w-full h-full grid md:grid-cols-3 md:grid-rows-2">
        {writers.map((writer, index) => (
          <div key={index} className="w-full h-full flex ">
            <div className="w-1/5 h-full ">
              <h3 className="font-saira-condensed font-bold text-theme-lighter-black  text-6xl">{`0${
                index + 1
              }`}</h3>
            </div>
            <TrendCard props={writer} />
          </div>
        ))}
      </div>
      <ClippedButton label="Tümünü Gör" link="#" color="bg-white" />
    </section>
  );
};

export default Trends;
