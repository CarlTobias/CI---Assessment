import { useEffect, useState } from "react";
import { Box, Button, Flex, useDisclosure, Container, Text } from "@chakra-ui/react";
import UserDocuments from "./UserDocuments/UserDocuments";
import AddVehicle from "./AddVehicle/AddVehicle";
import authStore from "../../stores/authStore";


const MyCar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [vehicles, setVehicles] = useState([]);
  const user = authStore((state) => state.user);

  const baseUrl = import.meta.env.VITE_API_URL || "";

  const addVehicle = async (vehicleData) => {
    try {
      const response = await fetch(`${baseUrl}/api/vehicles`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...vehicleData, userId: user._id }),
        credentials: "include",
      });

      const newVehicle = await response.json();
      setVehicles((prev) => [...prev, newVehicle]);
      onClose();
    } catch (error) {
      console.error("Failed to save vehicle:", error);
    }
  };

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/api/vehicles/${user._id}`
        );
        const data = await response.json();
        setVehicles(data);
      } catch (err) {
        console.error("Error fetching vehicles:", err);
      }
    };

    if (user?._id) fetchVehicles();
  }, [user]);
  
  

  return (
    <Container maxW={"100vw"}>
      <Box
      bg='#292929'
      borderRadius={10}
      margin={5}
      p={10} fontFamily={'Poppins'}>
      <Flex flexDirection={"column"} justify={"center"} align={"center"}>
        <Flex w={"100%"} justify={"space-between"} align={"center"} px={5}>
          <Box 
          w={"100%"}
          fontSize={{ base: "2xl", md: "xl", lg: '2xl', xl: "2xl" }}
          color={"#ffffff"}
          fontWeight={600}
          >
            Documents
          </Box>
          <Button onClick={onOpen}
          bg="#ffffff"
          color="black"
          _hover={{
            bg: "#90030C",
            color: "white",
            transform: "scale(1.03)",
          }}
          transition="all 0.1s ease-in-out"
          >Add Vehicle</Button>
        </Flex>

        <UserDocuments vehicles={vehicles} />
      </Flex>

      <AddVehicle isOpen={isOpen} onClose={onClose} onSave={addVehicle} />
      </Box>
    </Container>
  );
};

export default MyCar;
