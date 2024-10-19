import classNames from 'classnames/bind';
import styles from './BlogPage.module.css';
import Footer from '~/layouts/Footer/Footer';
import Header from '~/layouts/Header/Header';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { activities } from '~/dataTemorary'; // Import activities từ dữ liệu của bạn

const cx = classNames.bind(styles);

function BlogPageActivities() {
    const { id } = useParams(); // Lấy id từ URL
    const activity = activities.find((activity) => activity.id === id); // Tìm hoạt động tương ứng

    if (!activity) {
        return <div>Không tìm thấy thông tin hoạt động.</div>;
    }

    return (
        <>
            <Header />
            <main className={cx('main-content')}>
                <div className="max-w-main-width mx-auto p-4">
                    <h1 className="text-2xl font-bold">{activity.title}</h1>
                    <div className="text-gray-500">
                        <FontAwesomeIcon icon={faCalendar} />
                        <span className="pl-2">{activity.activityDate}</span>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="ml-4" />
                        <span className="pl-2">{activity.location}</span>
                    </div>
                    <p className="text-gray-600 mt-4">{activity.description}</p>
                    <p className="text-gray-300 mt-2">Người tổ chức: {activity.organizer}</p>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default BlogPageActivities;
