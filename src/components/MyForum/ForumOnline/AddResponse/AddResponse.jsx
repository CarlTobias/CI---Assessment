import React, { useState, useEffect } from "react";

import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import authStore from "../../../../stores/authStore";

import axios from "axios";

const AddResponse = ({ isOpen, onClose, post }) => {
  const [response, setResponse] = useState("");
  const [responses, setResponses] = useState(post.responses || []);
  const { user } = authStore();

  const baseUrl = "https://rev-up-50vg.onrender.com";

  // When the post changes, update local responses state
  useEffect(() => {
    setResponses(post.responses || []);
  }, [post.responses]);

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        `${baseUrl}/api/posts/${post._id}/respond`,
        {
          userId: user._id,
          response: response,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from backend after posting:", res.data);

      setResponses([...responses, res.data.response]);
      resetForm();
      onClose();
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to upload response.");
    }
  };

  const resetForm = () => {
    setResponse("");
  };

  return (
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
        <ModalBody p={8} backgroundColor={"#FFF"} borderRadius={5}>
          {/* === POST DATA === */}
          <Box mb={4}>
            <Text fontWeight={700} fontSize="2xl" mb={2}>
              {post.title}
            </Text>
            <Flex my={5} align="center" gap={3} >
              <Avatar size="lg" src={post.author?.profilePic} />
              <Box>
                <Text fontWeight={500}>{post.author?.username}</Text>
                <Text fontSize="sm" color="gray.500">
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Text>
              </Box>
            </Flex>
            <Text mt={3}>{post.content}</Text>
          </Box>

          <Divider my={4} />

          {/* Responses */}
          <Box maxH="200px" overflowY="auto" mb={5}>
            {responses && responses.length > 0 ? (
              [...responses].reverse().map((res, index) => (
                <Flex
                  key={index}
                  mb={3}
                  p={3}
                  border="1px solid #ddd"
                  borderRadius={5}
                  backgroundColor="#f9f9f9"
                  gap={3}
                  flexDirection={"column"}
                >
                  <Flex gap={3} align={"center"}>
                    <Avatar size="md" src={res.profilePic} />
                    <Flex flexDirection={"column"}>
                      <Text fontWeight={600}>{res.username}</Text>
                      <Text fontSize="xs" color="gray.600">
                        {new Date(res.createdAt).toLocaleString()}
                      </Text>
                    </Flex>
                  </Flex>
                  <Box>
                    <Text>{res.response}</Text>
                  </Box>
                </Flex>
              ))
            ) : (
              <Text color="gray.500">No responses yet.</Text>
            )}
          </Box>

          {/* Add a response */}
          <VStack align={"stretch"} spacing={4}>
            <FormControl>
              <FormLabel color="#000">Your Response</FormLabel>
              <Input
                type="text"
                as="textarea"
                p={2}
                pl={3}
                height="10vh"
                textAlign="left"
                verticalAlign="top"
                value={response}
                backgroundColor={"#292929"}
                color={"#FFF"}
                placeholder="Say your opinion..."
                _placeholder={{ color: "#FFFFFF99" }}
                onChange={(e) => setResponse(e.target.value)}
              />
            </FormControl>

            <Button
              backgroundColor="#292929"
              color={"#FFF"}
              fontWeight="bold"
              _hover={{ backgroundColor: "#90030C" }}
              onClick={handleSubmit}
            >
              Post
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddResponse;
