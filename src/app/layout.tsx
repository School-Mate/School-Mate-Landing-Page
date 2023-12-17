import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import Header from "./_component/Header";
import "./globals.css";
import "github-markdown-css/github-markdown.css";

const nanumGothic = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "스쿨메이트",
  description: "같은 학교 친구들과 함께하는 커뮤니티",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="apple-itunes-app" content="app-id=6473076162" />
      </head>
      <body className={nanumGothic.className}>
        <Header />
        <main className="pt-[64px] mx-auto">{children}</main>
      </body>
    </html>
  );
}