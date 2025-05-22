import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Vehicle from '../models/Vehicle.js';
import upload from '../middleware/upload.js';



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Ensure this directory exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});


/**
 * ✅ Create a new vehicle with 3 default documents
 */
router.post('/', async (req, res) => {
  try {
    const { brand, model, year, mileage, type, plateNumber } = req.body;

    const defaultDocuments = [
      { name: 'Car Registration', issueDate: null, expiryDate: null, filePath: null },
      { name: 'Insurance Expiry', issueDate: null, expiryDate: null, filePath: null },
      { name: 'License Renewal', issueDate: null, expiryDate: null, filePath: null }
    ];

    const newVehicle = new Vehicle({
      brand,
      model,
      year,
      mileage,
      type,
      plateNumber,
      documents: defaultDocuments
    });

    await newVehicle.save();
    res.status(201).json(newVehicle);
  } catch (error) {
    console.error('Error creating vehicle:', error);
    res.status(500).json({ message: 'Failed to create vehicle' });
  }
});

/**
 * ✅ Upload a new document to a vehicle
 */
router.post('/:id/documents', upload.single('file'), async (req, res) => {
  try {
    const vehicleId = req.params.id;
    const { name, issueDate, expiryDate } = req.body;
    const filePath = req.file ? req.file.path : null;
    const fileName = req.file ? req.file.originalname : null;

    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });

    const newDocument = {
      name,
      issueDate,
      expiryDate,
      filePath,
      fileName
    };

    vehicle.documents.push(newDocument);
    await vehicle.save();

    res.status(200).json(vehicle);
  } catch (error) {
    console.error('Error uploading document:', error);
    res.status(500).json({ message: 'Failed to upload document' });
  }
});

/**
 * ✅ Edit a document for a specific vehicle
 */
router.patch('/:vehicleId/documents/:documentId', upload.single('file'), async (req, res) => {
  try {
    const { vehicleId, documentId } = req.params;
    const { name, issueDate, expiryDate } = req.body;
    const filePath = req.file ? req.file.path : null;

    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });

    const document = vehicle.documents.id(documentId);
    if (!document) return res.status(404).json({ message: 'Document not found' });

    document.name = name;
    document.issueDate = issueDate;
    document.expiryDate = expiryDate;
    if (filePath) {
      document.filePath = filePath;
      document.fileName = req.file.originalname;
    }

    await vehicle.save();
    const updatedVehicle = await Vehicle.findById(vehicleId);
    res.json(updatedVehicle);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update document', error: err.message });
  }
});

/**
 * ✅ Delete a document from a vehicle
 */
router.delete('/:vehicleId/documents/:documentId', async (req, res) => {
  try {
    const { vehicleId, documentId } = req.params;

    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });

    const docIndex = vehicle.documents.findIndex(doc => doc._id.toString() === documentId);
    if (docIndex === -1) return res.status(404).json({ message: 'Document not found' });

    vehicle.documents.splice(docIndex, 1);
    await vehicle.save();

    res.status(200).json({ message: 'Document deleted successfully' });
  } catch (err) {
    console.error('Error during delete:', err);
    res.status(500).json({ message: 'Failed to delete document', error: err.message });
  }
});

/**
 * ✅ Delete a vehicle entirely
 */
router.delete('/:vehicleId', async (req, res) => {
  try {
    const { vehicleId } = req.params;
    const deleted = await Vehicle.findByIdAndDelete(vehicleId);
    if (!deleted) return res.status(404).json({ message: 'Vehicle not found' });

    res.json({ message: 'Vehicle deleted successfully' });
  } catch (error) {
    console.error('Error deleting vehicle:', error);
    res.status(500).json({ message: 'Failed to delete vehicle' });
  }
});

/**
 * ✅ Download a file
 */
router.get('/download/:filename', async (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, '..', 'uploads', filename);

  try {
    const vehicle = await Vehicle.findOne({
      'documents.filePath': { $regex: new RegExp(filename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$') }
    });

    if (!vehicle) return res.status(404).send('File not found');

    const doc = vehicle.documents.find(d => d.filePath.endsWith(filename));
    const originalName = doc?.fileName || filename;

    res.download(filePath, originalName);
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).send('Server error during file download');
  }
});

/**
 * ✅ Edit vehicle details
 */
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedVehicle = await Vehicle.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedVehicle) return res.status(404).json({ message: 'Vehicle not found' });

    res.json(updatedVehicle);
  } catch (err) {
    console.error('Error updating vehicle:', err);
    res.status(500).json({ message: 'Failed to update vehicle', error: err.message });
  }
});

export default router;
