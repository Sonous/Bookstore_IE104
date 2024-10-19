import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '~/layouts/Header/Header';
import Footer from '~/layouts/Footer/Footer';
import styles from './BlogPageEvents.module.css'; // Import CSS module cho BlogPageEvents

const BlogPageEvents = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Kiểm tra nếu state không tồn tại, điều hướng về trang sự kiện chính
    if (!location.state) {
        navigate('/events'); // Điều hướng về trang sự kiện nếu không có state
        return null; // Không render nội dung khi điều hướng
    }

    // Đổi tên biến location thành eventLocation để tránh nhầm lẫn với useLocation
    const { title, eventDate, location: eventLocation, eventImage } = location.state;

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.eventDetail}>
                    <img src={eventImage} alt={title} className={styles.image} />
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.eventDate}>Ngày sự kiện: {eventDate}</p>
                    <p className={styles.eventLocation}>Địa điểm: {eventLocation}</p>
                    <p className={styles.content}>
                        Đây là nội dung chi tiết cho sự kiện "{title}". Nội dung có thể bao gồm thông tin chi tiết, chương trình sự kiện, 
                        và các thông tin bổ sung khác mà người tham gia quan tâm.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default BlogPageEvents;
