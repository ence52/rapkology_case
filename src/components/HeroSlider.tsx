import React from "react";
import ClippedButton from "./ClippedButton";

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
      className={`h-full w-full  bg-cover bg-center flex items-center justify-end pr-[10%] bg-[url('/${photoUrl}')]`}
    >
      <div className={`w-1/3  flex flex-col gap-y-6 ${textColor}`}>
        <h1 className="w-full  text-6xl font-semibold uppercase font-saira-condensed tracking-[-0.02em] leading-[1.1]">
          {title}
        </h1>
        <p className="text-base">{description}</p>
        <ClippedButton label="Devamını Gör" link="#" color="bg-primary" />
      </div>
    </div>
  );
};

export default HeroSlider;
