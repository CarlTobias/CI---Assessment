import express from "express";
import Vehicle from "../models/Vehicle.js";

const router = express.Router();

// POST: Add vehicle
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

export default router;
