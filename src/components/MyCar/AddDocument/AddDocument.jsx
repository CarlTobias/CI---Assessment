// components/AddDocumentModal.jsx
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { useState } from "react";

const AddDocument = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("issueDate", issueDate);
    formData.append("expiryDate", expiryDate);
    formData.append("file", file);
    onSave(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Document</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Document Name</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
            <FormLabel mt={3}>Issue Date</FormLabel>
            <Input type="date" onChange={(e) => setIssueDate(e.target.value)} />
            <FormLabel mt={3}>Expiry Date</FormLabel>
            <Input
              type="date"
              onChange={(e) => setExpiryDate(e.target.value)}
            />
            <FormLabel mt={3}>Upload File</FormLabel>
            <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleSubmit} colorScheme="blue">
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddDocument;
