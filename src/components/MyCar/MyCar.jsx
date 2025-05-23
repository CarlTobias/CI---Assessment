import { useEffect, useState } from "react";
import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import UserDocuments from "./UserDocuments/UserDocuments";
import AddVehicle from "./AddVehicle/AddVehicle";
import authStore from "../../stores/authStore";


const MyCar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [vehicles, setVehicles] = useState([]);
  const user = authStore((state) => state.user);


  const addVehicle = async (vehicleData) => {
    try {
      const response = await fetch("http://localhost:3000/api/vehicles", {
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
          `http://localhost:3000/api/vehicles/${user._id}`
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
    <>
      <Flex flexDirection={"column"} justify={"center"} align={"center"}>
        <Flex w={"100%"} justify={"space-between"} align={"center"} px={5}>
          <Box>Documents</Box>
          <Button onClick={onOpen}>Add Vehicle</Button>
        </Flex>

        <UserDocuments vehicles={vehicles} />
      </Flex>

      <AddVehicle isOpen={isOpen} onClose={onClose} onSave={addVehicle} />
    </>
  );
};

export default MyCar;
