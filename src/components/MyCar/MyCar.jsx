import React from 'react'
import { Box, Container, Flex } from "@chakra-ui/react";

const MyCar = () => {
  return (
    <>
          <Container maxW={"100vw"}>
            <Flex
              gap={10}
              flexDirection={"row"}
              justify={"space-around"}
            >
              <Box display={{ base: "none", md: "block" }} 
              flex={1}
              border="1px"
              borderColor="gray.300"
              borderRadius="md"
              p={4}>
                <h1>nigga1</h1>
              </Box>
    
              <Box justify={"center"} w={"100%"} flex={2}>
                <h1>nigga2</h1>
              </Box>
    
              <Box display={{ base: "none", md: "block" }} flex={3}>
                <h1>nigga3</h1>
              </Box>
              {/* <Flex w={"25vw"} /> */}
            </Flex>
          </Container>
        </>
  )
}

export default MyCar