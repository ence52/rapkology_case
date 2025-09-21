import navbarLinks from "@/data/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { HiMenuAlt4 } from "react-icons/hi";
const Header = () => {
  return (
    <header className="h-20 z-100 w-full fixed top-0 left-0 flex justify-center border-b border-theme-black/90 backdrop-blur-xs">
      <div className="w-full max-w-[1440px] md:px-20 px-4 flex  items-center justify-between">
        {/* Logo */}
        <Link href="/" className="h-full w-60 relative ">
          <Image src="/logo.svg" alt="logo" fill className="object-contain" />
        </Link>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-primary">
          <HiMenuAlt4 className="w-8 h-8 " />
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
    </header>
  );
};

export default Header;
