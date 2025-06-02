import "../../index.css";
import Typewriter from "../../LandingAnimations/Typewriter";
import FeatureSection from "../../LandingAnimations/FeatureSection";
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
import InfiniteScrollText from "../../LandingAnimations/InfiniteScrollText";
import AuthForm from "../../components/AuthForm/AuthForm";

const LandingPage = () => {
  return (
    <>
      <Flex minH="100vh" minW="100vw" flexDirection="column" gap={10}>
        <Flex
          w="100vw"
          h={{ base: "auto", md: "100vh" }}
          backgroundImage="url('/images/car_bg.gif')"
          backgroundSize="cover"
          backgroundPosition="center"
          flexDirection="column"
          className="animated-landing"
          position="relative"
          pb={{ base: "4rem", md: "0" }}
        >
          <LandingBar />

          <Container
            maxW="100%"
            minH="100vh"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            pt={{ base: "4rem", md: "7rem", lg: "7rem" }}
            position="relative"
            role="group"
          >
            <Box
              position="absolute"
              top={{ base: "40%", md: "42%", lg: "30%" }}
              left="50%"
              transform="translate(-50%, -50%)"
              opacity={0}
              transition="opacity 0.8s ease-in-out"
              _groupHover={{ opacity: 1 }}
              px={{ base: "1rem", md: "2rem", lg: "3rem" }}
              zIndex={1}
            >
              <Text
                fontSize={{ base: "3xl", md: "5xl", lg: "6xl", xl: "6xl" }}
                textAlign="center"
                fontWeight={800}
                className="flicker"
                color="white"
                whiteSpace={{ base: "normal", md: "nowrap" }}
                overflow="hidden"
                textOverflow="ellipsis"
                mb={{ base: 6, md: 10 }}
              >
                Stay on Track, Stay on the Road
              </Text>
            </Box>

            <Flex
              w={{ base: "90%", sm: "80%", md: "65%", lg: "50%" }}
              flexDirection="column"
              gap={10}
              zIndex={2}
              mt={{ base: "8rem", sm: "10rem", md: "12rem" }}
              px={{ base: "1rem", md: "2rem", lg: "3rem" }}
            >
              <Typewriter
                text={
                  "Take control of your car's upkeep and connect with fellow enthusiasts — our all-in-one platform makes vehicle maintenance simple, smart, and social."
                }
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                delay={25}
                textAlign="center"
                fontWeight={400}
                whiteSpace="pre-line"
                color="#FFF"
              />
            </Flex>
          </Container>
        </Flex>
      </Flex>

      <FeatureSection />

      <Box w="100vw" position="relative" mt="2rem">
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        >
          <source src="/videos/REV.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Text
          className="aboutHeader"
          fontSize={["4xl", "5xl", "6xl", "7xl", "9xl"]}
          color="white"
          position="absolute"
          top={["20%", "25%", "30%"]}
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          zIndex={2}
          px="1rem"
          whiteSpace="nowrap"
        >
          How Rev-Up Works
        </Text>
      </Box>

      <Box w="100%" m={0} p={0} overflowX="hidden">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
          <Box
            order={{ base: 1, md: 1 }}
            background="linear-gradient(to bottom right, #740000, #470D0D)"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            color="white"
            w="100%"
            h={{ base: "auto", md: "100vh" }}
            py={{ base: 10, md: 0 }}
            textAlign="center"
          >
            <Image
              src="/images/tool.png"
              alt="Feature 1 Icon"
              boxSize={{ base: "80px", md: "120px" }}
              mb={4}
              display="block"
            />
            <Text fontSize={{ base: "3xl", md: "6xl" }} fontWeight="bold" mb={2}>
              Track
            </Text>
            <Text w={{ base: "90%", md: "80%" }}>
              This is the description of the first feature, showcasing how users benefit.
            </Text>
          </Box>
          <Box order={{ base: 2, md: 2 }} w="100%" h={{ base: "auto", md: "100vh" }}>
            <Image
              src="/images/Track.png"
              alt="Feature 1"
              w="100%"
              h={{ base: "auto", md: "800" }}
              objectFit="cover"
            />
          </Box>

          <Box order={{ base: 4, md: 3 }} w="100%" h={{ base: "auto", md: "100vh" }}>
            <Image
              src="/images/Connect.png"
              alt="Feature 2"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
          <Box
            order={{ base: 3, md: 4 }}
            background="linear-gradient(to bottom right, #740000, #470D0D)"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            color="white"
            w="100%"
            h={{ base: "auto", md: "100vh" }}
            py={{ base: 10, md: 0 }}
            textAlign="center"
          >
            <Image
              src="/images/People.png"
              alt="Feature 2 Icon"
              boxSize={{ base: "60px", md: "80px" }}
              mb={4}
            />
            <Text fontSize={{ base: "3xl", md: "6xl" }} fontWeight="bold" mb={2}>
              Connect
            </Text>
            <Text w={{ base: "90%", md: "80%" }}>
              Insightful feature description to engage users and highlight value.
            </Text>
          </Box>

          <Box
            order={{ base: 5, md: 5 }}
            background="linear-gradient(to bottom right, #740000, #470D0D)"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            color="white"
            w="100%"
            h={{ base: "auto", md: "100vh" }}
            py={{ base: 10, md: 0 }}
            textAlign="center"
          >
            <Image
              src="/images/Loc.png"
              alt="Feature 3 Icon"
              boxSize={{ base: "60px", md: "80px" }}
              mb={4}
            />
            <Text fontSize={{ base: "3xl", md: "6xl" }} fontWeight="bold" mb={2}>
              Locate
            </Text>
            <Text w={{ base: "90%", md: "80%" }}>
              Feature details that help users understand what’s unique or powerful.
            </Text>
          </Box>
          <Box order={{ base: 6, md: 6 }} w="100%" h={{ base: "auto", md: "100vh" }}>
            <Image
              src="/images/Locate.png"
              alt="Feature 3"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>

          <Box order={{ base: 8, md: 7 }} w="100%" h={{ base: "auto", md: "100vh" }}>
            <Image
              src="/images/Record.png"
              alt="Feature 4"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
          <Box
            order={{ base: 7, md: 8 }}
            background="linear-gradient(to bottom right, #740000, #470D0D)"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            color="white"
            w="100%"
            h={{ base: "auto", md: "100vh" }}
            py={{ base: 10, md: 0 }}
            textAlign="center"
          >
            <Image
              src="/images/Paper.png"
              alt="Feature 4 Icon"
              boxSize={{ base: "60px", md: "80px" }}
              mb={4}
            />
            <Text fontSize={{ base: "3xl", md: "6xl" }} fontWeight="bold" mb={2}>
              Record
            </Text>
            <Text w={{ base: "90%", md: "80%" }}>
              Final feature box with relevant content for user engagement.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box mt={{ base: "2rem", md: "4rem" }}>
        <InfiniteScrollText />
      </Box>

      <Box position="relative" w="100vw" h="100vh" mt="10rem" overflow="hidden">
        <Image
          src="/images/CarHome.png"
          alt="Full Background"
          w="100%"
          h="100%"
          objectFit="cover"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="rgba(255, 255, 255, 0.1)"
          backdropFilter="blur(12px)"
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          backgroundColor="white"
          px="3rem"
          py="2rem"
          borderRadius="lg"
          boxShadow="xl"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="2rem"
          zIndex={1}
        >
          <Text
            color="black"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            textAlign="center"
          >
            Join the Rev-Up Community
          </Text>
          <AuthForm />
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default LandingPage;
