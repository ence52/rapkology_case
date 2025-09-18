import React from "react";
import { IoIosTrendingUp } from "react-icons/io";

const TrendsTitle = () => {
  return (
    <div className="flex items-center md:gap-x-5  md:self-start select-none">
      <h2 className="md:text-6xl text-4xl font-bold font-saira-condensed">
        TRENDLER
      </h2>
      <IoIosTrendingUp className="md:text-6xl text-4xl text-primary " />
    </div>
  );
};

export default TrendsTitle;
