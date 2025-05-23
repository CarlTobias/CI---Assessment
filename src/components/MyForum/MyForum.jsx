import { Box, Container, Flex } from "@chakra-ui/react";

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
          <Box justify={"center"} w={"100%"}>
            <ForumOnline />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default MyForum;
