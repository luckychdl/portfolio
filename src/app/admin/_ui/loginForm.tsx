"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { VscKey, VscLock } from "react-icons/vsc";

export default function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (pending) return;

    setPending(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setError(data?.error ?? "로그인에 실패했습니다.");
        setPassword("");
        return;
      }

      router.refresh();
    } catch {
      setError("네트워크 오류가 발생했습니다.");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-editor px-6">
      <form
        onSubmit={submit}
        className="w-full max-w-sm rounded-lg border border-line bg-panel p-6 shadow-[var(--shadow-md)]"
      >
        <div className="flex items-center gap-2 font-mono text-sm text-fg">
          <VscLock className="text-accent" />
          stats.json
        </div>
        <p className="mt-1.5 font-mono text-xs text-faint">
          {"// 방문자 통계 — 비밀번호가 필요합니다"}
        </p>

        <label className="mt-5 block">
          <span className="sr-only">비밀번호</span>
          <div className="flex items-center gap-2 rounded border border-line bg-editor px-3 focus-within:border-accent">
            <VscKey className="shrink-0 text-faint" />
            <input
              type="password"
              autoFocus
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="password"
              className="w-full bg-transparent py-2.5 font-mono text-sm text-fg outline-none placeholder:text-faint"
            />
          </div>
        </label>

        {error && (
          <p className="mt-3 font-mono text-xs text-red-500 dark:text-red-400">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={pending || !password}
          className="mt-4 w-full rounded bg-accent py-2.5 font-mono text-sm font-medium text-editor transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {pending ? "확인 중…" : "열기"}
        </button>
      </form>
    </div>
  );
}
