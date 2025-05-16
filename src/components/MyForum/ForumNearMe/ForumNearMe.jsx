import { Box, Flex } from "@chakra-ui/react";
import GaragesNearMe from "./GaragesNearMe/GaragesNearMe";

const ForumNearMe = () => {
  return (
    <>
      <Flex flexDirection={"column"} gap={5} justify={"center"}>
        <Box
          w={"100%"}
          fontWeight={600}
          fontSize={{ md: "xl", lg: 28, xl: "4xl" }}
          color={"#000"}
        >
          Garages Near Me
        </Box>

        <Flex flexDirection={"column"} gap={10}>
          <GaragesNearMe />
        </Flex>
      </Flex>
    </>
  );
};

export default ForumNearMe;
