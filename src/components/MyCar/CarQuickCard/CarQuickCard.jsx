// components/CarQuickCard.js
import {
  Box,
  Badge,
  Text,
  Flex,
  IconButton,
  Divider,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

const StatusDot = ({ color }) => (
  <Box
    w="10px"
    h="10px"
    borderRadius="full"
    bg={color}
    mr={2}
  />
);

const CarQuickCard = () => {
  return (
    <Box
      borderLeft="4px solid"
      borderColor="red.300"
      borderRadius="lg"
      overflow="hidden"
      fontFamily='Poppins'
      p={4}
      bg="white"
      shadow="md"
      maxW="sm"
    >
      <Flex justify="space-between" align="center">
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Nissan Altima
          </Text>
          <HStack spacing={2} mt={1}>
            <Badge colorScheme="red" borderRadius="full" px={2}>
              1
            </Badge>
            <Badge colorScheme="red" borderRadius="full" px={2}>
              Document Pending
            </Badge>
          </HStack>
          <Text mt={1} fontSize="sm" color="gray.600">
            Owner - Raven Baylon
          </Text>
        </Box>
        <IconButton variant="ghost" icon={<DownloadIcon />} aria-label="Options" />
      </Flex>

      <Divider my={4} />

      <Flex justify="space-between">
        <VStack align="start">
          <Text fontSize="sm" color="gray.500">Milage</Text>
          <Text fontWeight="bold">222,000 km</Text>
        </VStack>
        <VStack align="start">
          <Text fontSize="sm" color="gray.500">Model</Text>
          <Text fontWeight="bold">2012</Text>
        </VStack>
      </Flex>

      <Divider my={4} />

      <VStack align="start" spacing={3}>
        <Flex justify="space-between" w="100%" align="center">
          <HStack>
            <StatusDot color="green.400" />
            <Text>Car Registration</Text>
          </HStack>
          <HStack>
            <Text fontSize="sm" color="gray.500">
              10|24|2024 - 10|23|2025
            </Text>
             <IconButton variant="ghost" icon={<DownloadIcon />} aria-label="Options" />
          </HStack>
        </Flex>

        <Flex justify="space-between" w="100%" align="center">
          <HStack>
            <StatusDot color="red.400" />
            <Text>Insurance Expiry</Text>
          </HStack>
          <Button size="xs" colorScheme="blue">
            Upload File
          </Button>
        </Flex>

        <Flex justify="space-between" w="100%" align="center">
          <HStack>
            <StatusDot color="red.400" />
            <Text>License Renewal</Text>
          </HStack>
          <HStack>
            <Text fontSize="sm" color="gray.500">
              10|24|2024 - 10|23|2025
            </Text>
             <IconButton variant="ghost" icon={<DownloadIcon />} aria-label="Options" />
          </HStack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default CarQuickCard;
