import express from "express";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import Vehicle from "../models/Vehicle.js";

const router = express.Router();


const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "vehicle_documents",
    allowed_formats: ["jpg", "png", "pdf", "jpeg"],
    transformation: [{ quality: "auto" }],
  },
});

const upload = multer({ storage });

router.get("/:vehicleId", async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.vehicleId);
    if (!vehicle) return res.status(404).json({ error: "Vehicle not found" });

    res.status(200).json(vehicle.documents);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: "Error fetching documents" });
  }
});

router.post("/:vehicleId", upload.single("file"), async (req, res) => {
  console.log("BODY:", req.body);
  console.log("FILE:", req.file);

  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const { name, issueDate, expiryDate } = req.body;
  const fileUrl = req.file.path;
  const publicId = req.file.filename;

  try {
    const vehicle = await Vehicle.findById(req.params.vehicleId);
    if (!vehicle) return res.status(404).json({ error: "Vehicle not found" });

    const newDoc = {
      name,
      issueDate: new Date(issueDate),
      expiryDate: new Date(expiryDate),
      filePath: fileUrl,
      cloudinaryPublicId: publicId,
    };
    vehicle.documents.push(newDoc);
    await vehicle.save();

    res.status(201).json(newDoc);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error saving document" });
  }
});



router.delete("/:vehicleId/:documentId", async (req, res) => {
  const { vehicleId, documentId } = req.params;

  try {
    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle) return res.status(404).send("Vehicle not found");

    const document = vehicle.documents.id(documentId);
    if (!document) return res.status(404).send("Document not found");

    // Optional: Delete file from Cloudinary if public_id exists
    if (document.cloudinaryPublicId) {
      await cloudinary.uploader.destroy(document.cloudinaryPublicId);
    }

    // Remove document from the array
    await document.deleteOne();
    await vehicle.save();

    res.status(200).json({ success: true, message: "Document deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete document" });
  }
});

export default router;