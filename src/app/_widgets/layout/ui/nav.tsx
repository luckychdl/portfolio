"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LuFolderGit2, LuLayers, LuMail, LuUser } from "react-icons/lu";
import { navItems } from "@/app/_data/navigation";

const icons: Record<string, React.ReactNode> = {
  "/about": <LuUser />,
  "/skills": <LuLayers />,
  "/projects": <LuFolderGit2 />,
  "/contact": <LuMail />,
};

/** Floating bottom navigation — mobile & tablet only (desktop nav lives in the header). */
export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))] lg:hidden">
      <div className="glass flex items-center gap-1 rounded-2xl p-1.5 shadow-[var(--shadow-lg)]">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.match);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex min-w-[70px] flex-col items-center gap-1 rounded-xl px-3 py-2 transition-colors duration-300 sm:min-w-[86px] ${
                isActive ? "text-fg" : "text-faint"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="mobile-nav-pill"
                  className="absolute inset-0 -z-10 rounded-xl bg-surface-2 ring-1 ring-line"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="text-[17px]">{icons[item.match]}</span>
              <span className="font-display text-[10px] font-medium tracking-[0.12em]">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
