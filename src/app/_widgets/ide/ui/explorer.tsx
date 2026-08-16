"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { VscChevronDown, VscChevronRight, VscClose } from "react-icons/vsc";
import { FileNode, folders, rootFiles } from "@/app/_data/workspace";
import FileIcon from "./fileIcon";

function FileRow({
  file,
  active,
  depth,
  onNavigate,
}: {
  file: FileNode;
  active: boolean;
  depth: number;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={file.href}
      onClick={onNavigate}
      style={{ paddingLeft: `${0.75 + depth * 0.9}rem` }}
      className={`flex items-center gap-2 py-[3px] pr-2 font-mono text-[12.5px] transition-colors ${
        active
          ? "bg-surface-2 text-fg"
          : "text-muted hover:bg-line-hl hover:text-fg"
      }`}
    >
      <FileIcon kind={file.kind} className="text-[13px]" />
      <span className="truncate">{file.name}</span>
      {active && (
        <span className="ml-auto h-1 w-1 shrink-0 rounded-full bg-accent" />
      )}
    </Link>
  );
}

export default function Explorer({ onNavigate }: { onNavigate: () => void }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const isActive = (file: FileNode) =>
    file.href === "/" ? pathname === "/" : pathname === file.href;

  return (
    <div className="flex h-full flex-col bg-sidebar">
      <div className="flex h-9 shrink-0 items-center justify-between px-3">
        <span className="font-mono text-[10.5px] tracking-[0.16em] text-faint uppercase">
          Explorer
        </span>
        <button
          type="button"
          onClick={onNavigate}
          aria-label="탐색기 닫기"
          className="rounded p-0.5 text-faint hover:bg-surface-2 hover:text-fg lg:hidden"
        >
          <VscClose />
        </button>
      </div>

      <div className="scrollbar-hide flex-1 overflow-y-auto pb-6">
        <div className="flex items-center gap-1 px-2 py-1 font-mono text-[11px] font-semibold tracking-wide text-fg">
          <VscChevronDown className="text-faint" />
          PORTFOLIO
        </div>

        {rootFiles
          .filter((file) => file.href === "/")
          .map((file) => (
            <FileRow
              key={file.id}
              file={file}
              active={isActive(file)}
              depth={1}
              onNavigate={onNavigate}
            />
          ))}

        {folders.map((folder) => {
          const open = !collapsed[folder.name];
          return (
            <div key={folder.name}>
              <button
                type="button"
                onClick={() =>
                  setCollapsed((prev) => ({
                    ...prev,
                    [folder.name]: !prev[folder.name],
                  }))
                }
                className="flex w-full items-center gap-1 py-[3px] pr-2 pl-3 font-mono text-[12.5px] text-muted transition-colors hover:bg-line-hl hover:text-fg"
              >
                {open ? (
                  <VscChevronDown className="text-faint" />
                ) : (
                  <VscChevronRight className="text-faint" />
                )}
                <span>{folder.name}</span>
                <span className="ml-auto text-[10px] text-gutter">
                  {folder.files.length}
                </span>
              </button>

              {open &&
                folder.files.map((file) => (
                  <FileRow
                    key={file.id}
                    file={file}
                    active={isActive(file)}
                    depth={2}
                    onNavigate={onNavigate}
                  />
                ))}
            </div>
          );
        })}

        {rootFiles
          .filter((file) => file.href !== "/")
          .map((file) => (
            <FileRow
              key={file.id}
              file={file}
              active={isActive(file)}
              depth={1}
              onNavigate={onNavigate}
            />
          ))}
      </div>
    </div>
  );
}
