import { Box, Container, Flex } from "@chakra-ui/react";

import ForumNearMe from "./ForumNearMe/ForumNearMe";
import ForumOnline from "./ForumOnline/ForumOnline";

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

          {/* Make only ForumOnline Scrollable */}
          <Box justify={"center"} w={"100%"} flex={3}>
            <ForumOnline />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default MyForum;
