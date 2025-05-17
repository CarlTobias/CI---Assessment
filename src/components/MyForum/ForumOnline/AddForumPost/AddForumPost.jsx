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
  VStack,
} from "@chakra-ui/react";

import authStore from "../../../../stores/authStore";

import axios from "axios";

const AddForumPost = ({ isOpen, onClose }) => {
  const [postTitle, setPostTitle] = useState("");
  const [userPost, setUserPost] = useState("");
  const { user } = authStore();

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

      const res = await axios.post(
        "http://localhost:3000/api/posts",
        postPayload,
        {
          headers: {
            "Content-Type": "application/json",
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
    setPostTitle("");
    setUserPost("");
  };

  return (
    <Modal
      isCentered
      size="3xl"
      isOpen={isOpen}
      onClose={() => {
        resetForm();
        onClose();
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton color="#000" />
        <ModalBody p={5} backgroundColor="#FFF" borderRadius={5}>
          <Flex
            flexDirection={"column"}
            gap={5}
            px={5}
            py={4}
            display={{ base: "none", md: "flex" }}
          >
            <FormControl>
              <FormLabel color="#000" fontWeight={700} fontSize={28}>What's on your mind?</FormLabel>
              <Flex flexDirection={"column"} gap={5}>
                {/* Restyle pls */}
                <Input
                  type="text"
                  value={postTitle}
                  backgroundColor="#292929"
                  fontWeight={600}
                  color="#FFF"
                  placeholder="Title..."
                  _placeholder={{ color: "#FFFFFF99" }}
                  onChange={(e) => setPostTitle(e.target.value)}
                />

                <Input
                  type="text"
                  value={userPost}
                  backgroundColor="#292929"
                  color="#FFF"
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
