import type { Metadata } from "next";
import { Geist, Geist_Mono, Saira, Saira_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/next";
const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
});

const sairaCondensed = Saira_Condensed({
  variable: "--font-saira-condensed",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rapkology-case-ence.vercel.app"),
  title: "RAP Kology",
  description:
    "Türkiye'nin en güncel rap haberleri, müzik videoları ve röportaj platformu.",
  openGraph: {
    title: "RAP Kology - Türkçe Rap Dünyası",
    description:
      "En yeni Türkçe rap haberleri, röportajlar, trend parçalar ve daha fazlası RAP Kology'de.",
    url: "https://rapkology-case-ence.vercel.app",
    siteName: "RAP Kology",
    images: [
      {
        url: "/hero/hero_img_2.png",
        width: 800,
        height: 600,
        alt: "RAP Kology",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAP Kology",
    description: "Türkiye'nin en güncel rap haberleri ve müzik platformu.",
    images: ["/hero/hero_img_2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={` ${saira.variable} ${sairaCondensed.variable} antialiased `}
      >
        <Analytics />
        <Header />
        <div className="max-w-[1440px] mx-auto ">{children}</div>
      </body>
    </html>
  );
}
