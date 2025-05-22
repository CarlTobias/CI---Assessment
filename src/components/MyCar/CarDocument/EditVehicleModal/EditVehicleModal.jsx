// components/EditVehicleModal.jsx
import React, { useState, useEffect } from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody,
  ModalCloseButton, Button, FormControl, FormLabel, Input, Select
} from "@chakra-ui/react";

const EditVehicleModal = ({ isOpen, onClose, onSubmit, vehicle }) => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    mileage: '',
    type: '',
    plateNumber: ''
  });

  useEffect(() => {
    if (vehicle) {
      setFormData({
        brand: vehicle.brand || '',
        model: vehicle.model || '',
        year: vehicle.year || '',
        mileage: vehicle.mileage || '',
        type: vehicle.type || '',
        plateNumber: vehicle.plateNumber || ''
      });
    }
  }, [vehicle, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (typeof onSubmit === 'function') {
      onSubmit(formData); // Call parent to handle actual save
      onClose(); // Close the modal
    } else {
      console.error('❌ onSubmit is not a function!');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Vehicle</ModalHeader>
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

export default EditVehicleModal;
