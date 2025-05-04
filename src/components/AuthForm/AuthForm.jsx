import React, { useState } from "react";

import { Box, Button, Container, Flex, Input, VStack } from "@chakra-ui/react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Box padding={3} w={{ base: "max-content", md: "35vw" }}>
        <VStack gap={5}>
          <Container>
            <h1 className={"inputText"}>Email Address</h1>
            <Input />
          </Container>

          <Container>
            <h1 className={"inputText"}>Password</h1>
            <Input />
          </Container>

          {!isLogin ? (
            <Container>
              <h1 className={"inputText"}>Confirm Password</h1>
              <Input />
            </Container>
          ) : null}

          <Container>
            <Button
              w={"full"}
              bg={"#292929"}
              color={"#FFFFFF"}
              _hover={{ bg: "#90030C" }}
            >
              {isLogin ? "Log In" : "Sign Up"}
            </Button>
          </Container>

          <Box mt={-2}>
            <Flex justify={"center"} align={"center"}>
              <Box className={"signUpText1"} mx={2} fontSize={14}>
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </Box>

              <Box
                className={"signUpText2"}
                fontSize={14}
                onClick={() => setIsLogin(!isLogin)}
                color={"#E49F43"}
                cursor={"pointer"}
                _hover={{ textDecoration: "underline" }}
              >
                {isLogin ? "Sign Up for Free" : "Log In"}
              </Box>
            </Flex>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default AuthForm;
