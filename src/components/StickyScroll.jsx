import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  VStack,
  Text,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const content = [
  {
    title: "Maintenance Made Easy",
    description: "Track services, repairs, and schedules to keep your vehicle in top condition.",
    image: "/images/maintenance.jpg",
  },
  {
    title: "Community Driven",
    description: "Connect with other car enthusiasts, ask questions, and share tips.",
    image: "/images/community.jpg",
  },
  {
    title: "Garage at Your Fingertips",
    description: "Store all your car records in one place, accessible anytime, anywhere.",
    image: "/images/garage.jpg",
  },
];


  const StickyScroll = ({ content }) => {

  const cardLength = content.length;

  const backgroundColors = ["#0f172a", "#000000", "#171717"];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closest = cardsBreakpoints.reduce((acc, bp, i) => {
      return Math.abs(latest - bp) < Math.abs(latest - cardsBreakpoints[acc]) ? i : acc;
    }, 0);
    setActiveCard(closest);
  });

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  const isLg = useBreakpointValue({ base: false, lg: true });

  return (
    <MotionBox
      ref={ref}
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      p={10}
      overflowY="auto"
      borderRadius="md"
      h="30rem"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      gap={10}
    >
      <VStack align="flex-start" spacing={20} px={4} maxW="2xl">
        {content.map((item, index) => (
          <Box key={item.title + index}>
            <MotionText
              fontSize="2xl"
              fontWeight="bold"
              color="whiteAlpha.900"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
            >
              {item.title}
            </MotionText>
            <MotionText
              fontSize="md"
              color="whiteAlpha.700"
              mt={4}
              maxW="sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
            >
              {item.description}
            </MotionText>
          </Box>
        ))}
        <Box h="10" />
      </VStack>

      {isLg && (
        <Box
          position="sticky"
          top="2.5rem"
          w="20rem"
          h="15rem"
          borderRadius="md"
          overflow="hidden"
          bgGradient={backgroundGradient}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {content[activeCard].content ?? null}
        </Box>
      )}
    </MotionBox>
  );
};

export default StickyScroll;
