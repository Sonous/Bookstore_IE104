import { request } from '~/configs';

const bookApi = {
    async getBookByName(bookName) {
        try {
            const book = await request.get(`/book/${bookName}`);

            return book;
        } catch (error) {
            throw new Error(error.response);
        }
    },

    async getBooksByLimit(limit) {
        try {
            const books = await request.get(`/book?limit=${limit}`);

            return books;
        } catch (error) {
            throw new Error(error.response);
        }
    },
};

export default bookApi;
