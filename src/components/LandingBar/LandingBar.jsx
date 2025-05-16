import React from "react";
import "../../index.css";

import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const LandingBar = () => {
  return (
    <>
      <Flex
        w={"100%"}
        flexDirection={"row"}
        justify={"space-between"}
        align={"center"}
        p={"3rem"}
       
      >
        <Image
          src="/images/logoLargeLight.png"
          alt="RevUpLogo.png"
          h={"30px"}
          display={{ base: "none", md: "block" }}
        />

        <Image
          src="/images/logoSmallLight.png"
          alt="RevUpLogo.png"
          h={"30px"}
          display={{ base: "block", md: "none" }}
        />

        <Flex flexDirection={"row"} gap={3} fontWeight={600} color={"#FFF"}>
          <Link to={"/auth?mode=signup"} as={RouterLink}>
            <Text>Sign Up</Text>
          </Link>

          <Text>|</Text>

          <Link to={"/auth?mode=login"} as={RouterLink}>
            <Text>Log In</Text>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default LandingBar;
