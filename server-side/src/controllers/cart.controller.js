import { StatusCodes } from 'http-status-codes';

import Book from '../models/book.model.js';
import Cart from '../models/cart.model.js';
import BookImage from '../models/bookImage.model.js';

const properties = {
    attributes: {
        exclude: [
            'book_available',
            'book_rating_num',
            'book_description',
            'book_author',
            'book_format',
            'book_page_num',
            'book_collection',
        ],
    },
    include: {
        model: BookImage,
        attributes: ['book_image_url'],
        limit: 1,
    },
};

export const updateQuantityItem = async (req, res) => {
    try {
        const { userId, bookId, quantity } = req.body;

        if (quantity == 0) {
            await Cart.destroy({
                where: {
                    user_id: userId,
                    book_id: bookId,
                },
            });
        } else {
            await Cart.update(
                {
                    quantity: parseInt(quantity),
                },
                {
                    where: {
                        user_id: userId,
                        book_id: bookId,
                    },
                },
            );
        }

        res.status(200).json({ message: 'success' });
    } catch (error) {
        res.status(StatusCodes.NOT_FOUND).json({
            message: error.message,
        });
    }
};

// export const
