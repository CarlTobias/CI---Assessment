"use client";

import { motion } from "framer-motion";
import { Box, Image } from "@chakra-ui/react";

const images = [
  { src: "/images/mycar.png", alt: "My Car" },
  { src: "/images/myforum.png", alt: "Forum" },
  { src: "/images/mygarages.png", alt: "Garages" },
];

export default function InfiniteScrollText() {
  const text = "JOIN REV-UP NOW";

  return (
    <>
      {/* Infinite Marquee */}
      <div className="relative h-[40vh] flex items-center overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 80,
            ease: "linear",
          }}
          className="flex whitespace-nowrap"
        >
          <div className="flex">
            {[...Array(20)].map((_, i) => (
              <span
                key={`text1-${i}`}
                className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold tracking-wider mr-20"
              >
                {text}
              </span>
            ))}
          </div>
          <div className="flex">
            {[...Array(20)].map((_, i) => (
              <span
                key={`text2-${i}`}
                className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold tracking-wider mr-20"
              >
                {text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      
      <Box className="w-full py-10 overflow-x-auto">
        <Box className="flex gap-6 px-6 w-max">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-[300px] md:w-[400px] lg:w-[500px] aspect-[3/2] rounded-xl shadow-md overflow-hidden flex-shrink-0"
            >
              <Image
                src={img.src}
                alt={img.alt}
                w="100%"
                h="100%"
              />
            </motion.div>
          ))}
        </Box>
      </Box>
    </>
  );
}
