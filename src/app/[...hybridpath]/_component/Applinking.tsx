"use client";

import { useEffect } from "react";
import Image from "next/image";

interface ApplinkingProps {
  path: string;
}

const Applinking = ({ path }: ApplinkingProps) => {
  useEffect(() => {
    window.location.assign(`schoolmate://app.schoolmate.kr/view?url=${path}`);
  }, []);

  const AppLink = () => {
    window.open(`schoolmate://app.schoolmate.kr/view?url=${path}`);
  };

  const checkOS = () => {
    var userAgent =
      typeof window === "undefined" ? "" : navigator ? navigator.userAgent : "";

    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent)) {
      return "iOS";
    }

    return "unknown";
  };

  return (
    <>
      <main className="h-[90vh] w-[100vw] flex items-center justify-center relative flex-col">
        <div className="absolute flex items-center flex-col">
          <div className="h-[90px] w-[90px] bg-[#f0f0f0] justify-center items-center relative rounded-3xl overflow-hidden">
            <Image
              src="/images/logobg.svg"
              alt="Logo"
              objectFit="contain"
              layout="fill"
            />
          </div>

          <button
            className="justify-center font-thin items-center relative rounded-3xl overflow-hidden py-2 px-4 mt-5"
            onClick={AppLink}
          >
            앱이 열리지 않았나요?
          </button>
        </div>
        <div className="mt-auto mb-10 w-full items-center justify-center flex">
          {checkOS() === "Android" ? (
            <>
              <Playstore />
            </>
          ) : checkOS() === "iOS" ? (
            <>
              <Appstore />
            </>
          ) : (
            <>
              <div className="flex lg:flex-row flex-col mx-auto lg:space-x-2">
                <Playstore />
                <Appstore />
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

const Appstore = () => {
  return (
    <button
      onClick={() => {
        window.open(
          `https://apps.apple.com/us/app/%EC%8A%A4%EC%BF%A8%EB%A9%94%EC%9D%B4%ED%8A%B8/id6473076162`
        );
      }}
    >
      <Image
        src="/logo/Appstore_Download.svg"
        alt="appstore"
        width={220}
        height={68}
      />
    </button>
  );
};

const Playstore = () => {
  return (
    <button
      onClick={() => {
        window.open(
          `https://play.google.com/store/apps/details?id=kr.codest.schoolmateapp`
        );
      }}
    >
      <Image
        src="/logo/Google_Download.svg"
        alt="googleplay"
        width={220}
        height={68}
      />
    </button>
  );
};

export default Applinking;
