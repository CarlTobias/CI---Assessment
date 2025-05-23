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
          bg='#292929'
          borderRadius={10}
          margin={5}
          p={10}
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