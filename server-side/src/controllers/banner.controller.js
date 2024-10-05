import { StatusCodes } from 'http-status-codes';
import Banner from '../models/banner.model.js';

class BannerController {
    async getBanners(req, res) {
        try {
            const banners = await Banner.getBanners();

            res.status(StatusCodes.OK).json(banners);
        } catch (error) {
            res.status(StatusCodes.NOT_FOUND).json({
                errors: error.message,
            });
        }
    }
}

export default new BannerController();
