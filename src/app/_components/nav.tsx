import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex flex-row justify-between items-center w-full h-[60px]">
      <Link href={`/about`}>
        <button className="text-black dark:text-amber-100 underline-hover text-lg font-light sm:text-lg  lg:text-3xl">
          ABOUT
        </button>
      </Link>
      <Link href={`/skills`}>
        <button className="text-black dark:text-amber-100 underline-hover text-lg font-light sm:text-lg  lg:text-3xl">
          SKILLS
        </button>
      </Link>
      <Link href={`/projects`}>
        <button className="text-black dark:text-amber-100 underline-hover text-lg font-light sm:text-lg  lg:text-3xl">
          PROJECTS
        </button>
      </Link>
      <Link href={`/contact`}>
        <button className="text-black dark:text-amber-100 underline-hover text-lg font-light sm:text-lg  lg:text-3xl">
          CONTACT
        </button>
      </Link>
    </nav>
  );
}
