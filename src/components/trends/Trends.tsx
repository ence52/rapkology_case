import { writers } from "@/data/writers";
import React from "react";
import { IoIosTrendingUp } from "react-icons/io";
import TrendCard from "./TrendCard";
import ClippedButton from "../ClippedButton";
const Trends = () => {
  return (
    <section className="w-full h-[854px] p-20 flex items-center flex-col gap-y-10">
      <div className="flex items-center gap-x-5 self-start">
        <h2 className="text-6xl font-bold font-saira-condensed">TRENDLER</h2>
        <IoIosTrendingUp className="text-6xl text-primary" />
      </div>
      <div className="w-full h-full grid grid-cols-3 gap-4 grid-rows-2">
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
