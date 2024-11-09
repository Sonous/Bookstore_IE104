import { request } from '~/configs';

const token = localStorage.getItem('token');

console.log(token);

const userApi = {
    async submitComment(userId, commentObj) {
        try {
            await request.post(
                `/user/${userId}/rating`,
                {
                    commentObj,
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
    async getCartItems(userId) {
        try {
            const items = await request.get(`/user/${userId}/cart`, {
                headers: {
                    'x-access-token': token,
                },
            });

            return items.length > 0 ? items[0].Cart : items;
        } catch (error) {
            throw error;
        }
    },
    async addBookToCart(userId, bookId, quantity) {
        try {
            await request.post(
                `/user/${userId}/cart/${bookId}`,
                {
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

export default userApi;
