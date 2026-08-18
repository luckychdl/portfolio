import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/app/_lib/supabaseAdmin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const BOT = /bot|crawler|spider|crawling|preview|headless|lighthouse|pingdom|curl|wget/i;

/** 값이 비정상적으로 길거나 비어 있으면 잘라내거나 버린다. */
function clean(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, max);
}

export async function POST(request: Request) {
  const supabase = getSupabaseAdmin();
  // 환경변수가 아직 없으면 조용히 무시한다 (사이트는 그대로 동작).
  if (!supabase) return new NextResponse(null, { status: 204 });

  const userAgent = request.headers.get("user-agent") ?? "";
  if (!userAgent || BOT.test(userAgent)) {
    return new NextResponse(null, { status: 204 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new NextResponse(null, { status: 204 });
  }

  const payload = body as Record<string, unknown>;
  const path = clean(payload.path, 200);
  const visitorId = clean(payload.visitorId, 64);

  // 경로가 이상하거나 관리자 페이지면 집계하지 않는다.
  if (!path || !path.startsWith("/") || path.startsWith("/admin") || !visitorId) {
    return new NextResponse(null, { status: 204 });
  }

  await supabase.from("page_views").insert({
    path,
    visitor_id: visitorId,
    referrer: clean(payload.referrer, 300),
    device: payload.device === "mobile" ? "mobile" : "desktop",
  });

  return new NextResponse(null, { status: 204 });
}
