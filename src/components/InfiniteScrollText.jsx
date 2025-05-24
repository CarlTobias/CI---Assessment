"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Box, Image } from "@chakra-ui/react";

export default function InfiniteScrollText() {
  const containerRef = useRef(null);
  const stackRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start end", "end start"],
  });

  // Opacity fade in and out timing
  const opacity1 = useTransform(scrollYProgress, [0.0, 0.25, 0.4], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1]);





  return (
    <>
      {/* Scroll Text Banner */}
      <div ref={containerRef} className="relative h-[60vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-white">
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]),
            }}
            className="flex whitespace-nowrap"
          >
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold tracking-wider mr-20"
              >
                JOIN REV-UP NOW
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Image Stack */}
      <Box
        ref={stackRef}
        className="relative h-[250vh] flex items-center justify-center"
        px={1}
      >
        <div className="sticky top-1/2 -translate-y-1/2 w-full max-w-[900px] aspect-[3/2] mx-auto">
          {/* Card 3 */}
          <motion.div
            style={{ opacity: opacity3 }}
            className="absolute w-full h-full rounded-xl shadow-xl overflow-hidden"
          >
            <Image
              src="public/images/mygarages.png"
              alt="Card 3"
              w="100%"
              h="100%"
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            style={{ opacity: opacity2 }}
            className="absolute w-full h-full rounded-xl shadow-xl overflow-hidden"
          >
            <Image
              src="public/images/myforum.png"
              alt="Card 2"
              w="100%"
              h="100%"
            />
          </motion.div>

          {/* Card 1 */}
          <motion.div
            style={{ opacity: opacity1 }}
            className="absolute w-full h-full rounded-xl shadow-xl overflow-hidden"
          >
            <Image
              src="public/images/MyCar.png"
              alt="Card 1"
              w="100%"
              h="100%"
            />
          </motion.div>
        </div>
      </Box>
    </>
  );
}
