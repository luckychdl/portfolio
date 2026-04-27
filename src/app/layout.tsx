import type { Metadata } from "next";
import "./globals.css";
import Nav from "./_widgets/layout/ui/nav";
import ThemeProvider from "./_components/themeProvider";
import Header from "./_widgets/layout/ui/header";

export const metadata: Metadata = {
  title: "portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className="dark w-[100dvw] h-[100dvh]"
    >
      <ThemeProvider>
        <body className="bg-white dark:bg-black transition-colors duration-300  w-[100dvw] h-[100dvh] flex flex-col">
          <Header />
          {/* <TransitionWrapper> */}
          <div className="w-[100dvw] h-[calc(100dvh-60px-68px)] lg:h-[calc(100dvh-60px-76px)]">
            {children}
          </div>
          {/* </TransitionWrapper> */}
          <Nav />
        </body>
      </ThemeProvider>
    </html>
  );
}
