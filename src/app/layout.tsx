import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import Header from "./_component/Header";
import "./globals.css";
import "github-markdown-css/github-markdown.css";
import GoogleAnalytics from "./GoogleAnalytics";
import Footer from "./_component/Footer";

const nanumGothic = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "스쿨메이트",
  description: "같은 학교 친구들과 함께하는 커뮤니티",
  openGraph: {
    images: [
      {
        url: "https://schoolmate.kr/ogimage.png",
        width: 1200,
        height: 630,
        alt: "스쿨메이트",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <GoogleAnalytics />
        <meta name="apple-itunes-app" content="app-id=6473076162" />
      </head>
      <body className={nanumGothic.className}>
        <Header />
        <main className="pt-[64px] mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
