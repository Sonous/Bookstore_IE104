import express from 'express';
import * as AddressController from '../controllers/address.controller.js';

const addressRouter = express.Router();

addressRouter.route('/:addressId').post(AddressController.updateAddress);

export default addressRouter;
