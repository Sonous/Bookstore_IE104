import bookRouter from './book.route.js';
import authRouter from './auth.route.js';
import bannerRouter from './banner.route.js';
import categoryRouter from './category.route.js';
import userRouter from './user.route.js';
import verifyToken from '../middleware/verifyToken.js';
import blogRouter from './blog.route.js';
import cartRouter from './cart.route.js';
import transportMethodRouter from './transportMethod.route.js';
import payingMethodRouter from './payingMethod.route.js';
import orderRouter from './order.route.js';
import upload from '../middleware/storeImage.js';
import addressRouter from './address.route.js';
import favoriteRouter from './favorite.route.js';

export default function routes(server) {
    server.use('/api/book', bookRouter);
    server.use('/api/auth', authRouter);
    server.use('/api/banner', bannerRouter);
    server.use('/api/category', categoryRouter);
    server.use('/api/user', verifyToken, userRouter);
    server.use('/api/blog', blogRouter);
    server.use('/api/cart', verifyToken, cartRouter);
    server.use('/api/transport', transportMethodRouter);
    server.use('/api/paying', payingMethodRouter);
    server.use('/api/order', verifyToken, orderRouter);
    server.use('/api/address', verifyToken, addressRouter);
    server.use('/api/favorite', verifyToken, favoriteRouter);
    server.use('/api/upload', upload.single('image'), async (req, res) => {
        try {
            res.status(200).json({
                name: req.file.originalname,
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
}
