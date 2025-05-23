import { useState } from "react";
import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import UserDocuments from "./UserDocuments/UserDocuments";
import AddVehicle from "./AddVehicle/AddVehicle";

const MyCar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [vehicles, setVehicles] = useState([]);

  const addVehicle = (vehicleData) => {
    setVehicles([...vehicles, vehicleData]);
    onClose();
  };

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
