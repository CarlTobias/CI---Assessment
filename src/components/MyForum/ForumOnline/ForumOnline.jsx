import React from "react";

import { Avatar, Box, Flex, Input } from "@chakra-ui/react";

const ForumOnline = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        border={"2px solid red"}
        w={"40vw"}
        h={"100vh"}
        justify={"top"}
      >
        <Box className={"titleTextForum"} w={"100%"} fontSize={32}>
          Online Forum
        </Box>

        <Flex w={"100%"}>
          <Box w={"100%"} p={5}>
            <Avatar size={"lg"} />
            <Input  />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default ForumOnline;
