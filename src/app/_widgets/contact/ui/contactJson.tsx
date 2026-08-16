"use client";

import { useState } from "react";
import Link from "next/link";
import { VscCheck, VscCopy, VscLinkExternal } from "react-icons/vsc";
import {
  CodeSurface,
  InlineComment,
  Line,
  Punc,
} from "@/app/_components/editorSurface";
import { contactChannels, profile } from "@/app/_data/profile";

export default function ContactJson() {
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
    <CodeSurface className="max-w-4xl pb-16">
      <Line>
        <InlineComment>{profile.tagline}</InlineComment>
      </Line>
      <Line>
        <Punc>{"{"}</Punc>
      </Line>

      <Line indent={1}>
        <span className="tok-prop w-[9rem] inline-block">&quot;name&quot;:</span>
        <span className="tok-str">&quot;{profile.name}&quot;</span>
        <Punc>,</Punc>
      </Line>

      {contactChannels.map((channel, index) => (
        <Line key={channel.key} indent={1} className="group">
          <span className="flex flex-wrap items-baseline">
            <span className="tok-prop w-[9rem] shrink-0">
              &quot;{channel.key}&quot;:
            </span>
            <Link
              href={channel.href}
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noreferrer" : undefined}
              className="tok-str underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current"
            >
              &quot;{channel.value}&quot;
            </Link>
            {index < contactChannels.length - 1 && <Punc>,</Punc>}

            <span className="ml-2 inline-flex translate-y-[2px] items-center gap-0.5 opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100">
              <button
                type="button"
                onClick={() => copy(channel.key, channel.value)}
                aria-label={`${channel.key} 복사`}
                className="rounded p-1 text-faint transition-colors hover:bg-surface-2 hover:text-fg"
              >
                {copied === channel.key ? (
                  <VscCheck className="text-emerald-500 dark:text-emerald-400" />
                ) : (
                  <VscCopy />
                )}
              </button>
              <Link
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noreferrer" : undefined}
                aria-label={`${channel.key} 열기`}
                className="rounded p-1 text-faint transition-colors hover:bg-surface-2 hover:text-fg"
              >
                <VscLinkExternal />
              </Link>
            </span>
          </span>
        </Line>
      ))}

      <Line>
        <Punc>{"}"}</Punc>
      </Line>
    </CodeSurface>
  );
}
