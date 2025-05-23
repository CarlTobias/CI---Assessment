import { useState, useEffect } from 'react';
import {
  Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter,
  ModalBody, ModalCloseButton, Button, FormControl, FormLabel,
  Input, Stack
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EditDocumentModal = ({ isOpen, onClose, onSubmit, vehicleId, initialData }) => {
  const [documentName, setDocumentName] = useState('');
  const [issueDate, setIssueDate] = useState(null);
  const [expiryDate, setExpiryDate] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (initialData) {
      setDocumentName(initialData.name || '');
      setIssueDate(initialData.issueDate ? new Date(initialData.issueDate) : null);
      setExpiryDate(initialData.expiryDate ? new Date(initialData.expiryDate) : null);
      setFile(null);
    }
  }, [initialData]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!documentName || !issueDate || !expiryDate) return;

    const formData = new FormData();
    formData.append('name', documentName);
    formData.append('issueDate', issueDate.toISOString());
    formData.append('expiryDate', expiryDate.toISOString());
    formData.append('_id', initialData._id);
    if (file) formData.append('file', file);

    onSubmit(formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Document</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Document Name</FormLabel>
                <Input
                  placeholder="Enter document name"
                  value={documentName}
                  onChange={(e) => setDocumentName(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Issue Date</FormLabel>
                <Box
                  border="1px solid #e2e8f0" // same gray as Chakra input
                  borderRadius="md"
                  px={3}
                  py={2}
                >
                  <DatePicker
                    selected={issueDate}
                    onChange={(date) => setIssueDate(date)}
                    dateFormat="yyyy-MM-dd"
                    className="chakra-input" // optional for font/spacing match
                  />
                </Box>
              </FormControl>


              <FormControl isRequired>
                <FormLabel>Expiry Date</FormLabel>
                <Box
                  border="1px solid #e2e8f0" // same gray as Chakra input
                  borderRadius="md"
                  px={3}
                  py={2}
                >
                <DatePicker
                  selected={expiryDate}
                  onChange={(date) => setExpiryDate(date)}
                  dateFormat="yyyy-MM-dd"
                  className="chakra-input"
                />
                </Box>
              </FormControl>

              <FormControl>
                <FormLabel>Replace File (optional)</FormLabel>
                <Input type="file" onChange={handleFileChange} />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" type="submit">
              Save Changes
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default EditDocumentModal;
