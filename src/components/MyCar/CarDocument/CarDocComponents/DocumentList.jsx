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
  useToast,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";

const StatusDot = ({ color }) => (
  <Box w="10px" h="10px" borderRadius="full" bg={color} mr={2} />
);

const CarQuickCard = ({ vehicle }) => {
  const [insuranceFile, setInsuranceFile] = useState(null);
  const [registrationFile, setRegistrationFile] = useState(new Blob(["Car registration document"], { type: "text/plain" }));
  const [licenseFile, setLicenseFile] = useState(new Blob(["License renewal document"], { type: "text/plain" }));

  const insuranceInputRef = useRef(null);
  const toast = useToast();

  const handleInsuranceChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setInsuranceFile(selected);
      toast({
        title: "File uploaded",
        description: `${selected.name}`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const triggerInsuranceUpload = () => {
    if (insuranceInputRef.current) {
      insuranceInputRef.current.click();
    }
  };

  const handleDownload = (file, label) => {
    if (file) {
      const url = URL.createObjectURL(file);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${label}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({
        title: "Download started",
        description: `${label}.txt`,
        status: "info",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "No file to download",
        description: `Please upload a file for ${label}`,
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  if (!vehicle) return null;

  return (
    <Box
      borderLeft="4px solid"
      borderColor="red.300"
      borderRadius="lg"
      overflow="hidden"
      fontFamily="Poppins"
      p={4}
      bg="white"
      shadow="md"
      maxW="sm"
    >
      {/* Header */}
      <Flex justify="space-between" align="center">
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            {vehicle.make} {vehicle.model}
          </Text>
        </Box>
      </Flex>

      <Divider my={4} />

      {/* Mileage and Year */}
      <Flex justify="space-between">
        <VStack align="start">
          <Text fontSize="sm" color="gray.500">Mileage</Text>
          <Text fontWeight="bold">{vehicle.mileage || "N/A"} km</Text>
        </VStack>
        <VStack align="start">
          <Text fontSize="sm" color="gray.500">Year</Text>
          <Text fontWeight="bold">{vehicle.year || "N/A"}</Text>
        </VStack>
      </Flex>

      <Divider my={4} />

      {/* Document Rows */}
      <VStack align="start" spacing={3}>
        {/* Car Registration */}
        <Flex justify="space-between" w="100%" align="center">
          <HStack>
            <StatusDot color="green.400" />
            <Text>Car Registration</Text>
          </HStack>
          <HStack>
            <IconButton
              variant="ghost"
              icon={<DownloadIcon />}
              aria-label="Download"
              onClick={() => handleDownload(registrationFile, "CarRegistration")}
            />
          </HStack>
        </Flex>

        {/* Insurance Expiry*/}
        <Flex justify="space-between" w="100%" align="center">
          <HStack>
            <StatusDot color="green.400" />
            <Text>Insurance Expiry</Text>
          </HStack>
          <HStack>
            <IconButton
              variant="ghost"
              icon={<DownloadIcon />}
              aria-label="Download"
              onClick={() => handleDownload(licenseFile, "LicenseRenewal")}
            />
          </HStack>
        </Flex>

        {/* License Renewal */}
        <Flex justify="space-between" w="100%" align="center">
          <HStack>
            <StatusDot color="green.400" />
            <Text>License Renewal</Text>
          </HStack>
          <HStack>
            <IconButton
              variant="ghost"
              icon={<DownloadIcon />}
              aria-label="Download"
              onClick={() => handleDownload(licenseFile, "LicenseRenewal")}
            />
          </HStack>
        </Flex>
      </VStack>
      <Button px='3vw' m={1}>Open Document</Button>
    </Box>
  );
};

export default CarQuickCard;
