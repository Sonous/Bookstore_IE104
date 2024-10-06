import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path, {dirname} from 'path'
import { fileURLToPath } from 'url';
import mysql from 'mysql2/promise'

import dbConfig from './config/db.config.js';
import routes from './routes/index.js';

// Get folder and file path 
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config();

const server = express();

let corsOptions = {
    origin: 'http://localhost:3000',
};

server.use(cors(corsOptions));

export const pool = mysql.createPool({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
});

server.get('/images/:name', (req, res) => {
    const name = req.params.name;
    const imagePath = path.join(__dirname, 'assets', 'images', `${name}.webp`)
    res.sendFile(imagePath)
})

routes(server);


server.listen(process.env.PORT, () => console.log(`App listen at http://localhost:${process.env.PORT}`));
