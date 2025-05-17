import React, { useState } from "react";
import {
  Box,
  Badge,
  Text,
  Flex,
  IconButton,
  Divider,
  Button,
  HStack,
  VStack,
  Input,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import { FiMoreVertical } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// STATUS DOT
const StatusDot = ({ color }) => (
  <Box as={FaCircle} color={color} boxSize={2} mr={2} />
);

// ROW COMPONENT
const DocumentRow = ({ label, statusColor, oldDate, newDate }) => {
  const [startDate, setStartDate] = useState(new Date(oldDate));
  const [endDate, setEndDate] = useState(new Date(newDate));

  return (
    <Flex
      align="center"
      justify="space-between"
      w="100%"
      py={2}
      borderBottom="1px solid"
      borderColor="gray.200"
      flexWrap="wrap"
    >
      <Flex align="center" w="20%">
        <StatusDot color={statusColor} />
        <Text>{label}</Text>
      </Flex>

      <Flex align="center" w="25%">
        <Text fontSize="sm" color="gray.500" mr={2}>
          Issue Date
        </Text>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MMMM d, yyyy"
          className="chakra-input css-1c6xjby"
        />
      </Flex>

      <Flex align="center" w="25%">
        <Text fontSize="sm" color="gray.500" mr={2}>
          New Expiry
        </Text>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="MMMM d, yyyy"
          className="chakra-input css-1c6xjby"
        />
      </Flex>

      <Button colorScheme="blue" size="sm" mr={2}>
        Upload New File
      </Button>

      <IconButton
        icon={<DownloadIcon />}
        size="sm"
        variant="ghost"
        aria-label="Download"
      />
    </Flex>
  );
};

// MAIN CARD
const EditableCarCard = () => {
  return (
    <Box
      borderLeft="4px solid"
      borderColor="red.300"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      p={4}
      fontFamily='Poppins'
    >
      {/* Header */}
      <Flex
        justify="space-between"
        align="center"
        bg="gray.50"
        p={3}
        borderRadius="md"
      >
        <Box>
          <Text fontWeight="bold" fontSize="lg">
            Nissan Altima
          </Text>
          <HStack mt={1}>
            <Badge colorScheme="red" borderRadius="full" px={2}>
              2
            </Badge>
            <Badge colorScheme="red" borderRadius="full" px={2}>
              Document Pending
            </Badge>
          </HStack>
        </Box>
        <IconButton icon={<FiMoreVertical />} variant="ghost" aria-label="Options" />
      </Flex>

      {/* Info Inputs */}
      <Flex mt={4} gap={4} flexWrap="wrap">
        <Box flex="1">
          <Text fontSize="sm"  mb={1}>
            Brand
          </Text>
          <Input fontWeight="bold" placeholder="i.e. Nissan, Toyota, Honda, etc." />
        </Box>
        <Box flex="1">
          <Text fontSize="sm" fontWeight={"bold"} mb={1}>
            Model
          </Text>
          <Input fontWeight="bold" placeholder="i.e. Altima, Camry, Civic, etc." />
        </Box>
        <Box flex="1">
          <Text fontSize="sm" mb={1}>
            Year
          </Text>
          <Input fontWeight="bold" placeholder="Car Year" />
        </Box>
        <Box flex="1">
          <Text fontSize="sm" mb={1}>
            Milage
          </Text>
          <Input fontWeight="bold" placeholder="Current Car Milage" />
        </Box>
      </Flex>

      <Divider my={4} />

      {/* Document Rows */}
      <VStack spacing={0} align="stretch">
        <DocumentRow
          label="Car Registration"
          statusColor="green.400"
          oldDate="October 24, 2024"
          newDate="October 25, 2025"
        />
        <DocumentRow
          label="Insurance Expiry"
          statusColor="red.400"
          oldDate="October 24, 2024"
          newDate="October 25, 2025"
        />
        <DocumentRow
          label="License Renewal"
          statusColor="red.400"
          oldDate="October 24, 2024"
          newDate="October 25, 2025"
        />
      </VStack>
    </Box>
  );
};

export default EditableCarCard;
