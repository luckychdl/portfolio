"use client";
import { ProjectMedia } from "../_data/projectImages";
import Lottie from "lottie-react";
import animationData from "../../../public/main_video.json";
import animationDataMobile from "../../../public/main_mobile.json";
import Image from "next/image";
import { useState } from "react";
import { Spinner } from "./spinner";
export function RenderMedia({
  item,
  isMobile,
  variant,
}: {
  item: ProjectMedia;
  isMobile: boolean;
  variant?: "card" | "modal";
}) {
  const [loading, setLoading] = useState(true);

  if (item.type === "lottie") {
    return (
      <Lottie
        animationData={isMobile ? animationDataMobile : animationData}
        loop
      />
    );
  }
  if (variant === "modal") {
    return (
      <div>
        {/* <div className="absolute inset-0 animate-pulse bg-gray-300" /> */}
        {loading && <Spinner />}
        <Image
          src={item.src}
          alt=""
          width={item.src.includes("locuskorea") ? 1200 : 600}
          height={1000}
          className={`max-w-full h-auto object-contain ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    );
  }
  return <Image src={item.src} alt="" fill className="object-cover" />;
}
