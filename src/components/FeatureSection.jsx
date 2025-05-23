import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { MdBuild } from "react-icons/md";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const FeatureSection = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" flexDirection="column" overflow="hidden">
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="flex-start"
        w="100vw"
        p={0}
        m={0}
        transform={{ base: "scale(0.85)", md: "scale(0.95)", lg: "scale(1)" }}
        transformOrigin="top center"
      >
        <Text
          pt="4rem"
          fontWeight={700}
          fontSize={{ base: "2xl", md: "3xl", lg: "50px" }}
          color="#000"
        >
          About Us
        </Text>
        <Text
          align="right"
          w={{ base: "80vw", md: "45vw" }}
          pt="4rem"
          fontWeight={600}
          fontSize={{ base: "md", md: "lg", lg: "25px" }}
          color="#000"
        >
          Our platform is a comprehensive tool designed to help car owners
          and enthusiasts effortlessly manage vehicle maintenance while
          building a community around.
        </Text>
      </Box>

      <Box display="flex" flex={1} alignItems="center">
        <MotionBox
          backdropFilter="blur(18px)"
          backgroundColor="rgba(217, 217, 217, 0.6)"
          h={{ base: "220px", md: "250px", lg: "300px" }}
          w={{ base: "220px", md: "250px", lg: "300px" }}
          mt={{ base: "-200px", md: "-250px", lg: "-300px" }}
          mr={{ base: "-100px", md: "-120px", lg: "-150px" }}
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
            backgroundColor="#000000"
            p="0.5rem"
            borderRadius="16"
            display="inline-block"
          >
            <MdBuild size="32px" />
          </Box>
          <Text fontSize={{ base: "xs", md: "xl" }} fontWeight="bold" mb="0.5rem">
            Smart Maintenance Tools
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            Easily track services, repairs, and schedules to keep your vehicle in peak condition.
          </Text>
        </MotionBox>

        <MotionImage
          src="/images/car.png"
          alt="car"
          h={{ base: "180px", md: "60%", lg: "80%" }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />

        <MotionBox
          backdropFilter="blur(18px)"
          backgroundColor="rgba(217, 217, 217, 0.6)"
          h={{ base: "220px", md: "250px", lg: "300px" }}
          w={{ base: "220px", md: "250px", lg: "300px" }}
          mb={{ base: "-120px", md: "-150px", lg: "-200px" }}
          ml={{ base: "-100px", md: "-120px", lg: "-150px" }}
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
          <Text fontSize={{ base: "xs", md: "xl" }} fontWeight="bold" mb="0.5rem">
            Built-in Community
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            Connect with fellow car owners to exchange tips, get advice, and share your automotive passion.
          </Text>
        </MotionBox>
      </Box>

      <Text
        className="aboutSubtitle"
        align="left"
        w={{ base: "80vw", md: "45vw" }}
        fontSize={{ base: "sm", md: "lg", lg: "25px" }}
        pt="4rem"
        ml={{ base: "2rem", md: "10rem" }}
        mb="10rem"
      ></Text>

    </Flex>
  );
};

export default FeatureSection;
