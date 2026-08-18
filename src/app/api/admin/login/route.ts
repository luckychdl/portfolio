import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  adminCookieOptions,
  adminPasswordSet,
  issueToken,
  passwordMatches,
} from "@/app/_lib/adminSession";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** 무차별 대입을 조금이라도 느리게 만드는 고정 지연 */
const DELAY_MS = 400;

export async function POST(request: Request) {
  if (!adminPasswordSet) {
    return NextResponse.json(
      { error: "ADMIN_PASSWORD 환경변수가 설정되지 않았습니다." },
      { status: 500 },
    );
  }

  let password: unknown;
  try {
    password = (await request.json())?.password;
  } catch {
    password = undefined;
  }

  await new Promise((resolve) => setTimeout(resolve, DELAY_MS));

  if (!passwordMatches(password)) {
    return NextResponse.json(
      { error: "비밀번호가 올바르지 않습니다." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, issueToken(), adminCookieOptions);
  return response;
}

/** 로그아웃 */
export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, "", { ...adminCookieOptions, maxAge: 0 });
  return response;
}
