import React from "react";

import { Avatar, Box, Flex, Input } from "@chakra-ui/react";

const ForumNearMe = () => {
  return (
    <Flex border={"2px solid green"} w={"25vw"} justify={"center"}>
      <Flex className={"titleTextForum"} w={"100vw"} fontSize={32}>Garages Near Me</Flex>
    </Flex>
  );
};

export default ForumNearMe;
