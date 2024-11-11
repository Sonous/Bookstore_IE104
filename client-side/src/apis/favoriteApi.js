import { request } from '~/configs';

const favoriteApi = {
    async updateFavoriteTable(userId, bookId) {
        try {
            const token = localStorage.getItem('token');
            await request.post(
                '/favorite',
                {
                    userId,
                    bookId,
                },
                {
                    headers: {
                        'x-access-token': token, // Include the token in headers
                    },
                },
            );
        } catch (error) {
            throw error;
        }
    },
    async getFavoriteBook(userId, bookId) {
        try {
            const token = localStorage.getItem('token');
            const message = await request.get('/favorite', {
                headers: {
                    'x-access-token': token, // Include the token in headers
                },
                params: {
                    userId,
                    bookId,
                },
            });

            if (message.message === 'Bản ghi đã tồn tại') {
                return true;
            } else if (message.message === 'Bản ghi không tồn tại') return false;
        } catch (error) {
            throw error;
        }
    },
};

export default favoriteApi;
