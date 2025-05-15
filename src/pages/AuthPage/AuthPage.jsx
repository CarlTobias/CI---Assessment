import React from "react";
import "../../index.css";

import {
  Container,
  Flex,
  Image,
  Link,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <>
      <Flex
        direction={"column"}
        justify={"center"}
        align={"center"}
        minH={"100vh"}
        backgroundImage={"url('/images/authBackground.png')"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
      >
        <Flex justify={"center"} align={"center"}>
          <Container
            maxW={"max-content"}
            h={"50vh"}
            p={"1rem"}
            border={"2px solid black"}
            borderRadius={"0.5rem"}
            backgroundColor={"rgba(255, 255, 255, 0.6)"}
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
                <Link to={"/landing"} as={RouterLink}>
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
                </Link>

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
