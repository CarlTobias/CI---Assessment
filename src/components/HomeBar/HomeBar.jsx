import React from "react";

import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { IoMdSettings } from "react-icons/io";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";

const HomeBar = () => {
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

        <Flex className={"HomeBarText"} flexDirection={"row"} gap={10}>
          <Link
            className={"homeLink"}
            to={"/home?mode=mycar"}
            as={RouterLink}
            px={"2rem"}
            py={"0.5rem"}
            border={"2px solid black"}
            borderRadius={10}
            _hover={{ backgroundColor: "#000", color: "#FFF" }}
            _active={{ backgroundColor: "#000", color: "#FFF" }}
          >
            <Text>My Car</Text>
          </Link>

          <Link
            className={"homeLink"}
            to={"/home?mode=forum"}
            as={RouterLink}
            px={"2rem"}
            py={"0.5rem"}
            border={"2px solid black"}
            borderRadius={10}
            _hover={{ backgroundColor: "#000", color: "#FFF" }}
            _active={{ backgroundColor: "#000", color: "#FFF" }}
          >
            <Text>Forum</Text>
          </Link>
        </Flex>

        <Flex flexDirection={"row"} gap={3}>
          <Link to={"/help"} as={RouterLink}>
            <HiOutlineQuestionMarkCircle color={"#000"} size={"30px"} />
          </Link>

          <Link to={"/settings"} as={RouterLink}>
            <IoMdSettings color={"#000"} size={"30px"} />
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeBar;
