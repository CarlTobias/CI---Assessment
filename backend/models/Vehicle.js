import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema({
  name: String,
  issueDate: Date,
  expiryDate: Date,
  filePath: String,
  fileName: String,
});

const vehicleSchema = new mongoose.Schema({
  brand: String,
  model: String,
  year: String,
  mileage: String,
  type: String,
  plateNumber: String,
  documents: [documentSchema],
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

export default Vehicle;
