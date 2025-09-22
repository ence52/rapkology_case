import mock_data from "@/data/mock_data";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import MoreContent from "@/components/more_content/MoreContent";
import Breadcrumbs from "@/components/BreadCrumbs";
import { LuEye } from "react-icons/lu";
import { Metadata } from "next";
import data from "@/data/mock_data";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = data.find((p) => p.attributes.slug === params.slug);

  if (!post) {
    return {
      title: "Page Not Found | Rapkology",
      description: "The content you are looking for could not be found.",
    };
  }

  return {
    title: post.attributes.seo.metaTitle,
    description: post.attributes.seo.metaDescription,
    alternates: {
      canonical: `/blog/${post.attributes.seo.canonicalURL}`,
    },
    openGraph: {
      title: post.attributes.seo.metaTitle,
      description: post.attributes.seo.metaDescription,
      url: `/blog/${post.attributes.seo.canonicalURL}`,
      images: [
        {
          url: post.attributes.img,
          alt: post.attributes.title,
        },
      ],
      type: "article",
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = mock_data.find((p) => p.attributes.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex flex-col gap-y-[30px] w-full">
      <Breadcrumbs />
      <div className="flex items-center gap-x-2">
        <LuEye />
        <p>12.052</p>
      </div>
      <h1 className="text-5xl uppercase font-bold font-saira-condensed">
        {post.attributes.title}
      </h1>
      <h2 className="text-2xl uppercase font-bold font-saira-condensed">
        {post.attributes.desc}
      </h2>
      <p className="text-base">{post.attributes.content}</p>
      <div className="relative aspect-video w-full">
        <Image
          src={post.attributes.img}
          alt={post.attributes.title}
          className="object-contain"
          fill
        />
      </div>
      <p className="md:text-base text-sm">{post.attributes.content}</p>
      <div className="flex items-center space-x-2.5">
        {post.attributes.tags.map((tag) => (
          <span
            key={tag}
            className="bg-theme-gray text-white text-sm p-2.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center space-x-[30px] md:py-0 pb-30">
        <div className="flex items-center space-x-2.5">
          <FaRegHeart className="text-white text-2xl" />
          <p className="text-base text-white">
            <span className="font-bold">14 Kişi</span> Beğendi
          </p>
        </div>
        <div className="flex items-center space-x-2.5">
          <HiOutlineChatBubbleOvalLeft className="text-white text-2xl" />
          <p className="text-base text-white">
            <span className="font-bold">14 Kişi</span> Yorum Yaptı
          </p>
        </div>
      </div>
      <MoreContent />
    </div>
  );
}
