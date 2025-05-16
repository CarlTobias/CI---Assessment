import { Avatar, Box, Flex, Input } from "@chakra-ui/react";
import ForumPosts from "./ForumPosts/ForumPosts";

const ForumOnline = () => {
  return (
    <>
      <Flex flexDirection={"column"} w={"40vw"} h={"100vh"} gap={3} justify={"start"}>
        <Box className={"titleTextForum"} w={"100%"} fontSize={32}>
          Online Forum
        </Box>

        <Flex w={"100%"} borderRadius={5} boxShadow={"2xl"}>
          <Flex justify={"center"} align={"center"} gap={2} w={"100%"} p={5}>
            <Avatar size={"lg"} />
            <Input
              border={"0px"}
              placeholder={"What's on your mind?"}
            />
          </Flex>
        </Flex>

        <ForumPosts />
      </Flex>
      {/* Fix */}
    </>
  );
};

export default ForumOnline;
