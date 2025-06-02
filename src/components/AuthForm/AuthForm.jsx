import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import authStore from "../../stores/authStore";

const AuthForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const login = authStore((state) => state.login);

  const toast = useToast();

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

  const handleAuth = async () => {
    const { username, email, password, confirmPassword } = inputs;

    if (!email || !password || (!isLogin && (!confirmPassword || !username))) {
      toast({
        title: "Missing fields",
        description: "Please fill out all the fields.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const baseUrl = "https://rev-up-50vg.onrender.com";
      const url = isLogin ? "/api/login" : "/api/register";
      const res = await fetch(baseUrl + url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
          ...(isLogin ? {} : { username }),
        }),
      });

      let data = {};
      const text = await res.text();
      if (text) {
        data = JSON.parse(text);
      }

      if (!res.ok) {
        toast({
          title: "Authentication failed",
          description: data.error || "Something went wrong.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      if (isLogin) {
        login(data.user);
        toast({
          title: "Login successful",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        navigate("/home?mode=forum");
      } else {
        toast({
          title: "Registration successful",
          description: "Please log in to continue.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setIsLogin(true);
      }
    } catch (err) {
      console.error("Auth error:", err);
      toast({
        title: "Network error",
        description: "Please check the console for more details.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
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
