import type { Metadata } from "next";
import { Inter, Noto_Sans_KR, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./_widgets/layout/ui/nav";
import ThemeProvider from "./_components/themeProvider";
import Header from "./_widgets/layout/ui/header";
import Backdrop from "./_components/backdrop";
import TransitionWrapper from "./_components/transitionWrapper";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-face",
  display: "swap",
});

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
  weight: ["400", "500"],
  variable: "--font-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SHIN DONG WON · Front-end Developer",
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
      className={`dark ${display.variable} ${inter.variable} ${notoKr.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <ThemeProvider>
        <body className="min-h-[100dvh] antialiased">
          <Backdrop />
          <Header />
          <main className="mx-auto w-full max-w-[1400px] px-5 pt-24 pb-32 sm:px-8 lg:pb-16">
            <TransitionWrapper>{children}</TransitionWrapper>
          </main>
          <Nav />
        </body>
      </ThemeProvider>
    </html>
  );
}
