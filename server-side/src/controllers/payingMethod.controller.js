import PayingMethod from '../models/payingMethod.model.js';

export const getAllMethod = async (req, res) => {
    try {
        const methods = await PayingMethod.findAll();

        res.status(200).json(methods);
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};
