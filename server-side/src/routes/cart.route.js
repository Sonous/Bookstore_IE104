import express from 'express';
import * as CartController from '../controllers/cart.controller.js';

const cartRouter = express.Router();

cartRouter.route('/').put(CartController.updateQuantityItem);

export default cartRouter;
