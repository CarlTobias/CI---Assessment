import { useState } from "react";
import { AspectRatio, Box, Flex, Image } from "@chakra-ui/react";

import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";

const Garages = () => {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(!saved);
  };

  return (
    <>
      <Flex
        w={"100%"}
        flexDirection={"column"}
        gap={5}
        mb={5}
        p={3}
        borderRadius={5}
        boxShadow={"xl"}
        backgroundColor={"#F5F5F5"}
        border={"0.5px solid #000"}
      >
        <Flex w={"100%"} flexDirection={"column"} gap={2}>
          <Flex gap={3} align={"stretch"}>
            <Flex
              align="center"
              justify="center"
              w={{ lg: "0", xl: "50%" }}
              display={{ lg: "none", xl: "flex" }}
            >
              <AspectRatio ratio={1} w="100%">
                <Image
                  src={"/images/garageImagePlaceholder.jpg"}
                  alt="img.jpeg"
                  w="100%"
                  h="100%"
                  borderRadius={5}
                  objectFit="cover"
                />
              </AspectRatio>
            </Flex>

            <Flex
              flexDirection={{ md: "row-reverse", xl: "column" }}
              gap={{ md: 3, xl: 0 }}
              w={"100%"}
              minH={"100%"}
              justify={"space-between"}
            >
              <Flex justify={"right"} align={{ md: "center", xl: "flex-end" }}>
                <Box
                  fontSize={{ md: 20, lg: 26, xl: 28 }}
                  color={saved ? "#90030C" : "black"}
                  _hover={{ color: "#90030C" }}
                  onClick={handleSave}
                >
                  {saved ? <FaBookmark /> : <FaRegBookmark />}
                </Box>
              </Flex>

              <Flex flexDirection={"column"}>
                <Box fontWeight={700} fontSize={{ md: 16, lg: 24 }}>
                  Garage Placeholder
                </Box>
                <Box fontWeight={400} fontSize={{ md: "sm", lg: 16 }}>
                  Location Placeholder
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Garages;
