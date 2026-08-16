"use client";

import { usePathname } from "next/navigation";
import { VscLayoutSidebarLeft, VscSearch } from "react-icons/vsc";
import { fileForPath } from "@/app/_data/workspace";
import DarkmodeToggle from "@/app/_widgets/layout/ui/darkmodeToggle";

export default function TitleBar({
  onToggleSidebar,
  onOpenPalette,
}: {
  onToggleSidebar: () => void;
  onOpenPalette: () => void;
}) {
  const pathname = usePathname();
  const file = fileForPath(pathname);

  return (
    <header className="flex h-9 shrink-0 items-center gap-2 border-b border-line bg-titlebar px-3 select-none">
      {/* traffic lights */}
      <div className="flex items-center gap-2" aria-hidden>
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      </div>

      <button
        type="button"
        onClick={onToggleSidebar}
        aria-label="탐색기 열기"
        className="ml-2 rounded p-1 text-faint transition-colors hover:bg-surface-2 hover:text-fg lg:hidden"
      >
        <VscLayoutSidebarLeft className="text-base" />
      </button>

      {/* centred search bar → command palette */}
      <button
        type="button"
        onClick={onOpenPalette}
        className="mx-auto flex h-6 w-full max-w-md items-center gap-2 rounded border border-line bg-surface px-2 font-mono text-[11px] text-faint transition-colors hover:border-line-strong hover:text-muted"
      >
        <VscSearch className="shrink-0" />
        <span className="truncate">
          shin-dong-won <span className="text-gutter">—</span> {file.name}
        </span>
        <kbd className="ml-auto hidden shrink-0 rounded border border-line px-1 text-[10px] sm:block">
          ⌘K
        </kbd>
      </button>

      <DarkmodeToggle />
    </header>
  );
}
