"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { VscClose } from "react-icons/vsc";
import { fileForPath, openTabsForPath } from "@/app/_data/workspace";
import FileIcon from "./fileIcon";

export default function TabBar() {
  const pathname = usePathname();
  const tabs = openTabsForPath(pathname);
  const active = fileForPath(pathname);

  return (
    <div className="scrollbar-hide flex h-9 shrink-0 items-stretch overflow-x-auto border-b border-line bg-sidebar">
      {tabs.map((file) => {
        const isActive = file.href === active.href;
        return (
          <Link
            key={file.id}
            href={file.href}
            className={`group relative flex shrink-0 items-center gap-2 border-r border-line px-3 font-mono text-[12.5px] transition-colors ${
              isActive
                ? "bg-editor text-fg"
                : "bg-sidebar text-faint hover:text-muted"
            }`}
          >
            {isActive && (
              <span className="absolute inset-x-0 top-0 h-[2px] bg-accent" />
            )}
            <FileIcon kind={file.kind} className="text-[13px]" />
            <span className="whitespace-nowrap">{file.name}</span>
            <VscClose
              className={`text-[13px] transition-opacity ${
                isActive ? "opacity-40" : "opacity-0 group-hover:opacity-40"
              }`}
            />
          </Link>
        );
      })}
      <div className="flex-1 border-b border-line" />
    </div>
  );
}
