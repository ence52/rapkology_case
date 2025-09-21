"use client";
import navbarLinks from "@/data/navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={` w-full fixed top-0 flex-col md:flex-row left-0 flex justify-center border-b border-theme-black/90 transition-colors duration-1000 z-[100] 
        ${
          scrolled
            ? "bg-theme-black"
            : ` ${
                isMenuActive
                  ? `bg-theme-black`
                  : `bg-transparent backdrop-blur-xs`
              }`
        }
      `}
    >
      <div className="w-full max-w-[1440px] h-20 md:px-20 px-4 flex  items-center justify-between">
        {/* Logo */}
        <Link href="/" className="h-full w-60 relative ">
          <Image src="/logo.svg" alt="logo" fill className="object-contain" />
        </Link>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuActive(!isMenuActive)}
          className="md:hidden text-primary"
        >
          {isMenuActive ? (
            <IoCloseSharp className="w-8 h-8 " />
          ) : (
            <HiMenuAlt4 className="w-8 h-8 " />
          )}
        </button>
        {/* Nav */}
        <nav className="hidden md:flex gap-8 mr-52">
          {navbarLinks.map((link, i) => (
            <Link href="/" key={i} className="hover:text-primary duration-500">
              {link}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="md:flex hidden items-center gap-4">
          <IoSearch className="w-6 h-6 text-theme-white" />
          <Link
            href={"/"}
            className="px-4 py-2 bg-theme-white text-sm text-black font-bold hover:bg-primary duration-500 hover:rounded-md "
          >
            GİRİŞ YAP
          </Link>
        </div>
      </div>
      <div
        className={`bg-theme-black p-4 space-y-4  duration-1000 ${
          isMenuActive ? `` : `hidden`
        } `}
      >
        {navbarLinks.map((link, index) => (
          <h4 key={index} className="text-xl">
            {link}
          </h4>
        ))}
      </div>
    </header>
  );
};

export default Header;
