const { request } = require('~/configs');

const cartApi = {
    async updateQuantityItem(userId, bookId, quantity) {
        const token = localStorage.getItem('token');
        try {
            await request.put(
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
