"use client";
import { ProjectMedia } from "../_data/projectImages";
import Lottie from "lottie-react";
import animationData from "../../../public/main_video.json";
import animationDataMobile from "../../../public/main_mobile.json";
import Image from "next/image";
import { useState } from "react";

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
      <div className="flex h-full w-full items-center justify-center">
        <Lottie
          animationData={isMobile ? animationDataMobile : animationData}
          loop
        />
      </div>
    );
  }

  if (variant === "modal") {
    return (
      <div className="relative">
        {loading && (
          <div className="absolute inset-0 animate-pulse rounded-xl bg-surface-2" />
        )}
        <Image
          src={item.src}
          alt=""
          width={item.src.includes("locuskorea") ? 1600 : 900}
          height={1200}
          className={`h-auto max-w-full rounded-xl object-contain shadow-[var(--shadow-lg)] transition-opacity duration-500 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setLoading(false)}
        />
      </div>
    );
  }

  return (
    <>
      {loading && (
        <span className="absolute inset-0 animate-pulse bg-surface-2" />
      )}
      <Image
        src={item.src}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={`object-contain transition-all duration-700 ${
          loading ? "scale-105 opacity-0" : "scale-100 opacity-100"
        }`}
        onLoad={() => setLoading(false)}
      />
    </>
  );
}
