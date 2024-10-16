import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '~/layouts/Header/Header';
import Footer from '~/layouts/Footer/Footer';
import styles from './NewsDetail.module.css'; // Nếu cần thiết

const NewsDetail = () => {
    const location = useLocation();
    const { title, postDate, image } = location.state; // Lấy thông tin từ state

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.newsDetail}>
                    <img src={image} alt={title} className="object-cover h-48 w-full rounded-lg" />
                    <h1 className="text-2xl font-bold mt-4">{title}</h1>
                    <p className="text-gray-500">Ngày đăng: {postDate}</p>
                    <p className="mt-4">Nội dung chi tiết cho tin tức này...</p> {/* Thay bằng nội dung thật */}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default NewsDetail;
