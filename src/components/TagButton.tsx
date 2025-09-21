import Link from "next/link";
import React from "react";

const TagButton = ({
  tag,
  index,
  selectedTag,
}: {
  tag: string;
  index: number;
  selectedTag: number;
}) => {
  return (
    <Link
      href={"/blog/#explore"}
      className={`border cursor-pointer px-2 py-1 text-base overflow-clip  ${
        selectedTag === index
          ? "text-theme-black bg-primary border-transparent"
          : " border-white text-white"
      }`}
    >
      {tag}
    </Link>
  );
};

export default TagButton;
