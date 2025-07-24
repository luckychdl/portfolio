import type { Metadata } from "next";
import "./globals.css";
import Nav from "./_components/nav";
import Header from "./_components/header";
import ThemeProvider from "./_components/themeProvider";
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
    <html lang="ko" suppressHydrationWarning className="dark">
      <ThemeProvider>
        <body className="bg-white dark:bg-black transition-colors duration-300 p-8 w-screen h-screen flex flex-col">
          {/* <body> */}
          <Header />
          {children}
          <Nav />
        </body>
      </ThemeProvider>
    </html>
  );
}
