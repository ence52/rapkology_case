import Explore from "@/components/explore/Explore";
import Favorites from "@/components/favorites/Favorites";
import Hero from "@/components/Hero";
import StreamAd from "@/components/stream/StreamAd";
import Trends from "@/components/trends/Trends";
import data from "@/data/mock_data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero />
      <StreamAd />
      <Trends />
      <Favorites />
      <Explore />
    </div>
  );
}
