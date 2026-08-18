"use client";

import { useRouter } from "next/navigation";
import { VscSignOut } from "react-icons/vsc";

export default function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={logout}
      className="flex items-center gap-1.5 rounded px-2 py-1 font-mono text-xs text-faint transition-colors hover:bg-surface-2 hover:text-fg"
    >
      <VscSignOut />
      로그아웃
    </button>
  );
}
