// authApi.js
import { request } from '~/configs'; // Đảm bảo đường dẫn đúng

const authApi = {
    login: async (email, password) => {
        try {
            const data = await request.post('/auth/login', {
                user_email: email,
                user_password: password,
            });
            return data.token;
        } catch (error) {
            throw error;
        }
    },

    register: async (userDetails) => {
        try {
            const data = await request.post('/auth/register', userDetails);
            return data.user;
        } catch (error) {
            throw error;
        }
    },
};

export default authApi;
