const { request } = require('~/configs');

const payingApi = {
    async getMethods() {
        try {
            const methods = await request.get('/paying');

            return methods;
        } catch (error) {
            throw error;
        }
    },
};

export default payingApi;
