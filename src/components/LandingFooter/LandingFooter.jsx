import {
  Box,
  Text,
  Button,
  HStack,
  Divider,
  Icon,
  Link,
  Flex,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const LandingFooter = () => {
  return (
    <Box bg="#141414" color="white" px={{ base: "1.5rem", md: "4rem" }} py="3rem">
      {/* Top Section */}
      <Box maxW="400px" mb="2rem">
        <Text fontSize="lg" fontWeight="medium" mb="1rem">
          Let’s Rev-Up
        </Text>

        <Text fontSize="2xl" fontWeight="bold" mb="1.5rem">
          Let’s Get Started
        </Text>

        <Button
          bg="white"
          color="black"
          size="lg"
          borderRadius="full"
          px="1.5rem"
          _hover={{ bg: "gray.200" }}
        >
          <HStack spacing="0.75rem">
            <Text fontWeight="medium">Sign up now</Text>
            <Box
              bg="red.500"
              borderRadius="full"
              p="0.4rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={ArrowForwardIcon} color="white" boxSize={4} />
            </Box>
          </HStack>
        </Button>
      </Box>

      {/* Divider */}
      <Divider borderColor="whiteAlpha.400" mb="1.5rem" />

      {/* Bottom Bar */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        gap={{ base: "1rem", md: "0" }}
        fontSize="sm"
        color="white"
      >
        <Text>© 2025 Rev-up.</Text>

      
        {/* Social Media Icons */}
        <HStack spacing="1rem">
          <Link href="https://www.facebook.com/profile.php?id=61576711405754" isExternal>
            <Icon as={FaFacebookF} boxSize={5} _hover={{ color: "blue.400" }} />
          </Link>
          <Link href="https://www.instagram.com/werevup/" isExternal>
            <Icon as={FaInstagram} boxSize={5} _hover={{ color: "pink.400" }} />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default LandingFooter;
