import type { Metadata } from "next";
import { headers } from "next/headers";
import { VscGraph, VscRefresh, VscWarning } from "react-icons/vsc";
import { adminPasswordSet, isAdminRequest } from "@/app/_lib/adminSession";
import { analyticsConfigured } from "@/app/_lib/supabaseAdmin";
import { loadVisitStats } from "@/app/_lib/visitStats";
import LoginForm from "./_ui/loginForm";
import LogoutButton from "./_ui/logoutButton";
import StatsView from "./_ui/statsView";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "stats — portfolio",
  robots: { index: false, follow: false },
};

/** 환경변수가 빠졌거나 조회에 실패했을 때의 안내 화면 */
function Notice({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-editor px-6">
      <div className="w-full max-w-md rounded-lg border border-line bg-panel p-6">
        <div className="flex items-center gap-2 font-mono text-sm text-fg">
          <VscWarning className="text-accent" />
          {title}
        </div>
        <ul className="mt-3 space-y-1.5 font-mono text-xs leading-relaxed text-muted">
          {lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default async function AdminPage() {
  if (!adminPasswordSet) {
    return (
      <Notice
        title="설정이 필요합니다"
        lines={[
          "ADMIN_PASSWORD 환경변수가 비어 있습니다.",
          ".env.local 에 ADMIN_PASSWORD 를 넣고 서버를 다시 시작하세요.",
        ]}
      />
    );
  }

  if (!(await isAdminRequest())) {
    return <LoginForm />;
  }

  if (!analyticsConfigured) {
    return (
      <Notice
        title="Supabase 연결이 필요합니다"
        lines={[
          "SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY 가 비어 있습니다.",
          "supabase/schema.sql 을 실행한 뒤 두 값을 .env.local 에 넣어주세요.",
        ]}
      />
    );
  }

  const host = (await headers()).get("host")?.split(":")[0] ?? null;
  const selfHost = host?.replace(/^www\./, "") ?? null;

  let stats;
  try {
    stats = await loadVisitStats(selfHost);
  } catch (error) {
    return (
      <Notice
        title="통계를 불러오지 못했습니다"
        lines={[
          error instanceof Error ? error.message : "알 수 없는 오류",
          "supabase/schema.sql 이 실행되었는지 확인해주세요.",
        ]}
      />
    );
  }

  if (!stats) {
    return (
      <Notice
        title="Supabase 연결이 필요합니다"
        lines={["환경변수를 확인해주세요."]}
      />
    );
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-editor">
      <header className="sticky top-0 z-10 flex h-10 shrink-0 items-center gap-3 border-b border-line bg-titlebar px-3">
        <span className="flex items-center gap-2 font-mono text-xs text-fg">
          <VscGraph className="text-accent" />
          stats.json
        </span>
        <div className="ml-auto flex items-center gap-1">
          <a
            href="/admin"
            className="flex items-center gap-1.5 rounded px-2 py-1 font-mono text-xs text-faint transition-colors hover:bg-surface-2 hover:text-fg"
          >
            <VscRefresh />
            새로고침
          </a>
          <LogoutButton />
        </div>
      </header>

      <main className="min-h-0 flex-1 overflow-y-auto">
        <StatsView stats={stats} />
      </main>
    </div>
  );
}
