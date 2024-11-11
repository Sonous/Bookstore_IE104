import multer from 'multer';
import { __dirname } from '../server.js';
import path from 'path';

// Store image
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `${__dirname}/assets/images/`);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

export default upload;
