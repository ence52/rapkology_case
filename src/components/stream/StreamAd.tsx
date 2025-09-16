import React from "react";
import Image from "next/image";
import StreamAnnounce from "./StreamAnnounce";
const StreamAd = () => {
  return (
    <section className="w-full h-[642px]  relative bg-[url('/stream_section/group.png')] bg-cover ">
      <div className="w-full h-full flex justify-between px-[10%] pt-[6%] items-center">
        <div className="relative  h-[400px] aspect-square">
          <Image
            src={"/stream_section/stream_img_1.png"}
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="relative  h-[500px] aspect-[9/16]">
          <Image
            src={"/stream_section/stream_img_2.png"}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>
      <StreamAnnounce />
      <Image
        src={"/flipped_mountains.svg"}
        alt=""
        width={1440}
        height={217}
        className="object-cover absolute bottom-0 transform scale-x-[-1]"
      />
    </section>
  );
};

export default StreamAd;
