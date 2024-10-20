import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '~/layouts/Header/Header';
import Footer from '~/layouts/Footer/Footer';
import styles from './BlogPageNews.module.css';
import { news, images } from '~/dataTemorary';

const BlogPageNews = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const newsItem = news.find(item => item.id === id); 

    if (!newsItem) {
        navigate('/news');
        return null;
    }

    const { title, pDate } = newsItem;
    const imgSrc = images[`news_${id}`];

    return (
        <>
            <Header />
            <nav className="breadcrumb mb-4 p-4 bg-gray-100">
                <Link to="/" className="text-blue-500 hover:underline">Trang chủ</Link>
                <span className="mx-2">/</span>
                <Link to="/blog/news" className="text-blue-500 hover:underline">Tin tức</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-500">{title}</span>
            </nav>

            <main className={styles.main}>
                <div className={styles.newsDetail}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.postDate}>Ngày đăng: {pDate}</p>
                    
                    {imgSrc ? (
                        <img
                            src={imgSrc}
                            alt={title}
                            className="mt-4 w-full rounded-lg h-80 object-cover"
                        />
                    ) : (
                        <div className="mt-4 w-full h-64 rounded-lg bg-gray-300 flex items-center justify-center">
                            <span className="text-gray-600">Hình ảnh không có sẵn</span>
                        </div>
                    )}

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
