"use client";
import React, { useEffect } from "react";
import { IoIosTrendingUp } from "react-icons/io";
import TrendCard from "./TrendCard";

import mock_data from "@/data/mock_data";
import TrendsTitle from "./TrendsTitle";
import TrendsGrid from "./TrendsGrid";
import Link from "next/link";
import Tags from "../tags/Tags";

const Trends = () => {
  return (
    <section className="w-full md:h-[854px] md:p-20 px-5 md:py-10 py-20 flex items-center flex-col md:gap-y-10 gap-y-5">
      <TrendsTitle />
      <TrendsGrid cols={3} rows={2} isVertical={false} />
    </section>
  );
};

export default Trends;
