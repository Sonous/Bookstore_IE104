import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '~/layouts/Header/Header';
import Footer from '~/layouts/Footer/Footer';
import styles from './BlogPageEvents.module.css';
import { events } from '~/dataTemorary';

const BlogPageEvents = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const event = events.find(event => event.id === id); 

    if (!event) {
        navigate('/events');
        return null;
    }

    const { title, eventDate, location } = event;

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.eventDetail}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.eventDate}>Ngày sự kiện: {eventDate}</p>
                    <p className={styles.location}>Địa điểm: {location}</p>
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
