import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const mode = queryParams.get("mode");

  const [isLogin, setIsLogin] = useState(mode !== "signup");

  useEffect(() => {
    setIsLogin(mode !== "signup");
  }, [mode]);

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleAuth = () => {
    if (!inputs.email || !inputs.password) {
      alert("Please fill out all fields");
      return;
    }

    navigate("/home?mode=forum");
  };

  return (
    <>
      <Box padding={3} w={{ base: "max-content", md: "35vw" }}>
        <VStack gap={5}>
          {!isLogin ? (
            <Container>
              <Text fontWeight={500}>Username</Text>
              <Input
                borderColor={"#292929"}
                borderRadius={5}
                placeholder="Enter Username"
                _placeholder={{ color: "#3F3F3F" }}
                fontSize={14}
                _hover={{ borderColor: "#90030C" }}
                type="text"
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
              />
            </Container>
          ) : null}

          <Container>
            <Text fontWeight={500}>Email Address</Text>
            <Input
              borderColor={"#292929"}
              borderRadius={5}
              placeholder="Enter Email"
              _placeholder={{ color: "#3F3F3F" }}
              fontSize={14}
              _hover={{ borderColor: "#90030C" }}
              type="email"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
          </Container>

          <Container>
            <Text fontWeight={500}>Password</Text>
            <Input
              borderColor={"#292929"}
              borderRadius={5}
              placeholder="Enter Password"
              _placeholder={{ color: "#3F3F3F" }}
              fontSize={14}
              _hover={{ borderColor: "#90030C" }}
              type="password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </Container>

          {!isLogin ? (
            <Container>
              <Text fontWeight={500}>Confirm Password</Text>
              <Input
                borderColor={"#292929"}
                borderRadius={5}
                placeholder="Confirm Password"
                _placeholder={{ color: "#3F3F3F" }}
                fontSize={14}
                _hover={{ borderColor: "#90030C" }}
                type="password"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />
            </Container>
          ) : null}

          <Container>
            <Button
              w={"full"}
              bg={"#292929"}
              color={"#FFFFFF"}
              _hover={{ bg: "#90030C" }}
              onClick={handleAuth}
            >
              {isLogin ? "Log In" : "Sign Up"}
            </Button>
          </Container>

          <Box mt={-2}>
            <Flex justify={"center"} align={"center"}>
              <Box mx={2} fontWeight={350} fontSize={14} color={"#3f3f3f"}>
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </Box>

              <Box
                fontWeight={600}
                fontSize={14}
                color={"#90030C"}
                onClick={() =>
                  navigate(`/auth?mode=${isLogin ? "signup" : "login"}`)
                }
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
