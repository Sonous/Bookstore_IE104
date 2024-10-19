import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '~/layouts/Header/Header';
import Footer from '~/layouts/Footer/Footer';
import styles from './BlogPageNews.module.css';
import { news } from '~/dataTemorary';

const BlogPageNews = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const newsItem = news.find(item => item.id === id); 

    if (!newsItem) {
        navigate('/news');
        return null;
    }

    const { title, pDate } = newsItem;

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.newsDetail}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.postDate}>Ngày đăng: {pDate}</p>
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
