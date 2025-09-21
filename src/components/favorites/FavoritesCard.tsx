import { Favorite } from "@/data/favorites_data";
import Image from "next/image";
import React from "react";

const FavoritesCard = ({ index, fav }: { index: number; fav: Favorite }) => {
  return (
    <div className="w-full bg-theme-gray h-full select-none hover:cursor-pointer items-center justify-center flex flex-col md:flex-row relative overflow-hidden group">
      <div className="text-center space-y-5 md:right-10 absolute  group-hover:opacity-0 ease-in-out duration-500">
        <p className="px-4 py-[5px] bg-theme-light-gray rounded-full  md:mt-0 mt-30">
          TOP 10 <span className="font-bold">{`${index + 1}.Sıra`}</span>
        </p>
        <div className="text-xl leading-6">
          <p>
            {fav.singer}
            <span className="font-bold">
              <br />
              {fav.album}
            </span>
          </p>
        </div>
      </div>
      <div
        className="absolute md:top-1/2 md:left-0 top-10 md:h-2/3 h-1/3 aspect-square 
             md:-translate-x-1/2 md:-translate-y-[52%] -rotate-[10deg] flex items-center justify-center
             transition-all duration-500 ease-in-out 
             group-hover:left-1/2 group-hover:rotate-0"
      >
        <Image alt="50cent" src={fav.photoUrl} fill />
        <div className="h-1/4 aspect-square relative ">
          <Image
            alt="50cent"
            src={"/favorites_section/play_button.png"}
            fill
            className="absolute"
          />
        </div>
      </div>
      <div className="w-full h-6  absolute bottom-0 bg-theme-black "></div>
      <div className="w-full h-10  absolute bottom-0.5  scale-[-1] -rotate-6">
        <Image
          alt=""
          src={"/mountains_dark_yellow.svg"}
          className="scale-110"
          fill
        />
      </div>
      <div className="w-full h-10  absolute bottom-2  scale-[-1] -rotate-6">
        <Image
          alt=""
          src={"/mountains_yellow.svg"}
          fill
          className="scale-110"
        />
      </div>
    </div>
  );
};

export default FavoritesCard;
