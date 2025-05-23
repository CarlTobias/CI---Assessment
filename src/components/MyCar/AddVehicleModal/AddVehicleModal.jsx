import { useState } from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody,
  ModalCloseButton, Button, FormControl, FormLabel, Input, Select, useToast
} from "@chakra-ui/react";

const AddVehicleModal = ({ isOpen, onClose, onSubmit }) => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    mileage: '',
    type: '',
    plateNumber: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/vehicles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error('Failed to create vehicle');
      const newVehicle = await res.json();

      onSubmit(newVehicle);

      toast({
        title: "Vehicle added",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setFormData({ brand: '', model: '', year: '', mileage: '', type: '', plateNumber: '' });
      onClose();
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to add vehicle.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Vehicle</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={3}>
            <FormLabel>Brand</FormLabel>
            <Input name="brand" value={formData.brand} onChange={handleChange} />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Model</FormLabel>
            <Input name="model" value={formData.model} onChange={handleChange} />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Year</FormLabel>
            <Input name="year" value={formData.year} onChange={handleChange} />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Mileage</FormLabel>
            <Input name="mileage" value={formData.mileage} onChange={handleChange} />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Type</FormLabel>
            <Select name="type" value={formData.type} onChange={handleChange}>
              <option value="">Select</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Truck">Truck</option>
              <option value="Van">Van</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Plate Number</FormLabel>
            <Input name="plateNumber" value={formData.plateNumber} onChange={handleChange} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} mr={3}>Cancel</Button>
          <Button colorScheme="red" onClick={handleSubmit}>Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddVehicleModal;
