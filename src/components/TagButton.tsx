import Link from "next/link";
import React from "react";

const TagButton = ({ tag, index }: { tag: string; index: number }) => {
  return (
    <Link
      href={"/blog/#explore"}
      className={`border cursor-pointer px-2 py-1 text-base overflow-clip 
       `}
    >
      {tag}
    </Link>
  );
};

export default TagButton;
