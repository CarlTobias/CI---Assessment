import { Avatar, Box, Button, Flex } from "@chakra-ui/react";

const ForumPost = () => {
  return (
    <>
      <Flex w={"100%"} flexDirection={"column"} gap={5} mb={10} p={5} boxShadow={"xl"}>
        <Box>Title Text Placeholder</Box>
        <Flex w={"100%"} flexDirection={"column"} gap={2} ml={10}>
          <Flex gap={3}>
            <Avatar />
            <Flex flexDirection={"column"}>
              <Box>Name Placeholder</Box>
              <Box>Location Placeholder</Box>
            </Flex>
          </Flex>

          <Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos
            voluptates recusandae minus mollitia molestiae laudantium quo!
            Provident eligendi mollitia blanditiis nam perferendis facilis
            nihil?
          </Box>
        </Flex>

        <Flex w={"100%"} ml={10}>
            <Button>Add Response</Button>
        </Flex>
      </Flex>
    </>
  );
};

export default ForumPost;
