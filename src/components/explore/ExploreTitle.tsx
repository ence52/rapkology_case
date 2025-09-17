import React from "react";
import { IoCompassOutline, IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoGrid } from "react-icons/io5";
const ExploreTitle = () => {
  return (
    <div className="w-full  flex justify-between">
      <div className="flex items-center gap-x-5 self-start">
        <h2 className="md:text-6xl text-4xl font-bold font-saira-condensed">
          KEŞFET
        </h2>
        <IoCompassOutline className="md:text-6xl text-4xl text-primary" />
      </div>
      <div className="flex items-center text-2xl space-x-4">
        <IoSearch />
        <RxHamburgerMenu />
        <IoGrid />
      </div>
    </div>
  );
};

export default ExploreTitle;
