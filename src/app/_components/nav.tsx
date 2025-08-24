"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-row justify-center md:gap-x-40 sm:gap-x-20 gap-x-4 items-center w-full h-[72px] ">
      <Link href={`/about`}>
        <button
          className={`text-black dark:text-amber-100 ${
            pathname == "/about" ? "underline-current" : ""
          } underline-hover text-lg font-light sm:text-sm  lg:text-3xl `}
        >
          ABOUT
        </button>
      </Link>
      <Link href={`/skills`}>
        <button
          className={`text-black dark:text-amber-100 ${
            pathname == "/skills" ? "underline-current" : ""
          } underline-hover text-lg font-light sm:text-lg  lg:text-3xl`}
        >
          SKILLS
        </button>
      </Link>
      <Link href={`/projects`}>
        <button
          className={`text-black dark:text-amber-100 ${
            pathname == "/projects" ? "underline-current" : ""
          } underline-hover text-lg font-light sm:text-lg  lg:text-3xl`}
        >
          PROJECTS
        </button>
      </Link>
      <Link href={`/contact`}>
        <button
          className={`text-black dark:text-amber-100 ${
            pathname == "/contact" ? "underline-current" : ""
          } underline-hover text-lg font-light sm:text-lg  lg:text-3xl`}
        >
          CONTACT
        </button>
      </Link>
    </nav>
  );
}
