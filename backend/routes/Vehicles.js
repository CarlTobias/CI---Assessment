import express from "express";
import Vehicle from "../models/Vehicle.js";

const router = express.Router();

// POST: Add a vehicle
router.post("/", async (req, res) => {
  const { userId, brand, model, year, mileage, type, plateNumber } = req.body;

  try {
    const newVehicle = new Vehicle({
      userId,
      brand,
      model,
      year,
      mileage,
      type,
      plateNumber,
    });

    await newVehicle.save();
    res.status(201).json(newVehicle);
  } catch (err) {
    console.error("Error saving vehicle:", err);
    res.status(500).json({ error: "Failed to save vehicle" });
  }
});

// GET: Get vehicles by user ID
router.get("/:userId", async (req, res) => {
  try {
    const vehicles = await Vehicle.find({ userId: req.params.userId });
    res.status(200).json(vehicles);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch vehicles" });
  }
});

// PUT: Edit a vehicle's information
router.put("/:id", async (req, res) => {
  try {
    const updated = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    res.json(updated);
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE: Delete a Vehicle
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Vehicle.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    res.json({ message: "Vehicle deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
