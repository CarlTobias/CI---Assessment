import React from "react";
import './AuthPage.css'

import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <>
      <Flex
        direction={"column"}
        minH={"100vh"}
        backgroundImage={"url('/images/landingBackground.png')"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
      >
        <Flex
          w={"100vw"}
          justify={"left"}
          align={"center"}
          p={"0.5rem"}
          pt={"1rem"}
          pb={"0"}
        >
          <Image
            src="/images/logoLargeDark.png"
            alt="RevUpLogo.png"
            h={"45px"}
            display={{ base: "none", md: "block" }}
          />

          <Image
            src="/images/logoSmallDark.png"
            alt="RevUpLogo.png"
            h={"45px"}
            display={{ base: "block", md: "none" }}
          />
        </Flex>

        <Flex flex={1} justify={"center"} align={"center"}>
          <Container
            maxW={"max-content"}
            mt={-20}
            p={"1rem"}
            borderRadius={"0.5rem"}
            backgroundColor={"#FFFFFF99"}
            backdropFilter={"blur(5px)"}
            boxShadow={"2xl"}
          >
            <Flex
              direction={"column"}
              justify={"center"}
              align={"center"}
              gap={3}
            >
              <VStack>
                <Box fontSize={{base: "25px", md: "45px"}}>
                  <h1 className="formHeader">Let's Rev-Up!</h1>
                </Box>

                <AuthForm />
              </VStack>
            </Flex>
          </Container>
        </Flex>
      </Flex>
    </>
  );
};

export default AuthPage;
