"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import TitleBar from "./titleBar";
import ActivityBar from "./activityBar";
import Explorer from "./explorer";
import TabBar from "./tabBar";
import StatusBar from "./statusBar";
import CommandPalette from "./commandPalette";

/** Id of the scrolling editor pane — pages scroll this, not the window. */
export const EDITOR_SCROLL_ID = "editor-scroll";

export default function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  const openPalette = useCallback(() => setPaletteOpen(true), []);
  const closePalette = useCallback(() => setPaletteOpen(false), []);

  // ⌘K / Ctrl+K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // 라우트가 바뀌면 에디터 스크롤을 맨 위로 되돌린다
  useEffect(() => {
    document.getElementById(EDITOR_SCROLL_ID)?.scrollTo({ top: 0 });
    setDrawerOpen(false);
  }, [pathname]);

  // 관리자 화면은 탐색기/탭에 노출되지 않는 별도 화면이라 IDE 크롬을 씌우지 않는다
  if (pathname.startsWith("/admin")) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-editor">
      <TitleBar
        onToggleSidebar={() => setDrawerOpen((prev) => !prev)}
        onOpenPalette={openPalette}
      />

      <div className="flex min-h-0 flex-1">
        <ActivityBar
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
          onOpenPalette={openPalette}
        />

        {/* desktop sidebar */}
        {sidebarOpen && (
          <aside className="hidden w-56 shrink-0 border-r border-line lg:block xl:w-64">
            <Explorer onNavigate={() => {}} />
          </aside>
        )}

        {/* mobile drawer */}
        {drawerOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setDrawerOpen(false)}
            />
            <aside className="absolute inset-y-0 left-0 w-64 border-r border-line shadow-[var(--shadow-lg)]">
              <Explorer onNavigate={() => setDrawerOpen(false)} />
            </aside>
          </div>
        )}

        <section className="flex min-w-0 flex-1 flex-col">
          <TabBar />
          <div
            id={EDITOR_SCROLL_ID}
            className="min-h-0 flex-1 overflow-y-auto bg-editor"
          >
            {children}
          </div>
        </section>
      </div>

      <StatusBar />
      <CommandPalette open={paletteOpen} onClose={closePalette} />
    </div>
  );
}
