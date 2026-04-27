import { HiOutlineClipboardList } from "react-icons/hi";
export default function ProjectsHeader() {
  return (
    <div className="flex-row items-center justify-start gap-x-2 hidden lg:flex">
      <HiOutlineClipboardList className="w-12 h-12 text-black dark:text-amber-100" />
      <p className="text-black dark:text-amber-100 text-4xl ">PROJECTS</p>
    </div>
  );
}
