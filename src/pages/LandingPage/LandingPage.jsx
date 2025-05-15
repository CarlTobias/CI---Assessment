import React from "react";
import "../../index.css";

import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import LandingBar from "../../components/LandingBar/LandingBar";

const LandingPage = () => {
  return (
    <>
      <Flex minH={"100vh"} minW={"100vw"} flexDirection={"column"} gap={10}>
        <Flex
          w={"100vw"}
          h={"100vh"}
          backgroundImage={"url('/images/landingBackground.png')"}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          flexDirection={"column"}
        >
          <LandingBar />

          <Container
            maxW={"100%"}
            h={"100%"}
            display={"flex"}
            alignItems={"center"}
          >
            <Flex
              w={{ base: "90vw", md: "50vw" }}
              flexDirection={"column"}
              gap={5}
            >
              <Text
                className={"landingHeroHeader"}
                fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
                textAlign={{ base: "center", md: "left" }}
                px={{ base: "1rem", md: "5rem" }}   // horizontal padding
                py={{ base: "1rem", md: "2rem" }}   // vertical padding
              >
                Stay on Track <br/>  Stay on the Road
              </Text>

         

              <Text
                className={"landingHeroSubtitle"}
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
                textAlign={{ base: "center", md: "left" }}
                px={{ base: "1rem", md: "5rem" }}   // horizontal padding
              >
                Rev up your ride with our all-in-one platform—where car care
                meets community!
              </Text>
            </Flex>
          </Container>
        </Flex>

        <Flex w={"100vw"} h={"100vh"} align={"center"} flexDirection={"column"}>
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"flex-start"}
            w={"100vw"}
            p={0}
            m={0}
          
          >
            <Text className={"aboutHeader"} fontSize={50} pt={"4rem"}>
              About Us
            </Text>
            <Text
              className={"aboutSubtitle"}
              align={"right"}
              w={"45vw"}
              fontSize={25}
              pt={"4rem"}
            >
              Our platform is a comprehensive tool designed to help car owners
              and enthusiasts effortlessly manage vehicle maintenance while
              building a community around.
            </Text>
          </Box>

          <Box display={"flex"} flex={1} alignItems={"center"}>
            <Box
              backgroundColor={"#D9D9D9"}
              h={"250px"}
              w={"250px"}
              mt={-300}
              mr={-150}
              zIndex={1}
              borderRadius={18}
              p={"2rem"}
            >
              <Text className={"aboutMiniHeader"}>Easy to Apply</Text>
              <Text className={"aboutMiniBody"}>
                Our platform is a comprehensive tool designed to help car owners
                and enthusiasts effortlessly manage vehicle maintenance
              </Text>
            </Box>

            <Image src="/images/car.png" alt="car.png" h={"80%"} />

            <Box
              backgroundColor={"#D9D9D9"}
              h={"300px"}
              w={"300px"}
              mb={-200}
              ml={-150}
              zIndex={1}
              borderRadius={18}
              p={"2rem"}
            >
              <Text className={"aboutMiniHeader"}>Easy to Apply</Text>
              <Text className={"aboutMiniBody"}>
                Our platform is a comprehensive tool designed to help car owners
                and enthusiasts effortlessly manage vehicle maintenance
              </Text>
            </Box>
          </Box>
        </Flex>
      </Flex>

      <Text
       className={"aboutSubtitle"}
       align={"left"}
       w={"45vw"}
       fontSize={25}
       pt={"4rem"}
       ml={"10rem"}
       mb={"10rem"}>
  Our platform is a comprehensive tool designed to help car owners
  and enthusiasts effortlessly manage vehicle maintenance while
  building a community around.
</Text>

<Box w="100vw" h="auto" position="relative" mt={"2rem"}>
  {/* Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    style={{ width: "100%", height: "auto", objectFit: "cover" }}
  >
    <source src="public\images\REV.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay Text */}
  <Text
    className="aboutHeader"
    fontSize={100}
    color="white"
    position="absolute"
    top="20%"
    left="50%"
    transform="translate(-50%, -50%)"
    textAlign="center"
    zIndex={2}
    px={"1rem"}
    whiteSpace="nowrap"
  >
    How Rev-Up Works
  </Text>
</Box>

    </>
  );
};

export default LandingPage;
