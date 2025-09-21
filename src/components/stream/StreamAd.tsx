import React from "react";
import Image from "next/image";
import StreamAnnounce from "./StreamAnnounce";
const StreamAd = () => {
  return (
    <section className="w-full md:h-[642px] h-[536px]  relative overflow-hidden">
      <StreamAnnounce />
      <div className="w-full h-full flex  justify-between md:px-[10%]  md:pt-[6%] pt-70 items-center">
        <Image
          src={"/stream_section/group.png"}
          alt=""
          fill
          className="object-cover"
        />
        <div className="relative md:h-[400px] h-[220px] aspect-square">
          <Image
            src={"/stream_section/stream_img_1.png"}
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="relative  md:h-[500px] h-[300px] aspect-[9/16]">
          <Image
            src={"/stream_section/stream_img_2.png"}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="w-full h-40 absolute z-20  -bottom-10 -left-10 scale-200 ">
        <Image src={"/mountains_2.svg"} alt="" fill className="object-cover" />
      </div>
    </section>
  );
};

export default StreamAd;
