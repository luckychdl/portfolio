import { getSupabaseAdmin } from "./supabaseAdmin";

/** 통계 기준 시간대 — 하루 경계를 한국 시간으로 맞춘다. */
const TIME_ZONE = "Asia/Seoul";
const WINDOW_DAYS = 30;
const CHART_DAYS = 14;
/** 한 번에 내려받을 최대 행 수 (그 이상은 잘라서 집계) */
const ROW_LIMIT = 20000;

const dayFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: TIME_ZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const timeFormatter = new Intl.DateTimeFormat("ko-KR", {
  timeZone: TIME_ZONE,
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export type Bucket = { views: number; visitors: number };
export type DayPoint = { date: string; label: string } & Bucket;
export type Ranked = { key: string; views: number };

export type VisitStats = {
  totalViews: number;
  totalVisitors: number;
  today: Bucket;
  last7: Bucket;
  last30: Bucket;
  daily: DayPoint[];
  paths: Ranked[];
  referrers: Ranked[];
  devices: { mobile: number; desktop: number };
  recent: { path: string; at: string; device: string }[];
  truncated: boolean;
};

type Row = {
  path: string;
  visitor_id: string;
  referrer: string | null;
  device: string | null;
  visited_at: string;
};

function dayKey(date: Date): string {
  return dayFormatter.format(date);
}

/** 오늘부터 거꾸로 `count` 일치의 날짜 키를 오래된 순으로 만든다. */
function recentDayKeys(count: number): string[] {
  const keys: string[] = [];
  const now = Date.now();
  for (let i = count - 1; i >= 0; i -= 1) {
    keys.push(dayKey(new Date(now - i * 86_400_000)));
  }
  return keys;
}

function bucketOf(rows: Row[]): Bucket {
  return {
    views: rows.length,
    visitors: new Set(rows.map((row) => row.visitor_id)).size,
  };
}

function rank(counts: Map<string, number>, limit: number): Ranked[] {
  return [...counts.entries()]
    .map(([key, views]) => ({ key, views }))
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

/** 유입 경로를 호스트 단위로 줄이고, 내 사이트에서 온 이동은 제외한다. */
function referrerLabel(referrer: string | null, selfHost: string | null): string | null {
  if (!referrer) return "direct";
  try {
    const host = new URL(referrer).hostname.replace(/^www\./, "");
    if (!host || host === selfHost) return null;
    return host;
  } catch {
    return "unknown";
  }
}

export async function loadVisitStats(selfHost: string | null): Promise<VisitStats | null> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return null;

  const since = new Date(Date.now() - WINDOW_DAYS * 86_400_000).toISOString();

  const [countResult, uniqueResult, rowsResult] = await Promise.all([
    supabase.from("page_views").select("*", { count: "exact", head: true }),
    supabase.rpc("total_unique_visitors"),
    supabase
      .from("page_views")
      .select("path, visitor_id, referrer, device, visited_at")
      .gte("visited_at", since)
      .order("visited_at", { ascending: false })
      .limit(ROW_LIMIT),
  ]);

  if (rowsResult.error) throw new Error(rowsResult.error.message);

  const rows = (rowsResult.data ?? []) as Row[];
  const todayKey = dayKey(new Date());
  const last7Keys = new Set(recentDayKeys(7));

  const byDay = new Map<string, Row[]>();
  const pathCounts = new Map<string, number>();
  const referrerCounts = new Map<string, number>();
  const devices = { mobile: 0, desktop: 0 };

  for (const row of rows) {
    const key = dayKey(new Date(row.visited_at));
    const bucket = byDay.get(key);
    if (bucket) bucket.push(row);
    else byDay.set(key, [row]);

    pathCounts.set(row.path, (pathCounts.get(row.path) ?? 0) + 1);

    const source = referrerLabel(row.referrer, selfHost);
    if (source) {
      referrerCounts.set(source, (referrerCounts.get(source) ?? 0) + 1);
    }

    if (row.device === "mobile") devices.mobile += 1;
    else devices.desktop += 1;
  }

  const daily: DayPoint[] = recentDayKeys(CHART_DAYS).map((date) => ({
    date,
    label: date.slice(5).replace("-", "/"),
    ...bucketOf(byDay.get(date) ?? []),
  }));

  return {
    totalViews: countResult.count ?? rows.length,
    // RPC 가 아직 없으면 최근 30일 기준으로라도 보여준다
    totalVisitors:
      typeof uniqueResult.data === "number"
        ? uniqueResult.data
        : new Set(rows.map((row) => row.visitor_id)).size,
    today: bucketOf(byDay.get(todayKey) ?? []),
    last7: bucketOf(rows.filter((row) => last7Keys.has(dayKey(new Date(row.visited_at))))),
    last30: bucketOf(rows),
    daily,
    paths: rank(pathCounts, 12),
    referrers: rank(referrerCounts, 8),
    devices,
    recent: rows.slice(0, 12).map((row) => ({
      path: row.path,
      at: timeFormatter.format(new Date(row.visited_at)),
      device: row.device ?? "desktop",
    })),
    truncated: rows.length >= ROW_LIMIT,
  };
}
