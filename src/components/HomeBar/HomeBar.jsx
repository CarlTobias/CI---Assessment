import React from "react";

import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import authStore from "../../stores/authStore";

import { TbLogout2 } from "react-icons/tb";

const HomeBar = () => {
  const location = useLocation();
  const currentMode = new URLSearchParams(location.search).get("mode");

  const user = authStore((store) => store.user);
  const logout = authStore((store) => store.logout);

  const handleLogout = () => {
    logout();
  };

  if (!user) return null;

  return (
    <>
      <Flex
        w={"100%"}
        flexDirection={"row"}
        justify={"space-between"}
        align={"center"}
        p={"1rem"}
      >
        <Image
          src="/images/logoLargeDark.png"
          alt="RevUpLogo.png"
          h={"30px"}
          display={{ base: "none", md: "block" }}
        />

        <Image
          src="/images/logoSmallDark.png"
          alt="RevUpLogo.png"
          h={"30px"}
          display={{ base: "block", md: "none" }}
        />

        <Flex flexDirection={"row"} gap={{ base: 5, md: 10 }}>
          <Link
            to={"/home?mode=mycar"}
            as={RouterLink}
            px={{ base: "1rem", md: "2rem" }}
            py={"0.5rem"}
            border={"2px solid black"}
            borderRadius={10}
            fontWeight={600}
            fontSize={{ base: 12, md: 14, lg: 16 }}
            color={currentMode === "mycar" ? "#FFF" : "#000"}
            backgroundColor={currentMode === "mycar" ? "#000" : "transparent"}
            _hover={{ backgroundColor: "#000", color: "#FFF" }}
          >
            <Text>My Car</Text>
          </Link>

          <Link
            className={"homeLink"}
            to={"/home?mode=forum"}
            as={RouterLink}
            px={{ base: "1rem", md: "2rem" }}
            py={"0.5rem"}
            border={"2px solid black"}
            borderRadius={10}
            fontWeight={600}
            fontSize={{ base: 12, md: 14, lg: 16 }}
            color={currentMode === "forum" ? "#FFF" : "#000"}
            backgroundColor={currentMode === "forum" ? "#000" : "transparent"}
            _hover={{ backgroundColor: "#000", color: "#FFF" }}
          >
            <Text>Forum</Text>
          </Link>
        </Flex>

        <Flex flexDirection={"row"} gap={3}>
          <Link to={"/auth?mode=login"} as={RouterLink} onClick={handleLogout}>
            <Box color={"#000"} _hover={{ color: "#90030C" }}>
              <TbLogout2 size={"30px"} />
            </Box>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeBar;
