import Image from "next/image";
import React from "react";

const Favorites = () => {
  return (
    <section className="w-full h-[447px] px-20 flex ">
      <div className="w-2/5 h-full gap-y-20 flex flex-col ">
        {/* Left Side */}
        <div className="w-full h-1/4 bg-theme-white clip-title flex items-center gap-x-9 justify-center">
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
        <h2 className="text-6xl  flex items-center font-saira-condensed font-bold">
          AYIN <br /> FAVORİLERİ
        </h2>
      </div>
      {/* Right Side */}
      <div className="w-3/5 h-full bg-primary"></div>
    </section>
  );
};

export default Favorites;
