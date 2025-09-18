import React from "react";
import MoreContentTitle from "./MoreContentTitle";
import data from "@/data/mock_data";
import Image from "next/image";
import Link from "next/link";
import MoreContentList from "./MoreContentList";
const MoreContent = () => {
  return (
    <div>
      <MoreContentTitle />
      <MoreContentList />
    </div>
  );
};

export default MoreContent;
