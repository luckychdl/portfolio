"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  VscFiles,
  VscGithubInverted,
  VscMail,
  VscSearch,
  VscSourceControl,
} from "react-icons/vsc";

export default function ActivityBar({
  sidebarOpen,
  onToggleSidebar,
  onOpenPalette,
}: {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  onOpenPalette: () => void;
}) {
  const pathname = usePathname();

  const itemClass = (active: boolean) =>
    `relative grid h-12 w-12 place-items-center text-xl transition-colors ${
      active ? "text-fg" : "text-faint hover:text-fg"
    }`;

  const marker = (
    <span className="absolute top-1/2 left-0 h-6 w-0.5 -translate-y-1/2 bg-accent" />
  );

  return (
    <nav className="hidden w-12 shrink-0 flex-col items-center border-r border-line bg-sidebar py-1 lg:flex">
      <button
        type="button"
        onClick={onToggleSidebar}
        className={itemClass(sidebarOpen)}
        aria-label="탐색기 토글"
        title="Explorer"
      >
        {sidebarOpen && marker}
        <VscFiles />
      </button>

      <button
        type="button"
        onClick={onOpenPalette}
        className={itemClass(false)}
        aria-label="파일 검색"
        title="Go to file (⌘K)"
      >
        <VscSearch />
      </button>

      <Link
        href="/about"
        className={itemClass(pathname === "/about")}
        aria-label="career"
        title="career/timeline.ts"
      >
        {pathname === "/about" && marker}
        <VscSourceControl />
      </Link>

      <div className="mt-auto flex flex-col items-center">
        <Link
          href="/contact"
          className={itemClass(pathname === "/contact")}
          aria-label="contact"
          title="contact.json"
        >
          {pathname === "/contact" && marker}
          <VscMail />
        </Link>
        <a
          href="https://github.com/luckychdl"
          target="_blank"
          rel="noreferrer"
          className={itemClass(false)}
          aria-label="GitHub"
          title="github.com/luckychdl"
        >
          <VscGithubInverted />
        </a>
      </div>
    </nav>
  );
}
