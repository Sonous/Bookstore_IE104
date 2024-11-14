import { request } from '~/configs';

const userApi = {
    async submitComment(userId, commentObj) {
        try {
            const token = localStorage.getItem('token');
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
            const token = localStorage.getItem('token');
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
            const token = localStorage.getItem('token');
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

    async getAddressOfUser(user_id) {
        try {
            const token = localStorage.getItem('token');
            const address = await request.get(`/user/${user_id}/address`, {
                headers: {
                    'x-access-token': token,
                },
            });

            return address;
        } catch (error) {
            throw error;
        }
    },

    async createAddress(address, userId) {
        try {
            const token = localStorage.getItem('token');

            await request.post(
                `/user/${userId}/address`,
                {
                    address,
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

    async getOrdersByUser(userId, status) {
        try {
            const token = localStorage.getItem('token');
            const orders = await request.get(`/user/${userId}/order`, {
                headers: {
                    'x-access-token': token,
                },
                params: {
                    status,
                },
            });

            const parseOrders = orders.map((order) => ({
                ...order,
                order_books: JSON.parse(order.order_books),
            }));

            return parseOrders;
        } catch (error) {
            throw error;
        }
    },
    async updateUser(userId, updatedData) {
        try {
            const token = localStorage.getItem('token');
            const response = await request.put(`/user/${userId}`, updatedData, {
                headers: {
                    'x-access-token': token,
                },
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    },
    async uploadAvatar(file, userId) {
        try {
            const formData = new FormData();
            formData.append('userId', userId);
            formData.append('image', file);

            const imageName = await request.post('/upload', formData);

            return imageName;
        } catch (error) {
            throw error;
        }
    },
    async checkPassword(userId, password) {
        try {
            const token = localStorage.getItem('token');

            const result = await request.get(`/user/${userId}/check`, {
                headers: {
                    'x-access-token': token,
                },
                params: {
                    password: password,
                },
            });

            if (result.message === 'password is true') {
                return true;
            }

            return false;
        } catch (error) {
            if (error.response.data.message === 'user does not exist') {
                return false;
            }
            throw error;
        }
    },
    async getAllFavotiteBooks(userId) {
        try {
            const token = localStorage.getItem('token');
            const books = await request.get(`/user/${userId}/favorite`, {
                headers: {
                    'x-access-token': token,
                },
            });

            return books.FavoriteBook;
        } catch (error) {
            throw error;
        }
    },
    async deleteAllFavotiteBooks(userId) {
        try {
            const token = localStorage.getItem('token');
            const message = await request.delete(`/user/${userId}/favorite`, {
                headers: {
                    'x-access-token': token,
                },
            });

            return message;
        } catch (error) {
            throw error;
        }
    },
};

export default userApi;
