import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flex h-full min-h-[110px] items-center justify-center border-t border-[#D8D8D8] bg-white">
        <div className="flex flex-col items-center space-y-2 py-10 text-[#939393] lg:flex-row lg:space-x-6 lg:py-0 lg:space-y-0">
          <div className="flex flex-row">
            <Link href="/tos">이용약관</Link>
          </div>
          <div className="flex flex-row">
            <Link href="/privacy" className="font-semibold">
              개인정보처리방침
            </Link>
          </div>
          <div className="flex flex-row">
            <a href="mailto:admin@codest.kr?subject=[스쿨메이트] 웹 문의하기">
              문의하기
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
