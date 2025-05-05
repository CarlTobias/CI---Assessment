import React from "react";

import { Flex } from "@chakra-ui/react";

import ForumNearMe from "./ForumNearMe/ForumNearMe";
import ForumOnline from "./ForumOnline/ForumOnline";
import ForumMessages from "./ForumMessages/ForumMessages";

const MyForum = () => {
  return (
    <>
      <Flex
        flex={1}
        minW={"100vw"}
        flexDirection={"row"}
        justify={"space-around"}
      >
        <ForumNearMe />
        <ForumOnline />
        <ForumMessages />
      </Flex>
    </>
  );
};

export default MyForum;
