import { Avatar, Box, Flex, Input } from "@chakra-ui/react";
import ForumPosts from "./ForumPosts/ForumPosts";

const ForumOnline = () => {
  return (
    <>
      <Flex flexDirection={"column"} gap={5} justify={"center"}>
        <Box
          w={"100%"}
          fontWeight={600}
          fontSize={{ base: "lg", md: "xl", lg: 28, xl: "4xl" }}
          color={"#000"}
        >
          Online Forum
        </Box>

        <Flex flexDirection={"column"} gap={10}>
          <Flex
            justify={"center"}
            align={"center"}
            gap={2}
            w={"100%"}
            p={5}
            borderRadius={5}
            boxShadow={"2xl"}
            border={"0.5px solid #000"}
          >
            <Avatar size={"lg"} />
            <Input border={"0px"} placeholder={"What's on your mind?"} />
          </Flex>

          <ForumPosts />
        </Flex>
      </Flex>
    </>
  );
};

export default ForumOnline;
