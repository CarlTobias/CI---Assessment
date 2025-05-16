import { Flex } from "@chakra-ui/react";
import ForumPost from "../ForumPost/ForumPost";

const ForumPosts = () => {
  return (
    <>
      <Flex flexDirection={"column"} align={"center"} >
        <ForumPost />
        <ForumPost />
        <ForumPost />
      </Flex>
    </>
  );
};

export default ForumPosts;
