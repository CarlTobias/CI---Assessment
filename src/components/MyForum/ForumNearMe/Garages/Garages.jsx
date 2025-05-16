import { AspectRatio, Box, Button, Flex, Image } from "@chakra-ui/react";

import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";

const Garages = () => {
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
          <Flex gap={3}>
            <AspectRatio ratio={1} w={{ lg: "0", xl: "50%" }} h={"100%"}>
              <Image
                src={"/images/garageImagePlaceholder.jpg"}
                alt="img.jpeg"
                w={"50%"}
                h={"100%"}
                borderRadius={5}
                objectFit={"cover"}
                display={{ lg: "none", xl: "block" }}
              />
            </AspectRatio>

            <Flex
              flexDirection={{ md: "row-reverse", xl: "column" }}
              w={"100%"}
              minH={"100%"}
              justify={"space-between"}
            >
              <Flex justify={"right"} align={{md: "center", xl: "flex-end"}}>
                <Box>
                  <FaRegBookmark />
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
