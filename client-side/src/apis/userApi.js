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
};

export default userApi;
