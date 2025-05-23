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
          fontSize={{ base: "2xl", md: "xl", lg: '2xl', xl: "2xl" }}
          color={"#ffffff"}
          fontWeight={500}
        >
          Online Forum
        </Box>

        <Flex flexDirection="column" gap={10}>
          <Flex
            justify="center"
            align="center"
            gap={2}
            w="100%"
            p={6}
            borderRadius={100}
            boxShadow="0 4px 7px rgba(0, 0, 0, 0.3)"
            backgroundColor={"#FFFFFF"}
            cursor="pointer"
            
            onClick={onOpen}
          >
            <Avatar size="md" />
            <Input
              border="0px"
              borderRadius={50}
              placeholder="What's on your mind?"
              backgroundColor={"#E5E5E5"}
              pointerEvents="none"
              _placeholder={{ color: "gray.600" }}
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
