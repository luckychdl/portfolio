import type { Metadata } from "next";
import { Inter, Noto_Sans_KR, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./_components/themeProvider";
import Shell from "./_widgets/ide/ui/shell";
import VisitTracker from "./_components/visitTracker";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-kr",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "shin-dong-won — portfolio",
  description:
    "프론트엔드 개발자 신동원의 포트폴리오 — 경력, 기술 스택, 프로젝트 아카이브",
};

/** Applies the stored theme before first paint so there is no flash. */
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(!t){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}document.documentElement.classList.toggle("dark",t==="dark");}catch(e){document.documentElement.classList.add("dark");}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`dark ${inter.variable} ${notoKr.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <ThemeProvider>
        <body className="antialiased">
          <VisitTracker />
          <Shell>{children}</Shell>
        </body>
      </ThemeProvider>
    </html>
  );
}
