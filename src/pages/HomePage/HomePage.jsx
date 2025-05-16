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

        {mode === "forum" ? <MyForum /> : <MyCar />}
      </Flex>
    </>
  );
};

export default HomePage;
