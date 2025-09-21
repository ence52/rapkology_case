import Explore from "@/components/explore/Explore";
import Favorites from "@/components/favorites/Favorites";
import Hero from "@/components/Hero";
import StreamAd from "@/components/stream/StreamAd";
import Trends from "@/components/trends/Trends";

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
