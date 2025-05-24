import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { MdBuild } from "react-icons/md";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const FeatureSection = () => {
  return (
    <Flex
      w="100vw"
      minH="100vh"
      align="center"
      direction="column"
      overflow="hidden"
      pt={{ base: "6rem", md: "8rem", lg: "10rem" }} // more top margin
    >
      {/* Header */}
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="flex-start"
        w="100%"
        maxW="1200px"
        px={{ base: 4, md: 12 }}
        gap={6}
      >
        <Text
          fontWeight={700}
          fontSize={{ base: "2xl", md: "3xl", lg: "50px" }}
          color="#000"
        >
          About Us
        </Text>
        <Text
          align={{ base: "left", md: "right" }}
          w={{ base: "100%", md: "55%" }}
          fontWeight={600}
          fontSize={{ base: "md", md: "lg", lg: "25px" }}
          color="#000"
        >
          Our platform is a comprehensive tool designed to help car owners and
          enthusiasts effortlessly manage vehicle maintenance while building a
          community around.
        </Text>
      </Box>

      {/* Features + Image */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        wrap="wrap"
        gap={10}
        mt={{ base: 10, md: 16 }}
        px={{ base: 4, md: 0 }}
      >
        {/* Left Card */}
        <MotionBox
          backdropFilter="blur(18px)"
          backgroundColor="rgba(217, 217, 217, 0.6)"
          h={{ base: "auto", md: "250px", lg: "300px" }}
          w={{ base: "90%", md: "250px", lg: "300px" }}
          mt={{ base: 0, md: "-200px", lg: "-250px" }}
          mr={{ base: 0, md: "-120px", lg: "-150px" }}
          zIndex={1}
          borderRadius={18}
          p={{ base: "1rem", md: "1.5rem" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Box
            mb="1rem"
            color="white"
            backgroundColor="#000"
            p="0.5rem"
            borderRadius="16"
            display="inline-block"
          >
            <MdBuild size="32px" />
          </Box>
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" mb="0.5rem">
            Smart Maintenance Tools
          </Text>
          <Text fontSize="sm">
            Easily track services, repairs, and schedules to keep your vehicle in peak condition.
          </Text>
        </MotionBox>

        {/* Car Image */}
        <MotionImage
          src="/images/car.png"
          alt="car"
          h={{ base: "200px", md: "300px", lg: "400px" }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />

        {/* Right Card */}
        <MotionBox
          backdropFilter="blur(18px)"
          backgroundColor="rgba(217, 217, 217, 0.6)"
          h={{ base: "auto", md: "250px", lg: "300px" }}
          w={{ base: "90%", md: "250px", lg: "300px" }}
          mb={{ base: 0, md: "-150px", lg: "-200px" }}
          ml={{ base: 0, md: "-120px", lg: "-150px" }}
          zIndex={1}
          borderRadius={18}
          p={{ base: "1rem", md: "1.5rem" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <Box
            mb="1rem"
            color="white"
            backgroundColor="#90030C"
            p="0.5rem"
            borderRadius="16"
            display="inline-block"
          >
            <MdBuild size="32px" />
          </Box>
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" mb="0.5rem">
            Built-in Community
          </Text>
          <Text fontSize="sm">
            Connect with fellow car owners to exchange tips, get advice, and share your automotive passion.
          </Text>
        </MotionBox>
      </Flex>

      {/* Optional Subtitle */}
      <Text
        w={{ base: "90%", md: "70%", lg: "50%" }}
        fontSize={{ base: "md", md: "lg", lg: "25px" }}
        pt={{ base: "4rem", md: "6rem" }}
        mb="6rem"
        textAlign="left"
      >
        {/* Add any subtitle here if needed */}
      </Text>
    </Flex>
  );
};

export default FeatureSection;
