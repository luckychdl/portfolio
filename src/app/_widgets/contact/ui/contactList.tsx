"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowUpRight, LuCheck, LuCopy, LuGithub, LuMail, LuPhone } from "react-icons/lu";

const channels = [
  {
    key: "email",
    label: "Email",
    value: "vivid4112@gmail.com",
    href: "mailto:vivid4112@gmail.com",
    icon: <LuMail />,
    external: false,
  },
  {
    key: "phone",
    label: "Phone",
    value: "010-4112-2653",
    href: "tel:01041122653",
    icon: <LuPhone />,
    external: false,
  },
  {
    key: "github",
    label: "GitHub",
    value: "github.com/luckychdl",
    href: "https://github.com/luckychdl",
    icon: <LuGithub />,
    external: true,
  },
];

export default function ContactList() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      // clipboard 미지원 환경에서는 조용히 무시
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {channels.map((channel, index) => (
        <motion.div
          key={channel.key}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="panel panel-hover group flex items-center gap-4 p-4 sm:p-5"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 text-lg text-accent transition-colors duration-300 group-hover:border-line-strong">
            {channel.icon}
          </span>

          <div className="flex min-w-0 flex-col">
            <span className="font-mono text-[10px] tracking-[0.24em] text-faint uppercase">
              {channel.label}
            </span>
            <Link
              href={channel.href}
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noreferrer" : undefined}
              className="link-underline w-fit truncate font-display text-base font-medium text-fg sm:text-lg"
            >
              {channel.value}
            </Link>
          </div>

          <div className="ml-auto flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => copy(channel.key, channel.value)}
              aria-label={`${channel.label} 복사`}
              className="grid h-9 w-9 place-items-center rounded-lg text-faint transition-colors duration-300 hover:bg-surface-2 hover:text-fg"
            >
              {copied === channel.key ? (
                <LuCheck className="text-emerald-400" />
              ) : (
                <LuCopy />
              )}
            </button>
            <Link
              href={channel.href}
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noreferrer" : undefined}
              aria-label={`${channel.label} 열기`}
              className="grid h-9 w-9 place-items-center rounded-lg text-faint transition-all duration-300 hover:bg-surface-2 hover:text-fg"
            >
              <LuArrowUpRight />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
