import React from "react";
import TrendCard from "./TrendCard";
import data from "@/data/mock_data";
import Link from "next/link";

const TrendsGrid = ({
  cols,
  rows,
  isVertical,
}: {
  cols: number;
  rows: number;
  isVertical: boolean;
}) => {
  return (
    <div
      className={`w-full h-full  grid ${isVertical ? "gap-10" : "gap-2.5"} ${
        cols === 2 ? "md:grid-cols-2" : ""
      }
    ${cols === 3 ? "md:grid-cols-3" : ""}
    ${cols === 4 ? "md:grid-cols-4" : ""}
    ${rows === 2 ? "md:grid-rows-2" : ""}
    ${rows === 3 ? "md:grid-rows-3" : ""}`}
    >
      {data.slice(0, cols * rows).map((post, index) => (
        <div key={index} className="w-full h-full flex ">
          <div
            className={`w-1/5 h-full select-none ${
              isVertical ? "hidden " : ""
            }`}
          >
            <h3 className="font-saira-condensed font-bold text-theme-lighter-black  text-6xl">{`0${
              index + 1
            }`}</h3>
          </div>
          <TrendCard post={post} isVertical={isVertical} />
        </div>
      ))}
      <div className="col-span-full flex justify-center ">
        <Link
          href={"#"}
          className={`clip-button  text-center hover:bg-primary duration-300 py-2 flex items-center justify-center text-black font-bold text-base w-[186px] h-[48px] bg-white`}
        >
          <span>{"Tümünü Gör"}</span>
        </Link>
      </div>
    </div>
  );
};

export default TrendsGrid;
