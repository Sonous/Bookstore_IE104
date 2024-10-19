import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '~/layouts/Header/Header';
import Footer from '~/layouts/Footer/Footer';
import styles from './BlogPageNews.module.css'; // Import CSS module cho BlogPageNews

const BlogPageNews = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Kiểm tra nếu state không tồn tại, điều hướng về trang tin tức chính
    if (!location.state) {
        navigate('/news'); // Điều hướng về trang tin tức nếu không có state
        return null; // Không render nội dung khi điều hướng
    }

    const { title, postDate, image } = location.state; // Lấy thông tin từ state

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.newsDetail}>
                    <img src={image} alt={title} className={styles.image} />
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.postDate}>Ngày đăng: {postDate}</p>
                    <p className={styles.content}>
                        Đây là nội dung chi tiết cho tin tức "{title}". Nội dung có thể bao gồm các đoạn văn bản mô tả chi tiết, 
                        hình ảnh liên quan, và các thông tin bổ sung khác mà người đọc quan tâm. Hãy cập nhật nội dung phù hợp tại đây.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default BlogPageNews;
