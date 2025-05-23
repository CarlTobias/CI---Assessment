import { useState } from "react";
import {
  Box,
  Container,
  Flex,
  VStack,
  Button,
  Heading,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import UserDocuments from "./UserDocuments/UserDocuments";

const MyCar = () => {
  return (
    <>
      <Flex flexDirection={"column"} justify={"center"} align={"center"}>
        <Flex w={"100%"} justify={"space-between"} align={"center"} px={5}>
          <Box>Documents</Box>
          <Button>Add Vehicle</Button>
        </Flex>

        <UserDocuments />
      </Flex>
    </>
  );
};

export default MyCar;
