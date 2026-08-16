import Link from "next/link";
import { LuArrowRight, LuMail } from "react-icons/lu";
import MultiTypingText from "./_widgets/layout/ui/typingText";
import { projectsData } from "./_data/projects";

export default function Home() {
  const companies = projectsData.map((p) => p.company);

  return (
    <section className="relative flex min-h-[calc(100dvh-13rem)] flex-col items-center justify-center gap-10 py-10 lg:min-h-[calc(100dvh-10rem)]">
      {/* halo behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[26rem] w-[min(46rem,90vw)] -translate-x-1/2 -translate-y-[60%] rounded-full bg-[radial-gradient(ellipse_at_center,var(--accent-glow),transparent_70%)] blur-2xl"
      />

      <div className="relative flex flex-col items-center gap-6 text-center">
        <MultiTypingText
          lines={["PORTFOLIO", "FRONT-END DEVELOPER", "SHIN DONG WON"]}
          lineClassNames={[
            "font-mono text-[11px] sm:text-xs tracking-[0.55em] text-faint uppercase",
            "gradient-text font-display text-[clamp(1.65rem,7.4vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.03em]",
            "font-display text-[clamp(1rem,2.6vw,1.75rem)] font-medium tracking-[0.3em] text-muted",
          ]}
          speed={70}
          lineDelay={450}
        />

        <div
          aria-hidden
          className="shimmer-line animate-shimmer h-px w-40 opacity-70"
        />
      </div>

      {/* CTAs */}
      <div className="relative flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/projects?type=LOCUSKOREA"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-soft to-accent-2 px-6 py-3 font-display text-sm font-semibold tracking-[0.08em] text-canvas-deep shadow-[0_10px_30px_-10px_var(--accent-glow)] transition-transform duration-300 hover:scale-[1.03]"
        >
          VIEW PROJECTS
          <LuArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <Link
          href="/contact"
          className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-display text-sm font-semibold tracking-[0.08em] text-fg transition-colors duration-300 hover:border-line-strong"
        >
          <LuMail className="text-accent" />
          CONTACT
        </Link>
      </div>

      {/* company ticker */}
      <div className="relative w-full max-w-3xl overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="animate-marquee flex w-max gap-10 py-2">
          {[...companies, ...companies].map((company, i) => (
            <span
              key={`${company}_${i}`}
              className="font-display text-sm font-medium tracking-[0.25em] whitespace-nowrap text-muted uppercase"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
