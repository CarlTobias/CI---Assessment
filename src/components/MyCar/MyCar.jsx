import React, { useState } from 'react';
import {
  Box, Container, Flex, VStack, Button, Heading, useDisclosure, useToast
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import CarQuickCard from './CarQuickCard/CarQuickCard';
import CarDocument from './CarDocument/CarDocument';
import AddVehicleModal from './AddVehicleModal/AddVehicleModal';

const MyCar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [vehicles, setVehicles] = useState([]);
  const [modalMode, setModalMode] = useState('add');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const toast = useToast();

  const openAddModal = () => {
    setModalMode('add');
    setSelectedVehicle(null);
    onOpen();
  };

  const handleModalSubmit = (vehicle) => {
    if (modalMode === 'edit') {
      setVehicles(prev =>
        prev.map(v => (v._id === vehicle._id ? vehicle : v))
      );
    } else {
      setVehicles(prev => [...prev, vehicle]);
    }
    onClose();
  };

  const handleEditVehicle = (vehicle) => {
    setModalMode('edit');
    setSelectedVehicle(vehicle);
    onOpen();
  };

  const handleDeleteVehicle = async (vehicleToDelete) => {
    try {
      const response = await fetch(`http://localhost:5000/api/vehicles/${vehicleToDelete._id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setVehicles(prev => prev.filter(vehicle => vehicle._id !== vehicleToDelete._id));
        toast({
          title: "Vehicle deleted.",
          description: "The vehicle and its documents have been removed.",
          status: "info",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Failed to delete vehicle.",
          description: "Server error.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error deleting vehicle:', error);
      toast({
        title: "Error",
        description: "Something went wrong while deleting the vehicle.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="100vw" py={6} px={6}>
      <Flex justify="space-between" align="center" mb={5} pb={5} borderBottom="4px solid #EFEFEF">
        <Heading as="h1" size="xl">My Vehicles</Heading>
        <Flex gap={4}>
          {/* <Button bg="white" border="3px solid #EFEFEF" px={6}>Export Car list</Button> */}
          <Button
            leftIcon={<AddIcon />}
            bg="#90030C"
            color="white"
            _hover={{ bg: "#680107" }}
            onClick={openAddModal}
          >
            Add Vehicle
          </Button>
        </Flex>
      </Flex>

      <Flex wrap="wrap" gap={4} mb={10}>
        {vehicles.map((vehicle, index) => (
          <CarQuickCard
            key={vehicle._id || index}
            vehicle={vehicle}
            onEdit={() => handleEditVehicle(vehicle)}
          />
        ))}
      </Flex>


      <Box>
        <Heading size="xl" mb={5} pb={5} borderBottom="4px solid #EFEFEF">Documents</Heading>
        {vehicles.map((vehicle, index) => (
          <CarDocument
            key={vehicle._id || index}
            vehicle={vehicle}
            onDeleteVehicle={handleDeleteVehicle}
          />
        ))}
      </Box>

      <AddVehicleModal
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleModalSubmit}
        mode={modalMode}
        vehicle={selectedVehicle}
      />
    </Container>
  );
};

export default MyCar;
