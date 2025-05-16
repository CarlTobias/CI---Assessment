import React from "react";
import "../../index.css";


import {
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
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
                fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
                textAlign={{ base: "center", md: "left" }}
                px={{ base: "1rem", md: "5rem" }}
                py={{ base: "1rem", md: "2rem" }}
                fontWeight={350}
                color={"#FFF"}
              >
                Stay on Track <br /> Stay on the Road
              </Text>

              <Text
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
                textAlign={{ base: "center", md: "left" }}
                px={{ base: "1rem", md: "5rem" }}
                fontWeight={600}
                color={"#FFF"}
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
            <Text pt={"4rem"} fontWeight={700} fontSize={50} color={"#000"}>
              About Us
            </Text>
            <Text
              align={"right"}
              w={"45vw"}
              pt={"4rem"}
              fontWeight={600}
              fontSize={25}
              color={"#000"}
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
        mb={"10rem"}
      >
        Our platform is a comprehensive tool designed to help car owners and
        enthusiasts effortlessly manage vehicle maintenance while building a
        community around.
      </Text>

      {/* Video Section */}
      <Box w="100vw" h="auto" position="relative" mt={"2rem"}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        >
          <source src="/videos/REV.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

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

      <Box w="100%" m={0} p={0} overflowX="hidden">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0} m={0} p={0}>
          {/* Row 1: Text Left - Image Right */}
          <Box
            background="linear-gradient(to bottom right, #740000, #470D0D)"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            color="white"
            w="100%"
            h="100vh"
            textAlign="center"
          >
            <Image
              src="/images/tool.png"
              alt="Feature 1 Icon"
              boxSize="80px"
              mb={4}
            />
            <Text fontSize="6xl" fontWeight="bold" mb={2}>
              Track
            </Text>
            <Text w="80%">
              This is the description of the first feature, showcasing how users
              benefit.
            </Text>
          </Box>
          <Box w="100%" h="100vh">
            <Image
              src="/images/Track.png"
              alt="Feature 1"
              w="100%"
              h="800"
              objectFit="cover"
              display="block"
            />
          </Box>

          {/* Row 2: Image Left - Text Right */}
          <Box w="100%" h="100vh">
            <Image
              src="/images/Connect.png"
              alt="Feature 2"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
          <Box
            background="linear-gradient(to bottom right, #740000, #470D0D)"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            color="white"
            w="100%"
            h="100vh"
            textAlign="center"
          >
            <Image
              src="/images/People.png"
              alt="Feature 2 Icon"
              boxSize="80px"
              mb={4}
            />
            <Text fontSize="6xl" fontWeight="bold" mb={2}>
              Connect
            </Text>
            <Text w="80%">
              Insightful feature description to engage users and highlight
              value.
            </Text>
          </Box>

          {/* Row 3: Text Left - Image Right */}
          <Box
            background="linear-gradient(to bottom right, #740000, #470D0D)"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            color="white"
            w="100%"
            h="100vh"
            textAlign="center"
          >
            <Image
              src="public\images\Loc.png"
              alt="Feature 3 Icon"
              boxSize="80px"
              mb={4}
            />
            <Text fontSize="6xl" fontWeight="bold" mb={2}>
              Locate
            </Text>
            <Text w="80%">
              Feature details that help users understand what’s unique or
              powerful.
            </Text>
          </Box>
          <Box w="100%" h="100vh">
            <Image
              src="/images/Locate.png"
              alt="Feature 3"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>

          {/* Row 4: Image Left - Text Right */}
          <Box w="100%" h="100vh">
            <Image
              src="/images/Record.png"
              alt="Feature 4"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
          <Box
            background="linear-gradient(to bottom right, #740000, #470D0D)"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            color="white"
            w="100%"
            h="100vh"
            textAlign="center"
          >
            <Image
              src="public\images\Paper.png"
              alt="Feature 4 Icon"
              boxSize="80px"
              mb={4}
            />
            <Text fontSize="6xl" fontWeight="bold" mb={2}>
              Record
            </Text>
            <Text w="80%">
              Final feature box with relevant content for user engagement.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Text fontSize="9xl" fontWeight="Bold">
        JOIN REV UP NOW
      </Text>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="100%"
        h={{ base: "200px", md: "400px" }}
        my="4rem"
      >
        <Image
          src="public\images\Showcase.png"
          alt="Centered Display"
          objectFit="contain"
          maxH="100%"
          maxW="90%"
          borderRadius="xl"
          boxShadow="xl"
        />
      </Box>

      {/* Full Width Image with Box Blur Overlay Section */}
      <Box position="relative" w="100vw" h="100vh" mt="10rem">
        <Image
          src="/images/CarHome.png"
          alt="Full Background"
          w="100%"
          h="100%"
          objectFit="cover"
        />

        {/* Only this Box has the blur, not the full image */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          backgroundColor="rgba(20, 20, 20, 0.62)"
          backdropFilter="blur(8px)"
          px="3rem"
          py="2rem"
          borderRadius="lg"
          boxShadow="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            color="white"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            textAlign="center"
          >
            Redirect to Forum
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default LandingPage;
