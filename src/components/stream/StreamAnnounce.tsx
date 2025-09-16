import React from "react";
import Image from "next/image";
const StreamAnnounce = () => {
  return (
    <div className="absolute top-14 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-y-6 rotate-[-4deg]">
      <div className="flex items-center">
        {/* Logo */}
        <div className="relative w-3/7 aspect-square ">
          <Image
            src={"/stream_section/twitch_logo.svg"}
            alt="Twitch Logo"
            fill
            className="object-cover"
          />
        </div>
        {/* Text */}
        <div className=" flex flex-col pl-6 border-l-1 border-theme-white/50">
          <h1
            style={{ fontFamily: "var(--font-saira-condensed)" }}
            className="text-6xl font-light "
          >
            HER HAFTA{" "}
            <span className="text-6xl font-bold text-primary ">
              CANLIDAYIZ!
            </span>
          </h1>
          <p className="text-base font-bold">Bizi Takip Edin!</p>
        </div>
      </div>
      {/* Buttons */}
      <div className="w-[300px] h-[66px] flex items-center border justify-between  border-white/50 p-3.5 rounded-2xl">
        <div className="py-2.5 px-3.5 flex hover:cursor-pointer items-center gap-x-2 rounded-md bg-twitch-purple">
          <Image
            src={"/icons/heart.svg"}
            alt="Twitch Icon"
            width={16}
            height={16}
          />
          <p>Takip Et</p>
        </div>
        <div className="py-2.5 px-3.5 flex items-center hover:cursor-pointer gap-x-2 rounded-md bg-theme-light-black">
          <Image
            src={"/icons/star.svg"}
            alt="Twitch Icon"
            width={16}
            height={16}
          />

          <p>Abone Ol</p>

          <Image
            src={"/icons/down_arrow.svg"}
            alt="Twitch Icon"
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};

export default StreamAnnounce;
