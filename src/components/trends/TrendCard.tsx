import React from "react";
import Image from "next/image";
export type trendCardProps = {
  writerName: string;
  profilePicUrl: string;
  description: string;
  link: string;
};

const TrendCard = ({ props }: { props: trendCardProps }) => {
  return (
    <div className="w-full h-full py-2 flex flex-col justify-between md:pl-12 ">
      <div className="flex items-center gap-x-4">
        <div className="h-8 relative aspect-square rounded-[10px]">
          <Image
            src={`${props.profilePicUrl}`}
            alt={props.writerName}
            fill
            className="rounded-[10px] object-contain"
          />
        </div>
        <h4 className="text-base">{props.writerName}</h4>
      </div>
      <p className="font-saira-condensed font-bold md:text-2xl text-xl uppercase md:py-0 py-2">
        {props.description}
      </p>
      <button className="text-start border-b border-b-transparent hover:text-primary hover:border-b-primary/60 py-4 border-t hover:cursor-pointer border-t-theme-lighter-black">
        Daha Fazla Oku
      </button>
    </div>
  );
};

export default TrendCard;
