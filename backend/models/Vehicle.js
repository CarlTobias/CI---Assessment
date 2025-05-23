import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  name: String,
  issueDate: Date,
  expiryDate: Date,
  filePath: String,
  cloudinaryPublicId: String,
});

const vehicleSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  type: String,
  brand: String,
  model: String,
  plateNumber: String,
  year: String,
  mileage: String,
  documents: [documentSchema],
});


const Vehicle = mongoose.model("Vehicle", vehicleSchema);
export default Vehicle;
