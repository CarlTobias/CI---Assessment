import { useEffect, useState } from "react";
import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import UserDocumentTable from "./UserDocumentTable";
import AddDocument from "../AddDocument/AddDocument";

import { BsThreeDotsVertical } from "react-icons/bs";

const UserDocument = ({ vehicle }) => {
  const [documents, setDocuments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);


  const fetchDocuments = async () => {
    const res = await fetch(
      `http://localhost:3000/api/documents/${vehicle._id}`
    );
    const data = await res.json();
    setDocuments(data);
  };

  useEffect(() => {
    if (vehicle?._id) fetchDocuments();
  }, [vehicle]);

  const handleDocumentAdded = (newDoc) => {
    setDocuments((prev) => [...prev, newDoc]);
  };

  const handleSaveDocument = async (formData) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/documents/${vehicle._id}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Server error: ${errorText}`);
      }

      const data = await res.json();
      handleDocumentAdded(data);
      await fetchDocuments();
      console.log("Upload successful:", data);
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  const handleDeleteDocument = async (docId) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/documents/${vehicle._id}/${docId}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) throw new Error("Failed to delete");

      setDocuments((prev) => prev.filter((doc) => doc._id !== docId));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };
  

  return (
    <>
      <Flex
        flexDirection={"column"}
        justify={"center"}
        align={"center"}
        gap={5}
        p={5}
        border={"solid 2px black"}
        borderRadius={10}
      >
        <Flex
          w={"100%"}
          justify={"space-between"}
          align={"center"}
          backgroundColor={"gray.200"}
        >
          <Box pl={3}>
            {vehicle.brand} {vehicle.model}
          </Box>
          <Menu>
            <MenuButton as={Button} rightIcon={<BsThreeDotsVertical />} />
            <MenuList>
              <MenuItem onClick={() => setIsEditOpen(true)}>
                Edit Vehicle
              </MenuItem>

              <MenuItem onClick={() => console.log("Delete vehicle")}>
                Delete Vehicle
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Flex w={"100%"} justify={"space-between"}>
          <Flex flexDirection={"column"}>
            <Box>Type</Box>
            <Box>{vehicle.type}</Box>
          </Flex>

          <Flex flexDirection={"column"}>
            <Box>Brand</Box>
            <Box>{vehicle.brand}</Box>
          </Flex>

          <Flex flexDirection={"column"}>
            <Box>Model</Box>
            <Box>{vehicle.model}</Box>
          </Flex>

          <Flex flexDirection={"column"}>
            <Box>Plate Number</Box>
            <Box>{vehicle.plateNumber}</Box>
          </Flex>

          <Flex flexDirection={"column"}>
            <Box>Year</Box>
            <Box>{vehicle.year}</Box>
          </Flex>

          <Flex flexDirection={"column"}>
            <Box>Mileage</Box>
            <Box>{vehicle.mileage}</Box>
          </Flex>
        </Flex>

        <UserDocumentTable
          documents={documents}
          onDelete={handleDeleteDocument}
        />

        <Flex>
          <Button bg={"red"} onClick={() => setIsModalOpen(true)}>
            Add Document
          </Button>
        </Flex>

        <AddDocument
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          vehicle={vehicle}
          onSave={(updatedVehicle) => {
            console.log("Updated vehicle:", updatedVehicle);
            // TODO: Call PUT or PATCH API here
            setIsEditOpen(false);
          }}
        />
      </Flex>
    </>
  );
};

export default UserDocument;
