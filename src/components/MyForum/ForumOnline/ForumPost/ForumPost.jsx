import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";

const ForumPost = () => {
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
          Title Text Placeholder
        </Box>
        <Flex w={"100%"} flexDirection={"column"} gap={2}>
          <Flex gap={3}>
            <Avatar size={{ base: "md", md: "lg" }} />
            <Flex flexDirection={"column"} justify={"center"}>
              <Box fontWeight={500} fontSize={{ base: "md", md: "lg" }}>
                Name Placeholder
              </Box>
              <Box fontWeight={300} fontSize={"sm"}>
                Location Placeholder
              </Box>
            </Flex>
          </Flex>

          <Text w={"100%"} fontWeight={400} fontSize={{ base: "md", md: "lg" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos
            voluptates recusandae minus mollitia molestiae laudantium quo!
            Provident eligendi mollitia blanditiis nam perferendis facilis
            nihil?
          </Text>
        </Flex>

        <Flex w={"100%"} justify={"end"}>
          <Button
            backgroundColor={"#292929"}
            color={"#FFF"}
            _hover={{ backgroundColor: "#90030C" }}
          >
            Add Response
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default ForumPost;
