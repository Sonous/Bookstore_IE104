import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '~/layouts/Header/Header';
import Footer from '~/layouts/Footer/Footer';
import styles from './BlogPageEvents.module.css';
import { events, images } from '~/dataTemorary';

const BlogPageEvents = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const event = events.find(event => event.id === id); 

    if (!event) {
        navigate('/events');
        return null;
    }

    const { title, eventDate, location } = event;
    const imgSrc = images[`events_${id}`];

    return (
        <>
            <Header />
            <nav className="breadcrumb mb-4 p-4 bg-gray-100">
                <Link to="/" className="text-blue-500 hover:underline">Trang chủ</Link>
                <span className="mx-2">/</span>
                <Link to="/blog/events" className="text-blue-500 hover:underline">Sự kiện</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-500">{title}</span>
            </nav>

            <main className={styles.main}>
                <div className={styles.eventDetail}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.eventDate}>Ngày sự kiện: {eventDate}</p>
                    <p className={styles.location}>Địa điểm: {location}</p>
                    
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
