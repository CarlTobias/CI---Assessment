import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
  Wrap,
  WrapItem,
  Tag,
} from "@chakra-ui/react";

const MyGarages = () => {
  const services = [
    "Denting and Painting",
    "Spare Parts",
    "Recovery Service",
    "Electric & Diagnose",
    "Transmission Repair",
    "Mechanic Repair",
    "A/C Services",
    "Vehicle Services",
  ];

  return (
    <Container maxW="container.md" py={8}>
      <Heading size="xl" mb={6} textAlign="center">
        My Garages
      </Heading>

      <VStack spacing={6}>
        <Box
          p={5}
          boxShadow="lg"
          borderRadius="md"
          bg="gray.50"
          w="100%"
        >
          <Heading size="md" mb={2}>
            <Link
              href="https://g.co/kgs/ftWqPhm"
              isExternal
              color="blue.600"
              _hover={{ textDecoration: "underline", color: "blue.800" }}
            >
              Radiant Car Workshop
            </Link>
          </Heading>

          <Text fontWeight="semibold" mb={2}>
            Services Available:
          </Text>

          <Wrap mb={4}>
            {services.map((service, index) => (
              <WrapItem key={index}>
                <Tag
                  variant="solid"
                  colorScheme="blue"
                  fontSize="sm"
                  px={3}
                  py={1}
                  borderRadius="full"
                >
                  {service}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>

          <Text><strong>Location:</strong> Al Rashdyah, Opposite Dubai Festival City</Text>
          <Text><strong>Timing:</strong> Monday to Friday: 08:30 am to 08:00 pm | Saturday: 08:30 am to 05:00 pm | Sunday closed</Text>
          <Text><strong>Contact:</strong> +971 4 2863836</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default MyGarages;
