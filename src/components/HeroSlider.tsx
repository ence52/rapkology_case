import React from "react";

import Image from "next/image";
import Link from "next/link";
export type HeroSliderProps = {
  title: string;
  description: string;
  photoUrl: string;
  textColor: string;
};
const HeroSlider = ({
  title,
  description,
  photoUrl,
  textColor,
}: HeroSliderProps) => {
  return (
    <div
      className={`h-full w-full  flex flex-col md:flex-row items-center md:justify-end md:pr-[10%] `}
    >
      <div
        className={`md:w-1/3 w-1/2 pt-32 md:pt-0 text-center  flex flex-col gap-y-6 ${textColor}`}
      >
        <h1 className="w-full  md:text-6xl text-4xl font-semibold uppercase font-saira-condensed tracking-[-0.02em] leading-[1.1]">
          {title}
        </h1>
        <p className="md:text-base  ">{description}</p>
        <Link
          href={"/blog"}
          className={`clip-button z-30 text-center flex items-center justify-center text-black font-bold text-base w-[186px] h-[48px] bg-primary`}
        >
          <span>{"Devamını Gör"}</span>
        </Link>
      </div>
      <Image
        src={photoUrl}
        alt={title}
        layout="fill"
        className="object-cover -z-10"
      />
    </div>
  );
};

export default HeroSlider;
