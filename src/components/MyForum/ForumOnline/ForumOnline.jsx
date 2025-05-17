import { Avatar, Box, Flex, Input, useDisclosure } from "@chakra-ui/react";
import ForumPosts from "./ForumPosts/ForumPosts";
import AddForumPost from "./AddForumPost/AddForumPost";

const ForumOnline = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex flexDirection={"column"} gap={5} justify={"center"}>
        <Box
          w={"100%"}
          fontWeight={600}
          fontSize={{ base: "4xl", md: "2xl", lg: 28, xl: "4xl" }}
          color={"#000"}
        >
          Online Forum
        </Box>

        <Flex flexDirection="column" gap={10}>
          <Flex
            justify="center"
            align="center"
            gap={2}
            w="100%"
            p={5}
            borderRadius={5}
            boxShadow="2xl"
            border="0.5px solid #000"
            cursor="pointer"
            onClick={onOpen}
          >
            <Avatar size="lg" />
            <Input
              border="0px"
              placeholder="What's on your mind?"
              pointerEvents="none"
              _placeholder={{ color: "gray.500" }}
            />
          </Flex>

          <ForumPosts />
        </Flex>
        <AddForumPost isOpen={isOpen} onClose={onClose} />
      </Flex>
    </>
  );
};

export default ForumOnline;
