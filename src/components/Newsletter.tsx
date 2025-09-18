import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const Newsletter = () => {
  return (
    <div className="w-full flex flex-col gap-y-6 ">
      <h2 className="text-4xl font-bold font-saira-condensed">
        GELİŞMELERDEN İLK SEN HABERDAR OL!
      </h2>
      <div className=" w-full flex justify-between py-4 border-b-2 border-b-theme-lighter-black">
        <input
          placeholder="EMAIL"
          className="py-2 w-full placeholder:text-white placeholder:font-bold border-none outline-none focus:outline-none focus:border-none"
        />
        <button className="flex items-center cursor-pointer space-x-2 hover:space-x-4  font-bold text-primary ">
          <p>GÖNDER</p>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
