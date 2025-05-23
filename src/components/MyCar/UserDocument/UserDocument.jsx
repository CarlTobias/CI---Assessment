import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure
} from "@chakra-ui/react";
import UserDocumentTable from "./UserDocumentTable";
import AddDocument from "../AddDocument/AddDocument";
import AddVehicle from "../AddVehicle/AddVehicle";

import { BsThreeDotsVertical } from "react-icons/bs";

const UserDocument = ({ vehicle }) => {
  const [documents, setDocuments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const handleDeleteVehicle = async () => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this vehicle?"
      );
      if (!confirmed) return;

      const res = await fetch(
        `http://localhost:3000/api/vehicles/${vehicle._id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) throw new Error("Failed to delete vehicle");

      console.log("Vehicle deleted");
      window.location.reload();
    } catch (err) {
      console.error("Delete vehicle error:", err);
    }
  };

  const handleEdit = (doc) => {
    setSelectedDocument(doc);
    onOpen();
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

              <MenuItem onClick={handleDeleteVehicle} color="red.500">
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
          onEdit={handleEdit}
          onDelete={handleDeleteDocument}
        />

        <Flex>
          <Button bg={"red"} onClick={() => setIsModalOpen(true)}>
            Add Document
          </Button>
        </Flex>

        <AddDocument
          isOpen={isModalOpen || isOpen} // support both add and edit
          onClose={() => {
            setIsModalOpen(false);
            onClose(); // close chakra modal
            setSelectedDocument(null); // reset editing doc
          }}
          vehicleId={vehicle._id}
          initialData={selectedDocument} // pass doc if editing
          onSave={async (formData) => {
            if (selectedDocument) {
              // EDIT MODE
              try {
                const res = await fetch(
                  `http://localhost:3000/api/documents/${vehicle._id}/${selectedDocument._id}`,
                  {
                    method: "PUT",
                    body: formData,
                  }
                );

                if (!res.ok) throw new Error("Failed to update document");

                console.log("Document updated");
                await fetchDocuments(); // refresh list
                onClose();
                setSelectedDocument(null);
              } catch (err) {
                console.error(err);
              }
            } else {
              // ADD MODE
              handleSaveDocument(formData);
            }
          }}
        />

        <AddVehicle
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          vehicle={vehicle}
          onSave={async (updatedVehicleData) => {
            try {
              const res = await fetch(
                `http://localhost:3000/api/vehicles/${vehicle._id}`,
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(updatedVehicleData),
                }
              );

              if (!res.ok) {
                const text = await res.text();
                throw new Error(`Failed to update vehicle: ${text}`);
              }

              const updated = await res.json();
              console.log("Vehicle updated:", updated);

              // Optionally update UI state here if needed

              setIsEditOpen(false);
            } catch (err) {
              console.error(err);
            }
          }}
        />
      </Flex>
    </>
  );
};

export default UserDocument;
