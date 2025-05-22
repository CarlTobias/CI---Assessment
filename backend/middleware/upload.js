import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Needed to emulate __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Folder to store uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

// Optional: Filter file types
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only PDF, PNG, and JPEG files are allowed.'), false);
  }
};

const upload = multer({
  storage,
  fileFilter
});

export default upload;
