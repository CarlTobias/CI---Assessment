import { Box, Button, Flex } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";

const UserDocument = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        align={"center"}
        gap={5}
        p={5}
        border={"solid 2px black"}
        borderRadius={10}
      >
        <Flex
          w={"100%"}
          justify={"space-between"}
          align={"center"}
          backgroundColor={"gray.200"}
        >
          <Box pl={3}>Car Brand and Model Placeholder</Box>

          <Button>
            <BsThreeDotsVertical />
          </Button>
        </Flex>

        <Flex w={"100%"} justify={"space-between"}>
          <Flex flexDirection={"column"}>
            <Box>Brand</Box>

            <Box>Brand Placeholder</Box>
          </Flex>

          <Flex flexDirection={"column"}>
            <Box>Model</Box>

            <Box>Model Placeholder</Box>
          </Flex>

          <Flex flexDirection={"column"}>
            <Box>Plate Number</Box>

            <Box>ZZ 16313</Box>
          </Flex>

          <Flex flexDirection={"column"}>
            <Box>Year</Box>

            <Box>2025</Box>
          </Flex>

          <Flex flexDirection={"column"}>
            <Box>Mileage</Box>

            <Box>100,000 km</Box>
          </Flex>
        </Flex>

        {/* <Box w={"100%"} h={"1px"} backgroundColor={"gray.400"} /> */}

        <Flex flexDirection={"column"}>
            <Flex></Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default UserDocument;
