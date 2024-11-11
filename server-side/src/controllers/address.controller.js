import Address from '../models/address.model.js';

export const updateAddress = async (req, res) => {
    try {
        const { address } = req.body;
        const { addressId } = req.params;

        await Address.update(address, {
            where: {
                address_id: addressId,
            },
        });

        res.status(200).json({
            message: 'success',
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
