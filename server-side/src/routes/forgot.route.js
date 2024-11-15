import express from 'express';
import User from '../models/user.model.js';
// import * as UserController from '../controllers/user.controller.js';

const forgotRouter = express.Router();

forgotRouter
    .route('/')
    .get(async (req, res) => {
        try {
            const { email } = req.query;

            const isExisted = await User.findOne({
                where: {
                    user_email: email,
                },
            });

            console.log(isExisted);

            if (isExisted)
                res.status(200).json({
                    message: 'Existed',
                    userId: isExisted.user_id,
                });
            else
                res.status(200).json({
                    message: 'Not exist',
                });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    })
    .put(async (req, res) => {
        try {
            const { updatedUserData, userId } = req.body;

            const user = await User.findByPk(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found.' });
            }

            await user.update(updatedUserData);

            res.status(200).json({
                message: 'User updated successfully.',
                user: user,
            });
        } catch (error) {
            res.status(500).json({
                message: 'An error occurred while updating the user.',
                error: error.message,
            });
        }
    });

export default forgotRouter;
