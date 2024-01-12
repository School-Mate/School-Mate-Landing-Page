"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="w-full items-center justify-center flex mx-auto bg-white min-h-[90vh] relative">
        <div className="w-full items-center justify-center flex mx-auto flex-col px-10">
          <span className="lg:text-3xl text-2xl font-black break-keep text-center">
            <b className="text-primary-500">스쿨메이트 앱</b>을 다운로드
            받으세요.
          </span>
          <div className="flex flex-col mt-5 text-lg text-center font-bold break-keep text-[#7C7C7C]">
            <span className="lg:mt-0">
              앱 스토어, 플레이 스토어에서 스쿨메이트를 검색해보세요.
            </span>
          </div>

          <div className="flex lg:flex-row flex-col mt-10 lg:space-x-6">
            <Link
              href="https://apps.apple.com/us/app/%EC%8A%A4%EC%BF%A8%EB%A9%94%EC%9D%B4%ED%8A%B8/id6473076162"
              target="_blank"
              className="items-center justify-center flex"
            >
              <Image
                src="/logo/Appstore_Download.svg"
                alt="appstore"
                width={220}
                height={68}
              />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=kr.codest.schoolmateapp"
              className="items-center justify-center flex"
            >
              <Image
                src="/logo/Google_Download.svg"
                alt="googleplay"
                width={220}
                height={68}
              />
            </Link>
          </div>
        </div>

        {/* 아래로 내려서 더 알아보기 svg 이미지 그리고 tailwind 바운스 애니메이션 */}
        <div
          className="absolute bottom-10 left-0 right-0 mx-auto h-16 animate-bounce w-full"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight - 64,
              behavior: "smooth",
            });
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="none"
            stroke="#b8b8b8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="mx-auto w-12 h-12"
          >
            <polyline points="5 8 12 15 19 8"></polyline>
          </svg>
        </div>
      </section>
      <section className="w-full items-center justify-center flex lg:flex-row flex-col mx-auto bg-primary-500 min-h-[50vh]">
        <div className="max-w-[1280px] flex lg:flex-row flex-col items-center justify-center w-full px-12 py-16">
          <div className="flex flex-col lg:w-1/3 mx-auto text-white">
            <span className="break-keep lg:text-3xl text-xl lg:text-start text-center font-bold lg:mr-1.5">
              학교별로 진행하는
            </span>
            <span className="break-keep lg:text-2xl text-xl text-center lg:text-start font-bold">
              다양한 대결 이벤트에 참여해보세요
            </span>
          </div>
          <div className="relative overflow-hidden lg:w-2/3 lg:mt-0 mt-9 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/fight.gif"
              alt="fight"
              className="object-cover lg:w-[22rem] lg:h-full w-full h-[23rem] z-0 lg:ml-auto rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="w-full items-center justify-center flex lg:flex-row-reverse flex-col mx-auto bg-[#f9f9f9] min-h-[50vh]">
        <div className="max-w-[1280px] flex lg:flex-row-reverse flex-col items-center justify-center w-full px-12 py-16">
          <div className="flex flex-col lg:w-1/3 mx-auto">
            <span className="break-keep lg:text-3xl text-xl lg:text-end text-center font-bold">
              에스크 기능으로
            </span>
            <span className="break-keep lg:text-2xl text-xl lg:text-end text-center font-bold">
              친구들과 익명 채팅을 해보세요
            </span>
          </div>
          <div className="relative overflow-hidden lg:w-2/3 lg:mt-0 mt-9 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/asked.png"
              alt="asked"
              className="object-cover lg:w-[24rem] lg:h-full w-full h-[18rem] z-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
