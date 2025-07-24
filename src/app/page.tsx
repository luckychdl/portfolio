"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof document != "undefined")
      console.log(document.documentElement.classList.contains("dark"), "dark");
  }, []);
  return (
    <div className="  w-full h-full flex-1 flex flex-col justify-center items-center">
      <div className="flex-1 flex flex-col justify-center items-center gap-8 ">
        <span className="text-4xl text-black dark:text-amber-100">
          PORTFOLIO
        </span>
        <span className="text-4xl text-black dark:text-amber-100">
          FRONT-END DEVELOPER
        </span>
        <span className="text-4xl text-black dark:text-amber-100">
          SHIN DONG WON
        </span>
      </div>
    </div>
  );
}
