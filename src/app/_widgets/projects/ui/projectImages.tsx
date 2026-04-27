"use client";
import Lottie from "lottie-react";
import animationData from "../../../../../public/main_video.json";
import animationDataMobile from "../../../../../public/main_mobile.json";
import useIsMobile from "@/app/_hooks/useMobile";
export default function ProjectImages() {
  const isMobile = useIsMobile();
  return (
    <>
      <div className="w-[200px] h-[200px]">
        <Lottie
          animationData={isMobile ? animationDataMobile : animationData}
          loop={true}
        />
      </div>
    </>
  );
}
