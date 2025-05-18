"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function InfiniteScrollText() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);

  return (
    <div ref={containerRef} className="relative h-[90vh] bg-white">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex whitespace-nowrap"
        >
          <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[15rem] font-bold tracking-wider mr-20">
            JOIN REV-UP NOW
          </span>
          <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[15rem] font-bold tracking-wider mr-20">
            JOIN REV-UP NOW
          </span>
          <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[15rem] font-bold tracking-wider mr-20">
            JOIN REV-UP NOW
          </span>
        </motion.div>
      </div>
    </div>
  );
}
