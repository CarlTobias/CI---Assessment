import express from "express";

import Post from "../models/Post.js";

const router = express.Router();


// GET all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate("author", "username profilePic");

    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});


// POST a new post
router.post("/", async (req, res) => {
  const { title, content, userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "User ID required" });
  }

  try {
    const newPost = new Post({
      title,
      content,
      author: userId,
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ error: "Failed to create post" });
  }
});


export default router;
