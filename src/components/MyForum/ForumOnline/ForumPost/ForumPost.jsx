import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import AddResponse from "../AddResponse/AddResponse";

const ForumPost = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        w={"100%"}
        flexDirection={"column"}
        gap={5}
        mb={5}
        p={5}
        borderRadius={5}
        boxShadow={"xl"}
        backgroundColor={"#F5F5F5"}
        border={"0.5px solid #000"}
      >
        <Box fontWeight={700} fontSize={32}>
          {post.title}
        </Box>
        <Flex w={"100%"} flexDirection={"column"} gap={2}>
          <Flex gap={3}>
            <Avatar
              size={{ base: "md", md: "lg" }}
              src={post.author?.profilePic}
            />
            <Flex flexDirection={"column"} justify={"center"}>
              <Box fontWeight={500} fontSize={{ base: "md", md: "lg" }}>
                {post.author?.username}
              </Box>
              <Box fontWeight={300} fontSize={"sm"}>
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Box>
            </Flex>
          </Flex>

          <Text w={"100%"} fontWeight={400} fontSize={{ base: "md", md: "lg" }}>
            {post.content}
          </Text>
        </Flex>

        <Flex w={"100%"} justify={"end"}>
          <Button
            backgroundColor={"#292929"}
            color={"#FFF"}
            _hover={{ backgroundColor: "#90030C" }}
            onClick={onOpen}
          >
            Add Response
          </Button>
        </Flex>

        <AddResponse isOpen={isOpen} onClose={onClose} />
      </Flex>
    </>
  );
};

export default ForumPost;
