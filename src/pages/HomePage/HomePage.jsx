import React from "react";
import "../../index.css";

import { Flex } from "@chakra-ui/react";
import HomeBar from "../../components/HomeBar/HomeBar";
import MyForum from "../../components/MyForum/MyForum";
import MyCar from "../../components/MyCar/MyCar";

const HomePage = () => {
  return (
    <>
      <Flex minH={"100vh"} flexDirection={"column"}>
        <HomeBar />

        {/* These will be navigated similar to how it is in the auth page with sign up and sign in */}
        {/* <MyCar /> */}
        <MyCar />
        {/* <MyForum /> (default landing after login) */}
        <MyForum />
      </Flex>
    </>
  );
};

export default HomePage;
