"use client";
import TransitionWrapper from "../_components/transitionWrapper";
import { HiOutlineClipboardList } from "react-icons/hi";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Projects() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const getPositionClass = () => {
    switch (type) {
      case "locuskorea":
        return "top-0";
      case "trenshow":
        return "top-1/2 -translate-y-1/2";
      case "261house":
        return "bottom-0";
      default:
        return "top-0";
    }
  };

  return (
    <TransitionWrapper>
      <div className="flex-1 flex flex-col items-start justify-start w-full h-full">
        <div className="flex flex-col py-8 gap-y-4 relative w-full h-full">
          {/* Title */}
          <div className="flex flex-row items-center justify-start gap-x-2">
            <HiOutlineClipboardList className="w-12 h-12 text-black dark:text-amber-100" />
            <p className="text-black dark:text-amber-100 text-4xl">PROJECTS</p>
          </div>

          {/* Side Nav */}
          <div className="flex flex-col items-start justify-start absolute top-1/2 left-0 -translate-y-1/2 border-l-4 border-gray-200 pl-4">
            {/* Indicator bar */}
            {/* <motion.div
              layout
              className={`bg-black dark:bg-amber-100 w-1 absolute h-[48px] -left-1 transition-all duration-300 linear ${getPositionClass()}`}
            /> */}

            {/* Nav buttons */}
            {/* {["locuskorea", "trenshow", "261house"].map((key) => {
              const isActive = type === key;
              return (
                <Link
                  href={`/projects?type=${key}`}
                  key={`projects-${key}`}
                  replace
                >
                  <button key={key} className="h-12 flex items-center">
                    <motion.p
                      animate={{
                        color: isActive
                          ? "#000000" // light mode active
                          : "#9CA3AF", // light mode inactive (gray-400)
                        // dark mode 고려
                        ["--tw-text-opacity" as any]: 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`text-xl ${
                        type == key ? "text-black" : "text-gray-200"
                      } ${
                        type == key
                          ? "dark:text-amber-100"
                          : "dark:text-gray-500"
                      } uppercase`}
                    >
                      {key}
                    </motion.p>
                  </button>
                </Link>
              );
            })} */}
            {["locuskorea", "trenshow", "261house"].map((key) => {
              const isActive = type == key;
              return (
                <Link href={`/projects?type=${key}`} key={key} replace>
                  <button className="h-12 flex items-center relative">
                    {type === key && (
                      <motion.div
                        layoutId="indicator"
                        className="absolute -left-5 w-1 h-12 bg-black dark:bg-amber-100"
                      />
                    )}
                    <motion.p
                      animate={{
                        color: isActive
                          ? "text-gray-200 " // light mode active
                          : "text-gray-500 dark:text-amber-100 ", // light mode inactive (gray-400)
                        // dark mode 고려
                        ["--tw-text-opacity"]: 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`text-xl ${
                        type == key ? "text-black" : "text-gray-200"
                      } ${
                        type == key
                          ? "dark:text-amber-100"
                          : "dark:text-gray-500"
                      } uppercase`}
                    >
                      {key}
                    </motion.p>
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
        <div>{/* 페이지 내용 영역 */}</div>
      </div>
    </TransitionWrapper>
  );
}
