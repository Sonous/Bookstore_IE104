import express from 'express';
import bookController from '../controllers/book.controller.js';

const searchRouter = express.Router();

searchRouter.route('/').get(bookController.getBookByTitle);

export default searchRouter;
