import { StatusCodes } from 'http-status-codes';
import bookModel from '../models/book.model.js';

class BookController {
    async getBookByTitle(req, res) {
        try {
            const { title, type } = req.query;

            const searchResult = await bookModel.getBookByTitle(title, type);

            res.status(StatusCodes.OK).json(searchResult);
        } catch (error) {
            res.status(StatusCodes.NOT_FOUND).json({
                errors: error.message,
            });
        }
    }
}

export default new BookController();
