import { pool } from '../server.js';

class Book {
    async getBookByTitle(title, type = 'less') {
        try {
            const [result] = await pool.query(
                `
                select book.book_id, book_name, book_end_cost, book_image_name
                from  book join bookimage on book.book_id = bookimage.book_id
                where book_name like ?
            `,
                [`${title}%`],
            );

            if (type === 'less' && result.length > 4) {
                result.splice(4);
                return result;
            }

            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default new Book();
