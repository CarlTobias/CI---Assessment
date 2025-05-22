import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

import User from "./models/User.js";
import postRoutes from "./routes/Posts.js";

const app = express();

dotenv.config();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

mongoose
  .connect(process.env.REVUPDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));


// Register
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;

  const existingAccount = await User.findOne({ email });
  if (existingAccount) {
    return res
      .status(400)
      .json({ error: "User already exists with this email." });
  }

  const hashedPass = await bcrypt.hash(password, 15);

  try {
    const newAccount = new User({
      username,
      email,
      password: hashedPass,
    });
    await newAccount.save();
    res.status(200).json({ message: "New Account Registered Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Account Registration failed" });
  }
});

// Login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User Not Found." });

    const isPasswordsMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordsMatch)
      return res.status(400).json({ error: "Incorrect Password." });

    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        profilePic: user.profilePic,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Login Failed" });
  }
});

// Posting on the Forum
app.use("/api/posts", postRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});













// from RAVEN SHEEET
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const path = require('path');
// const dotenv = require('dotenv');
import path from 'path';
import { fileURLToPath } from 'url';

import vehicleRoutes from './routes/vehicleRoutes.js';

// Setup for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file
dotenv.config();

// const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for frontend access
app.use(express.json()); // Parse incoming JSON
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1); // Exit the server if DB connection fails
  });

// Routes
app.use('/vehicles', vehicleRoutes);

// Root route (optional)
app.get('/', (req, res) => {
  res.send('🚗 Vehicle Management API Running');
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});


// THIS HOW .env should look
// MONGO_URI=mongodb+srv://ravenjethro:Juju102403@ravencluster.weq694k.mongodb.net/yokona?retryWrites=true&w=majority&appName=RavenCluster
// PORT=5000
