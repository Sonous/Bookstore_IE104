const { request } = require('~/configs');

const addresApi = {
    async updateAddress(address, addressId) {
        try {
            const token = localStorage.getItem('token');

            await request.post(
                `/address/${addressId}`,
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
};

export default addresApi;
