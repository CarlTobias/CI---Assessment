import React from "react";

import { Flex } from "@chakra-ui/react";
import UserDocument from "../UserDocument/UserDocument";

const UserDocuments = () => {
  return (
    <>
      <Flex flexDirection={"column"} w={"100%"} gap={3} p={5}>
        <UserDocument />
        <UserDocument />
        <UserDocument />
      </Flex>
    </>
  );
};

export default UserDocuments;
