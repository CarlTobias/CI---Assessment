import "../../index.css";
import BackgroundBeams from "../../components/BackgroundBeams";
import Typewriter from "../../components/Typewriter";
import AnimatedInfoCard from "../../components/AnimatedInfoCard";


import {
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import LandingBar from "../../components/LandingBar/LandingBar";
import Footer from "../../components/LandingFooter/LandingFooter";
import { MdBuild } from "react-icons/md";

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
          className={"animated-landing"} 
        >
    <LandingBar />
    <Container
      maxW={"100%"}
      h={"100%"}
      display={"flex"}
      alignItems={"center"}
      pt={{ base: "1rem", md: "7rem", lg: "2rem" }}
    >
      <Flex
        w={{ base: "90vw", md: "50vw" }}
        flexDirection={"column"}
        gap={5}
      >
    <Box px={{ base: "1rem", md: "5rem" }}>
      <Text
        fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
        textAlign={{ base: "center", md: "left" }}
        fontWeight={550}
        className="swoosh-text"
        whiteSpace="pre-line"
      >
        {`Stay on Track\nStay on the Road`}
      </Text>
    </Box>
        
        <Typewriter
          text="Our platform is a comprehensive tool designed to help car owners and enthusiasts effortlessly manage vehicle maintenance while building a community around."
          fontSize={{ base: "md", md: "lg", lg: "xl" }}
          delay={25}
          textAlign={{ base: "center", md: "left" }}
          px={{ base: "1rem", md: "5rem" }}
          fontWeight={600}
          whiteSpace={"pre-line"}
          color={"#FFF"}
        />
        
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
              backdropFilter="blur(18px)"
              backgroundColor="rgba(217, 217, 217, 0.6)"
              h={"300px"}
              w={"300px"}
              mt={-300}
              mr={-150}
              zIndex={1}
              borderRadius={18}
              p={"2rem"}
            >
              <Box
                mb="1rem"
                color="white"
                backgroundColor="#000000"
                p="0.5rem"
                borderRadius="16"
                display="inline-block"
              >
                <MdBuild size="40px" />
              </Box>
              <Text fontSize="xl" fontWeight="bold" mb="0.5rem">
                Easy to Apply
              </Text>

              <Text fontSize="sm">
                Manage vehicle maintenance easily and efficiently with our
                streamlined platform.
              </Text>
            </Box>

            <Image src="/images/car.png" alt="car.png" h={"80%"} />

            <Box
              backdropFilter="blur(18px)"
              backgroundColor="rgba(217, 217, 217, 0.6)"
              h={"300px"}
              w={"300px"}
              mb={-200}
              ml={-150}
              zIndex={1}
              borderRadius={18}
              p={"2rem"}
            >
              <Box
                mb="1rem"
                color="white"
                backgroundColor="#90030C"
                p="0.5rem"
                borderRadius="16"
                display="inline-block"
              >
                <MdBuild size="40px" />
              </Box>

              <Text fontSize="xl" fontWeight="bold" mb="0.5rem">
                Easy to Apply
              </Text>

              <Text fontSize="sm">
                Manage vehicle maintenance easily and efficiently with our
                streamlined platform.
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
              src="/images/Loc.png"
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
              src="/images/Paper.png"
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

      <Text fontSize={{ base: "80px", md: "170px" }} fontWeight="Bold">
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
          src="/images\Showcase.png"
          alt="Centered Display"
          objectFit="contain"
          maxH="100%"
          maxW="90%"
          borderRadius="xl"
          boxShadow="xl"
        />
      </Box>

      <Box position="relative" w="100vw" h="100vh" mt="10rem">
        <Image
          src="/images/CarHome.png"
          alt="Full Background"
          w="100%"
          h="100%"
          objectFit="cover"
        />

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
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="2rem"
        >
          <Text
            color="white"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            textAlign="center"
            mb="0"
          >
            Redirect to Forum
          </Text>
          <Text
            color="white"
            fontSize={{ base: "3xl", md: "2xl" }}
            textAlign="center"
          >
            Popular Topics
          </Text>

          {/* 3-Column Grid */}
          <Box
            display="flex"
            flexWrap="wrap"
            gap="1.5rem"
            justifyContent="center"
          >
            {[1, 2, 3].map((item) => (
              <Box
                key={item}
                backgroundColor="rgba(217, 217, 217, 0.28)"
                border="1px solid white"
                borderRadius="lg"
                p="1rem"
                width={{ base: "100%", md: "200px" }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                textAlign="center"
              >
                <Image
                  src="/images/profile-placeholder.png"
                  alt="Profile"
                  borderRadius="full"
                  boxSize="60px"
                  mb="0.5rem"
                />
                <Text fontWeight="bold" color="white" mb="0.5rem">
                  Topic Title {item}
                </Text>
                <Text
                  color="white"
                  fontSize="sm"
                  textDecoration="underline"
                  cursor="pointer"
                >
                  Read More
                </Text>
              </Box>
            ))}
          </Box>

          {/* Single Box Below */}
          <Box
            backgroundColor="rgba(217, 217, 217, 0.28)"
            border="1px solid white"
            borderRadius="lg"
            p="1rem"
            width={{ base: "100%", md: "640px" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
          >
            <Image
              src="/images/profile-placeholder.png"
              alt="Profile"
              borderRadius="full"
              boxSize="60px"
              mb="0.5rem"
            />
            <Text fontWeight="bold" color="white" mb="0.5rem">
              Featured Topic Title
            </Text>
            <Text
              color="white"
              fontSize="sm"
              textDecoration="underline"
              cursor="pointer"
            >
              Read More
            </Text>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default LandingPage;
