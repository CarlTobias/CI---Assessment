import React from "react";

import { Flex } from "@chakra-ui/react";
import Garages from "../Garages/Garages";

const GaragesNearMe = () => {
  return (
    <>
      <Flex flexDirection={"column"} align={"center"}>
        <Garages />
        <Garages />
        <Garages />
      </Flex>
    </>
  );
};

export default GaragesNearMe;
