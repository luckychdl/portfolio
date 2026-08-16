"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navItems } from "@/app/_data/navigation";
import DarkmodeToggle from "./darkmodeToggle";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        <div className="glass mt-3 flex h-14 items-center justify-between rounded-2xl pr-2 pl-3 shadow-[var(--shadow-md)]">
          {/* brand */}
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label="홈으로"
          >
            <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-accent-soft to-accent-2 font-display text-[13px] font-bold tracking-tight text-canvas-deep shadow-[0_4px_18px_var(--accent-glow)] transition-transform duration-300 group-hover:scale-105">
              SDW
              <span className="absolute inset-0 translate-y-full bg-white/25 transition-transform duration-500 group-hover:translate-y-0" />
            </span>
            <span className="font-display text-[13px] font-semibold tracking-[0.14em] text-fg sm:text-sm sm:tracking-[0.16em]">
              SHIN DONG WON
            </span>
          </Link>

          {/* desktop nav */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.match);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-xl px-4 py-2 font-display text-[13px] font-medium tracking-[0.14em] transition-colors duration-300 ${
                    isActive ? "text-fg" : "text-faint hover:text-fg"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-xl bg-surface-2 ring-1 ring-line"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <span className="mr-1 hidden items-center gap-2 font-mono text-[11px] tracking-wider text-faint md:flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              FRONT-END DEVELOPER
            </span>
            <DarkmodeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
