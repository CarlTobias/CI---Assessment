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
              >
                Stay on Track
              </Text>

              <Text
                className={"landingHeroHeader"}
                fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
                textAlign={{ base: "center", md: "left" }}
              >
                Stay on the Road
              </Text>

              <Text
                className={"landingHeroSubtitle"}
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
                textAlign={{ base: "center", md: "left" }}
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
            <Text className={"aboutHeader"} fontSize={50}>
              About Us
            </Text>
            <Text
              className={"aboutSubtitle"}
              align={"right"}
              w={"45vw"}
              fontSize={25}
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
            >
              <Text className={"aboutMiniHeader"}>Easy to Apply</Text>
              <Text className={"aboutMiniBody"}>
                Our platform is a comprehensive tool designed to help car owners
                and enthusiasts effortlessly manage vehicle maintenance
              </Text>
            </Box>

            <Image src="/images/car.png" alt="car.png" h={"50%"} />

            <Box
              backgroundColor={"#D9D9D9"}
              h={"250px"}
              w={"250px"}
              mb={-200}
              ml={-150}
              zIndex={1}
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
    </>
  );
};

export default LandingPage;
