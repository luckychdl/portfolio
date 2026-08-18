"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const VISITOR_KEY = "pf_visitor_id";

/** 브라우저마다 한 번 발급해 재방문을 같은 사람으로 묶는다. */
function getVisitorId(): string {
  try {
    const saved = localStorage.getItem(VISITOR_KEY);
    if (saved) return saved;

    const id = crypto.randomUUID();
    localStorage.setItem(VISITOR_KEY, id);
    return id;
  } catch {
    // 프라이빗 모드 등 localStorage 를 못 쓰면 세션 한정 임시 id
    return "anon-" + Math.random().toString(36).slice(2, 12);
  }
}

/**
 * 라우트가 바뀔 때마다 조회를 기록한다.
 * Shell 안이 아니라 layout 최상단에 두어 페이지 전환 애니메이션과 무관하게 동작한다.
 */
export default function VisitTracker() {
  const pathname = usePathname();
  const lastSent = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin")) return;
    // React StrictMode 의 이펙트 중복 실행 방지
    if (lastSent.current === pathname) return;
    lastSent.current = pathname;

    const body = JSON.stringify({
      path: pathname,
      visitorId: getVisitorId(),
      referrer: document.referrer || null,
      device: window.matchMedia("(max-width: 767px)").matches
        ? "mobile"
        : "desktop",
    });

    fetch("/api/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {
      // 집계 실패는 사용자 경험에 영향을 주지 않는다
    });
  }, [pathname]);

  return null;
}
