import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectToDatabase from './config/connectDB.js';
import routes from './routes/index.js';

dotenv.config();

const server = express();

let corsOptions = {
    origin: 'http://localhost:3000',
};

server.use(cors(corsOptions));

export const pool = connectToDatabase();

routes(server);

server.listen(process.env.PORT, () => console.log(`App listen at http://localhost:${process.env.PORT}`));
