import React from 'react'
import { Box, Container, Flex, VStack, Button, Heading } from "@chakra-ui/react";
import CarQuickCard from './CarQuickCard/CarQuickCard';
import CarDocument from './CarDocument/CarDocument';
import { AddIcon } from "@chakra-ui/icons";

const MyCar = () => {
  return (
    <Container maxW="100vw" py={6} px={6}>
      <Flex
        gap={4}
        flexDirection={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        mb={5}
        pb={5}
        borderBottom="4px solid #EFEFEF">

        <Heading as="h1" size="xl">
          My Vehicles
        </Heading>

        <Flex gap={4}>
          <Button
            bg="white"
            color="#505050"
            size="md"
            border="3px solid"
            borderColor="#EFEFEF"
            px="1.5rem"
            _hover={{ bg: "#EFEFEF" }}
          >
            Export Car list
          </Button>

          <Button leftIcon={<AddIcon />} bg="#90030C" color='white' variant="solid" _hover={{ bg: "#680107" }}>
            Add Vehicle
          </Button>
        </Flex>
      </Flex>
      <Flex m={10}>
        <Box mx={2}><CarQuickCard /></Box>
        <Box mx={2}><CarQuickCard /></Box>
        <Box mx={2}><CarQuickCard /></Box>
      </Flex>
      

      
      <Box >
        <Heading as="h1" size="xl" mb={5} pb={5} 
        borderBottom="4px solid #EFEFEF">
        Documents
        </Heading>
        
        <Box w={'100%'}>
          <Box mx={2} my={5}><CarDocument /></Box>
          <Box mx={2} my={5}><CarDocument /></Box>
          <Box mx={2} my={5}><CarDocument /></Box>
        </Box>
        
      
      </Box>
      
      
      <Flex
        gap={10}
        flexDirection={{ base: "column", md: "row" }}
        justify="space-around"
        align="start"
      >
        <Box display={{ base: "none", md: "block" }} flex={1}></Box>

        <Box w="100vw" flex={2} display="flex" flexDirection="column" gap={6}>
          
        </Box>
        
        <Box display={{ base: "none", md: "block" }} flex={1}></Box>
        
      
      
      </Flex>
    </Container>
  );
};

export default MyCar;
