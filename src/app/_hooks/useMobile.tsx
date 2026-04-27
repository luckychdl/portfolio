"use client";
import { useEffect, useState } from "react";

export default function useIsMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // 현재 뷰포트 너비로 모바일 여부 판단
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    checkIsMobile(); // 초기 실행
    window.addEventListener("resize", checkIsMobile); // 리사이즈 시 감지

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, [breakpoint]);

  return isMobile;
}
