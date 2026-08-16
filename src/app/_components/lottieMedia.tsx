"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// lottie-react is only pulled in when a Lottie tile actually renders.
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

/**
 * The animation JSON files live in /public and weigh ~11MB each, so they are
 * fetched at runtime — and only once the tile is near the viewport — instead of
 * being bundled into the page.
 */
export default function LottieMedia({ isMobile }: { isMobile: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "300px" });
  const [animationData, setAnimationData] = useState<unknown>(null);

  useEffect(() => {
    if (!inView || animationData) return;

    let cancelled = false;
    fetch(isMobile ? "/main_mobile.json" : "/main_video.json")
      .then((res) => res.json())
      .then((json) => {
        if (!cancelled) setAnimationData(json);
      })
      .catch(() => {
        /* 애니메이션 로드 실패 시 플레이스홀더 유지 */
      });

    return () => {
      cancelled = true;
    };
  }, [inView, isMobile, animationData]);

  return (
    <div ref={ref} className="flex h-full w-full items-center justify-center">
      {animationData ? (
        <Lottie animationData={animationData} loop />
      ) : (
        <span className="h-full w-full animate-pulse bg-surface-2" />
      )}
    </div>
  );
}
