import searchRouter from './search.route.js';
import bannerRouter from './banner.route.js';

export default function routes(server) {
    server.use('/api/search', searchRouter);
    server.use('/api/banners', bannerRouter);
}
