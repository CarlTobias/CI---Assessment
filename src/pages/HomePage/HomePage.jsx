import React from "react";
import "../../index.css";

import { Flex } from "@chakra-ui/react";
import HomeBar from "../../components/HomeBar/HomeBar";
import MyForum from "../../components/MyForum/MyForum";

const HomePage = () => {
  return (
    <>
      <Flex minH={"100vh"} flexDirection={"column"}>
        <HomeBar />

        {/* These will be navigated similar to how it is in the auth page with sign up and sign in */}
        {/* <MyCar /> */}
        {/* <MyForum /> (default landing after login) */}
        <MyForum />
      </Flex>
    </>
  );
};

export default HomePage;
