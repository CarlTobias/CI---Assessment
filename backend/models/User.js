import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  profilePic: {
    type: String,
    default: "/images/profilePic.png",
  },
});

const User = mongoose.model("User", userSchema, "users");

export default User;
