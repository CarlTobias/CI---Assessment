import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import ForumPost from "../ForumPost/ForumPost";

const ForumPosts = () => {
  const [posts, setPosts] = useState([]);

  const baseUrl = import.meta.env.VITE_API_URL || "";

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`${baseUrl}api/posts`);
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);  

  return (
    <>
      <Flex flexDirection={"column"} align={"center"}>
        {posts.map((post) => (
          <ForumPost key={post._id} post={post} />
        ))}
      </Flex>
    </>
  );
};

export default ForumPosts;
