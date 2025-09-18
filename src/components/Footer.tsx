import React from "react";
import Image from "next/image";
import navbarLinks from "@/data/navbar";
import { PiCopyrightThin } from "react-icons/pi";
import Link from "next/link";
const logos = [
  "/favorites_section/facebook.svg",
  "/favorites_section/twitter.svg",
  "/favorites_section/discord.svg",
  "/favorites_section/spotify.svg",
  "/favorites_section/youtube.svg",
];
const Footer = () => {
  return (
    <div className="w-full space-y-10 md:pb-0 pb-20  ">
      <div className="flex items-center gap-x-4">
        {logos.map((logo, i) => (
          <div className="w-8 aspect-square relative" key={i}>
            <Image key={logo} src={logo} fill alt={logo} />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-x-10">
        {navbarLinks.map((link, i) => (
          <Link
            href={"/"}
            key={i}
            className="text-white text-sm py-2 hover:text-primary duration-300"
          >
            {link}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-x-2">
        <PiCopyrightThin />
        <h4 className="text-theme-white/50 text-sm">Built by ERKAN INCE</h4>
      </div>
    </div>
  );
};

export default Footer;
