import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="fixed bg-white flex items-center justify-between w-full border-b z-20">
        <div className="flex flex-row justify-between items-center h-16 px-4 w-full max-w-[1280px] mx-auto">
          <Link href="/" className="flex flex-row items-center">
            <Image
              src="/logo.svg"
              alt="logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <span className="text-xl font-bold">스쿨메이트</span>
          </Link>
          <Link
            href="/"
            className="flex flex-row items-center border px-2 py-1 rounded-md"
          >
            <span className="text-lg font-bold">앱 다운로드</span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
