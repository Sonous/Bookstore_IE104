const { request } = require('~/configs');

const token = localStorage.getItem('token');

const cartApi = {
    async updateQuantityItem(userId, bookId, quantity) {
        try {
            await request.post(
                '/cart',
                {
                    userId,
                    bookId,
                    quantity,
                },
                {
                    headers: {
                        'x-access-token': token,
                    },
                },
            );
        } catch (error) {
            throw error;
        }
    },
};

export default cartApi;
