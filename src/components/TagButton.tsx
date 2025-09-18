import React from "react";

const TagButton = ({
  tag,
  index,
  selectedTag,
  setSelectedTag,
}: {
  tag: string;
  index: number;
  selectedTag: number;
  setSelectedTag: (index: number) => void;
}) => {
  return (
    <button
      className={`border cursor-pointer px-2 py-1 text-base overflow-clip  ${
        selectedTag === index
          ? "text-theme-black bg-primary border-transparent"
          : " border-white text-white"
      }`}
      onClick={() => setSelectedTag(index)}
    >
      {tag}
    </button>
  );
};

export default TagButton;
