import Explore from "@/components/explore/Explore";
import Favorites from "@/components/favorites/Favorites";
import Hero from "@/components/Hero";
import StreamAd from "@/components/stream/StreamAd";
import Trends from "@/components/trends/Trends";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Rapkology | Turkish Rap News, Videos & Music",
  description:
    "Rapkology brings you the latest Turkish rap news, music videos, interviews, and trending tracks.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Rapkology – Turkish Rap News, Videos & Music",
    description:
      "Rapkology brings you the latest Turkish rap news, music videos, interviews, and trending tracks.",
    url: "/",
    type: "website",
  },
};
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
