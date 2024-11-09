import express from 'express';
import * as CartController from '../controllers/cart.controller.js';

const cartRouter = express.Router();

cartRouter.route('/').post(CartController.updateQuantityItem);

export default cartRouter;
