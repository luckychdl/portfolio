import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "pf_admin";

/** 로그인 유지 기간 */
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

const password = process.env.ADMIN_PASSWORD;

export const adminPasswordSet = Boolean(password && password.length > 0);

function sign(payload: string): string {
  return createHmac("sha256", password ?? "").update(payload).digest("hex");
}

/** `<만료 epoch>.<서명>` 형태의 토큰. 비밀번호 자체는 쿠키에 담기지 않는다. */
export function issueToken(): string {
  const expires = Math.floor(Date.now() / 1000) + MAX_AGE_SECONDS;
  return `${expires}.${sign(String(expires))}`;
}

export function verifyToken(token: string | undefined): boolean {
  if (!token || !adminPasswordSet) return false;

  const [expires, signature] = token.split(".");
  if (!expires || !signature) return false;
  if (Number(expires) * 1000 < Date.now()) return false;

  const expected = Buffer.from(sign(expires));
  const actual = Buffer.from(signature);
  if (expected.length !== actual.length) return false;

  return timingSafeEqual(expected, actual);
}

/** 입력한 비밀번호가 맞는지 — 길이 노출을 줄이려 해시끼리 비교한다. */
export function passwordMatches(input: unknown): boolean {
  if (!adminPasswordSet || typeof input !== "string") return false;

  const expected = createHmac("sha256", "pf").update(password!).digest();
  const actual = createHmac("sha256", "pf").update(input).digest();

  return timingSafeEqual(expected, actual);
}

export async function isAdminRequest(): Promise<boolean> {
  const store = await cookies();
  return verifyToken(store.get(ADMIN_COOKIE)?.value);
}

export const adminCookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: MAX_AGE_SECONDS,
};
