import Link from "next/link";
import React from "react";

type ClippedButtonProps = {
  label: string;
  link: string;
  color: string;
};
const ClippedButton = ({ label, link, color }: ClippedButtonProps) => {
  return (
    <Link
      href={link}
      className={`clip-button text-center flex items-center justify-center text-black font-bold text-base w-[186px] h-[48px] ${color}`}
    >
      <span>{label}</span>
    </Link>
  );
};

export default ClippedButton;
