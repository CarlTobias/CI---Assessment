import { useState } from "react";
import {
  Button,
  Flex,
  Input,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  FormControl,
  ModalOverlay,
} from "@chakra-ui/react";

import authStore from "../../../../stores/authStore";

import axios from "axios";

const AddForumPost = ({ isOpen, onClose }) => {
  const [postTitle, setPostTitle] = useState("");
  const [userPost, setUserPost] = useState("");
  const { user } = authStore();

  const baseUrl = import.meta.env.VITE_API_URL || "";

  const handleSubmit = async () => {
    if (!user) {
      alert("Please log in to post.");
      return;
    }

    try {
      const postPayload = {
        title: postTitle,
        content: userPost,
        userId: user._id,
      };

      const res = await axios.post(`${baseUrl}/api/posts`, postPayload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      

      console.log("Uploaded post:", res.data);
      resetForm();
      onClose();
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to upload post.");
    }
  };

  const resetForm = () => {
    setPostTitle("");
    setUserPost("");
  };

  return (
    <Modal
      isCentered
      size="2xl"
      isOpen={isOpen}
      onClose={() => {
        resetForm();
        onClose();
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton color="#000" />
        <ModalBody p={5} backgroundColor="#292929" borderRadius={8}>
          <Flex
            flexDirection={"column"}
            gap={10}
            px={5}
            py={4}
          >
            <FormControl>
              <FormLabel color="#FFFFFF" fontWeight={700} fontSize={28}>What's on your mind?</FormLabel>
              <Flex flexDirection={"column"} gap={4}>
                {/* Restyle pls */}
                <Input
                  type="text"
                  value={postTitle}
                  backgroundColor="#FFFFFF"
                  fontWeight={600}
                  color="#292929"
                  placeholder="Title..."
                  _placeholder={{ color: "#292929" }}
                  onChange={(e) => setPostTitle(e.target.value)}
                />

                <Input
                  type="text"
                  as="textarea"
                  value={userPost}
                  backgroundColor="#FFFFFF"
                  color="#292929"
                  py={2}
                  height="50vh"
                  textAlign="left"
                  verticalAlign="top"
                  placeholder="Share something with the community..."
                  _placeholder={{ color: "#FFFFFF99" }}
                  onChange={(e) => setUserPost(e.target.value)}
                />
              </Flex>
            </FormControl>

            <Button
              backgroundColor="#292929"
              color="#FFF"
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
  );
};

export default AddForumPost;
