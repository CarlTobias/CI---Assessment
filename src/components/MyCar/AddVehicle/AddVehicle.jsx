import { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";

const AddVehicle = ({ isOpen, onClose, onSave, vehicle }) => {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    mileage: "",
    type: "",
    plateNumber: "",
  });

  useEffect(() => {
    if (vehicle) {
      setFormData({
        brand: vehicle.brand || "",
        model: vehicle.model || "",
        year: vehicle.year || "",
        mileage: vehicle.mileage || "",
        type: vehicle.type || "",
        plateNumber: vehicle.plateNumber || "",
      });
    }
  }, [vehicle]);

  const handleSubmit = () => {
    onSave(formData);
    if (!vehicle) {
      setFormData({
        brand: "",
        model: "",
        year: "",
        mileage: "",
        type: "",
        plateNumber: "",
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{vehicle ? "Edit Vehicle" : "Add Vehicle"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={3}>
            <FormLabel>Brand</FormLabel>
            <Input
              name="brand"
              value={formData.brand}
              onChange={(e) =>
                setFormData({ ...formData, brand: e.target.value })
              }
            />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Model</FormLabel>
            <Input
              name="model"
              value={formData.model}
              onChange={(e) =>
                setFormData({ ...formData, model: e.target.value })
              }
            />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Year</FormLabel>
            <Input
              name="year"
              value={formData.year}
              onChange={(e) =>
                setFormData({ ...formData, year: e.target.value })
              }
            />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Mileage</FormLabel>
            <Input
              name="mileage"
              value={formData.mileage}
              onChange={(e) =>
                setFormData({ ...formData, mileage: e.target.value })
              }
            />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Type</FormLabel>
            <Select
              name="type"
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            >
              <option value="">Select</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Truck">Truck</option>
              <option value="Van">Van</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Plate Number</FormLabel>
            <Input
              name="plateNumber"
              value={formData.plateNumber}
              onChange={(e) =>
                setFormData({ ...formData, plateNumber: e.target.value })
              }
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button mr={3} 
          bg="#D9D9D9"
          color="black"
          _hover={{
            bg: "#90030C",
            color: "white",
            transform: "scale(1.03)",
          }}
          transition="all 0.1s ease-in-out" 
          onClick={onClose}>
            Cancel
          </Button>
          <Button 
          bg="#D9D9D9"
          color="black"
          _hover={{
            bg: "#90030C",
            color: "white",
            transform: "scale(1.03)",
          }}
          transition="all 0.1s ease-in-out" 
          onClick={handleSubmit}>
            {vehicle ? "Update" : "Save"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddVehicle;
