import React, { useState } from "react";

import {
  Button,
  Box,
  Divider,
  Flex,
  Image,
  Input,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  FormControl,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import authStore from "../../../../stores/authStore";

import axios from "axios";

const AddResponse = ({ isOpen, onClose }) => {
  const [response, setResponse] = useState("");
  const { user } = authStore();


  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("response", response);
      formData.append("userId", user._id);

      const res = await axios.post(
        "http://localhost:3000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Uploaded post:", res.data);
      resetForm();
      onClose();
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to upload post.");
    }
  };

  const resetForm = () => {
    setResponse("");
  };

  return (
    <>
      <Modal
        isCentered
        size={{ base: "xl", md: "3xl" }}
        isOpen={isOpen}
        onClose={() => {
          resetForm();
          onClose();
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton color={"#000"} />
          <ModalBody p={0} backgroundColor={"#FFF"} borderRadius={5}>
            <Flex
              flexDirection={"column"}
              gap={5}
              px={5}
              py={4}
              display={{ base: "none", md: "flex" }}
            >
              <VStack align={"stretch"} spacing={4}>
                <FormControl>
                  <FormLabel color="#000">Response</FormLabel>
                  <Input
                    type="text"
                    value={response}
                    backgroundColor={"#292929"} // change color, its yucky
                    color={"#FFF"}
                    placeholder="Say your opinion..."
                    _placeholder={{ color: "#FFFFFF99" }}
                    onChange={(e) => setResponse(e.target.value)}
                  />
                </FormControl>
              </VStack>

              <Button
                mt={"auto"}
                backgroundColor="#292929"
                color={"#FFF"}
                fontWeight="bold"
                _hover={{ backgroundColor: "#90030C" }}
                onClick={handleSubmit}
              >
                Post
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddResponse;
