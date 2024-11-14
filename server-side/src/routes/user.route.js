import express from 'express';
import * as UserController from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.route('/').get(UserController.getUserByToken);

userRouter.route('/:userId').get(UserController.getUserById).put(UserController.updateUser);

userRouter.route('/:userId/cart/:bookId?').get(UserController.getCartItems).post(UserController.addBookToCart);

userRouter.route('/:userId/address').get(UserController.getAddressOfUser).post(UserController.createAddress);

userRouter
    .route('/:userId/favorite')
    .get(UserController.getAllFavoriteBooks)
    .delete(UserController.deleteAllFavoriteBooks);

userRouter.route('/:userId/rating').post(UserController.addComment);

userRouter.route('/:userId/order').get(UserController.getOrdersByUser);

userRouter.route('/:userId/check').get(UserController.checkPassword);

export default userRouter;
