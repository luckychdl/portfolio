"use client";
import { ProjectMedia } from "../_data/projectImages";
import Image from "next/image";
import { useState } from "react";
import LottieMedia from "./lottieMedia";

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
    return <LottieMedia isMobile={isMobile} />;
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
          sizes="(max-width: 768px) 100vw, 90vw"
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
        loading="lazy"
        quality={70}
        sizes="(max-width: 640px) 92vw, (max-width: 1280px) 45vw, 30vw"
        className={`object-cover object-top transition-all duration-700 ${
          loading ? "scale-105 opacity-0" : "scale-100 opacity-100"
        }`}
        onLoad={() => setLoading(false)}
      />
    </>
  );
}
