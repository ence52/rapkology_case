import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Trends from "@/components/trends/Trends";
import TrendsGrid from "@/components/trends/TrendsGrid";
import TrendsTitle from "@/components/trends/TrendsTitle";
import Link from "next/link";
import React from "react";

const BlogPostLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="md:py-36  pt-36 md:grid md:grid-cols-5 gap-x-[8%] md:px-20 px-4">
      <div className="col-span-3 flex flex-col gap-y-10 items-center md:py-0 py-10">
        {children}
        <TrendsTitle />
        <TrendsGrid cols={2} rows={2} isVertical={false} />
      </div>
      <div className="col-span-2 flex flex-col gap-y-20">
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default BlogPostLayout;
