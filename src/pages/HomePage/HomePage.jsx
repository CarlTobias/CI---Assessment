import React from "react";
import "../../index.css";

import { Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

import HomeBar from "../../components/HomeBar/HomeBar";
import MyCar from "../../components/MyCar/MyCar";
import MyForum from "../../components/MyForum/MyForum";
import MyCar from "../../components/MyCar/MyCar";

const HomePage = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }

  const query = useQuery();
  const mode = query.get("mode");

  return (
    <>
      <Flex minH={"100vh"} flexDirection={"column"}>
        <HomeBar />

<<<<<<< HEAD
        {/* These will be navigated similar to how it is in the auth page with sign up and sign in */}
        {/* <MyCar /> */}
        <MyCar />
        {/* <MyForum /> (default landing after login) */}
        <MyForum />
=======
        {mode === "forum" ? <MyForum /> : <MyCar />}
>>>>>>> 0b67a9774c1a3917a1b1855c257c732c41d7567c
      </Flex>
    </>
  );
};

export default HomePage;
