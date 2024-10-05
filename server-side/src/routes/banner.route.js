import BannerControler from '../controllers/banner.controller.js';
import express from 'express';

const bannerRouter = express.Router();

bannerRouter.route('/').get(BannerControler.getBanners);

export default bannerRouter;
