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
        <ModalBody>{/* [All form controls stay the same] */}</ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="red" onClick={handleSubmit}>
            {vehicle ? "Update" : "Save"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
  

export default AddVehicle;
  