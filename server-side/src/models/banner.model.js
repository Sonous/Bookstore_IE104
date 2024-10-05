import { pool } from '../server.js';

class Banner {
    async getBanners() {
        try {
            const [banners] = await pool.query(`
                select banner_id, banner_image_name, book_name
                from banner join book on banner.book_id = book.book_id
            `);

            return banners;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new Banner();
