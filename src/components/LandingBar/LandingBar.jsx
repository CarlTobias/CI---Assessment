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
        p={"0.5rem"}
        pt={"1rem"}
      >
        <Image
          src="/images/logoLargeLight.png"
          alt="RevUpLogo.png"
          h={"45px"}
          display={{ base: "none", md: "block" }}
        />

        <Image
          src="/images/logoSmallLight.png"
          alt="RevUpLogo.png"
          h={"45px"}
          display={{ base: "block", md: "none" }}
        />

        <Flex
          className={"landingBarText"}
          flexDirection={"row"}
          gap={3}
          pr={"0.5rem"}
        >
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
