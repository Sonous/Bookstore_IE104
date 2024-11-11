import express from 'express';
import * as PayingMethodController from '../controllers/payingMethod.controller.js';

const payingMethodRouter = express.Router();

payingMethodRouter.route('/').get(PayingMethodController.getAllMethod);

export default payingMethodRouter;
