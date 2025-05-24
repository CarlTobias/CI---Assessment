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
import { useEffect, useState } from "react";

const AddDocument = ({ isOpen, onClose, onSave, initialData = null }) => {
  const [name, setName] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [file, setFile] = useState(null);

  // Populate fields if editing
  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setIssueDate(initialData.issueDate?.split("T")[0] || "");
      setExpiryDate(initialData.expiryDate?.split("T")[0] || "");
      setFile(null); // Don’t pre-load file
    } else {
      setName("");
      setIssueDate("");
      setExpiryDate("");
      setFile(null);
    }
  }, [initialData, isOpen]);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("issueDate", issueDate);
    formData.append("expiryDate", expiryDate);
    if (file) formData.append("file", file);
    onSave(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {initialData ? "Edit Document" : "Add Document"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Document Name</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
            <FormLabel mt={3}>Issue Date</FormLabel>
            <Input
              type="date"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
            />
            <FormLabel mt={3}>Expiry Date</FormLabel>
            <Input
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
            <FormLabel mt={3}>Upload File</FormLabel>
            <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button 
          bg="#D9D9D9"
          color="black"
          _hover={{
            bg: "#90030C",
            color: "white",
            transform: "scale(1.03)",
          }}
          transition="all 0.1s ease-in-out"
          onClick={handleSubmit} colorScheme="blue">
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddDocument;
