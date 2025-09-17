import Image from "next/image";
import React from "react";

const Favorites = () => {
  return (
    <section className="w-full md:h-[447px] md:px-20 px-4 md:flex  ">
      <div className="md:w-2/5 md:h-full md:gap-y-20 gap-y-10 flex flex-col  bg-blue-300">
        {/* Left Side */}
        <div
          className="w-full md:h-1/4 h-22
         bg-theme-white clip-title flex items-center gap-x-9 justify-center"
        >
          <div className="h-2/5 w-1/3 relative ">
            <Image
              src={"/favorites_section/youtube_logo.svg"}
              alt={"youtube"}
              fill
              className=" object-contain"
            />
          </div>
          <div className="h-2/5 w-1/3 relative ">
            <Image
              src={"/favorites_section/spotify_logo.svg"}
              alt={"spotify"}
              fill
              className=" object-contain"
            />
          </div>
        </div>
        <h2 className="md:text-6xl text-5xl md:pl-20 font-saira-condensed font-bold self-center text-center md:text-start md:self-start">
          AYIN <br /> FAVORİLERİ
        </h2>
      </div>
      {/* Right Side */}
      <div className="md:w-3/5 w-full h-full bg-primary"></div>
    </section>
  );
};

export default Favorites;
