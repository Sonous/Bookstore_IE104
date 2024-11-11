import { where } from 'sequelize';
import Book from '../models/book.model.js';
import FavoriteBook from '../models/favoriteBook.model.js';

export const addBookToFavorite = async (req, res) => {
    try {
        const { userId, bookId } = req.body;

        const book = await Book.findOne({ where: { book_id: bookId } });

        if (!book) {
            res.status(404).json({
                message: 'Book does not exist',
            });
            return;
        }

        const isExisted = await FavoriteBook.findOne({
            where: {
                user_id: userId,
                book_id: bookId,
            },
        });

        if (isExisted) {
            await FavoriteBook.destroy({
                where: {
                    user_id: userId,
                    book_id: bookId,
                },
            });
            res.status(200).json({
                message: 'Delete successfully',
            });

            return;
        }

        await FavoriteBook.create({
            user_id: userId,
            book_id: bookId,
        });

        res.status(200).json({
            message: 'Create successfully',
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getFavoriteBook = async (req, res) => {
    try {
        const { userId, bookId } = req.query;

        const isExisted = await FavoriteBook.findOne({
            where: {
                user_id: userId,
                book_id: bookId,
            },
        });

        if (isExisted) {
            res.status(200).json({
                message: 'Bản ghi đã tồn tại',
            });
        } else {
            res.status(200).json({
                message: 'Bản ghi không tồn tại',
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
