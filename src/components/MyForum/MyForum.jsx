import { Box, Container, Flex } from "@chakra-ui/react";

import ForumNearMe from "./ForumNearMe/ForumNearMe";
import ForumOnline from "./ForumOnline/ForumOnline";
import ForumMessages from "./ForumMessages/ForumMessages";

const MyForum = () => {
  return (
    <>
      <Container maxW={"100vw"}>
        <Flex
          gap={10}
          flexDirection={"row"}
          justify={"space-around"}
        >
          <Box display={{ base: "none", md: "block" }} flex={1}>
            <ForumNearMe />
          </Box>

          <Box justify={"center"} w={"100%"} flex={2}>
            <ForumOnline />
          </Box>

          <Box display={{ base: "none", md: "block" }} flex={1}>
            <ForumMessages />
          </Box>
          {/* <Flex w={"25vw"} /> */}
        </Flex>
      </Container>
    </>
  );
};

export default MyForum;
