import { Favorite } from "@/data/favorites_data";
import Image from "next/image";
import React from "react";

const FavoritesCard = ({ index, fav }: { index: number; fav: Favorite }) => {
  return (
    <div className="w-full h-full select-none hover:cursor-pointer items-center justify-center flex relative overflow-hidden group">
      <div className="text-center space-y-5 right-10 absolute group-hover:opacity-0 ease-in-out duration-500">
        <p className="px-4 py-[5px] bg-theme-light-gray rounded-full  ">
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
        className="absolute top-1/2 left-0 h-2/3 aspect-square 
             -translate-x-1/2 -translate-y-1/2 -rotate-[10deg] flex items-center justify-center
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
    </div>
  );
};

export default FavoritesCard;
