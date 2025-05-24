import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import path from "path";
import { fileURLToPath } from "url";

import User from "./models/User.js";
import postRoutes from "./routes/Posts.js";
import vehicleRoutes from "./routes/Vehicles.js";
import documentRoutes from "./routes/Documents.js";

const app = express();

dotenv.config();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "dist")));

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://rev-up-50vg.onrender.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

mongoose
  .connect(process.env.REVUPDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB");

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
        res
          .status(200)
          .json({ message: "New Account Registered Successfully" });
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

    // Adding Vehicle and Document
    app.use("/api/vehicles", vehicleRoutes);
    app.use("/api/documents", documentRoutes);

    app.use("/uploads", express.static("uploads"));

    // Start the server only after DB connection
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(
        `Server running on http://https://rev-up-50vg.onrender.com:${port}`
      );
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
