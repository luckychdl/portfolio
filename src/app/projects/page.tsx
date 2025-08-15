"use client";
import TransitionWrapper from "../_components/transitionWrapper";
import { HiOutlineClipboardList } from "react-icons/hi";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import Locus from "../_components/locus";
import Trenshow from "../_components/trenshow";
import House from "../_components/261house";

export default function Projects() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const router = useRouter();

  const locusRef = useRef<HTMLDivElement>(null);
  const trenshowRef = useRef<HTMLDivElement>(null);
  const houseRef = useRef<HTMLDivElement>(null);
  const [activeType, setActiveType] = useState<string>("locuskorea");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveType(id);
          }
        });
      },
      { threshold: 0.3 }
    );

    [locusRef, trenshowRef, houseRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);
  const scrollToSection = (key: string) => {
    setActiveType(key);
    switch (key) {
      case "locuskorea": {
        locusRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        break;
      }
      case "trenshow": {
        trenshowRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        break;
      }
      case "261house": {
        houseRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        break;
      }
      default: {
        break;
      }
    }
  };
  return (
    <TransitionWrapper>
      <div className="flex-1 flex items-start justify-start w-full h-full py-2">
        <div className="flex flex-col py-8 gap-y-4 relative w-[300px] h-full">
          {/* Title */}
          <div className="flex flex-row items-center justify-start gap-x-2">
            <HiOutlineClipboardList className="w-12 h-12 text-black dark:text-amber-100" />
            <p className="text-black dark:text-amber-100 text-4xl">PROJECTS</p>
          </div>

          <div className="flex flex-col items-start justify-start absolute top-1/2 left-0 -translate-y-1/2 border-l-4 border-gray-200 pl-4">
            {["locuskorea", "trenshow", "261house"].map((key) => {
              const isActive = activeType == key;
              return (
                <button
                  className="h-12 flex items-center relative "
                  key={key}
                  onClick={() => scrollToSection(key)}
                >
                  {activeType === key && (
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
                      activeType == key ? "text-black" : "text-gray-200"
                    } ${
                      activeType == key
                        ? "dark:text-amber-100"
                        : "dark:text-gray-500"
                    } uppercase`}
                  >
                    {key}
                  </motion.p>
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-y-10 flex-1 overflow-y-auto text-black dark:text-amber-100">
          <Locus ref={locusRef} />
          <Trenshow ref={trenshowRef} />
          <House ref={houseRef} />
        </div>
      </div>
    </TransitionWrapper>
  );
}
