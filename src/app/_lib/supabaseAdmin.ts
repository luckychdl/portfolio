import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

/** 환경변수가 채워지기 전에도 사이트가 죽지 않도록 설정 여부를 노출한다. */
export const analyticsConfigured = Boolean(url && serviceKey);

let client: SupabaseClient | null = null;

/**
 * service_role 키를 쓰는 서버 전용 클라이언트.
 * RLS 를 우회하므로 절대 클라이언트 컴포넌트에서 import 하지 말 것.
 */
export function getSupabaseAdmin(): SupabaseClient | null {
  if (!url || !serviceKey) return null;
  if (!client) {
    client = createClient(url, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return client;
}
