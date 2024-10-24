import classNames from 'classnames/bind';
import styles from './BlogPage.module.css';
import Footer from '~/layouts/Footer/Footer';
import Header from '~/layouts/Header/Header';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { activities, images } from '~/dataTemorary'; // Nhớ import images ở đây

const cx = classNames.bind(styles);

function BlogPageActivities() {
    const { id } = useParams();
    const activity = activities.find((activity) => activity.id === id);

    if (!activity) {
        return <div>Không tìm thấy thông tin hoạt động.</div>;
    }

    const imgSrc = images[`act_${activity.id}`];

    return (
        <>
            <Header />
            {/* Breadcrumb */}
            <nav className="breadcrumb mb-4 p-4 bg-gray-100">
                <Link to="/" className="text-blue-500 hover:underline">Trang chủ</Link>
                <span className="mx-2">/</span>
                <Link to="/blog/activities" className="text-blue-500 hover:underline">Hoạt động</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-500">{activity.title}</span>
            </nav>

            <main className={cx('main-content')}>
                <div className="max-w-main-width mx-auto p-4">
                    <h1 className="text-2xl font-bold">{activity.title}</h1>
                    <div className="text-gray-500">
                        <FontAwesomeIcon icon={faCalendar} />
                        <span className="pl-2">{activity.activityDate}</span>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="ml-4" />
                        <span className="pl-2">{activity.location}</span>
                    </div>

                    {imgSrc ? (
                        <img
                            src={imgSrc}
                            alt={activity.title}
                            className="mt-4 w-full rounded-lg h-80 object-cover"
                        />
                    ) : (
                        <div className="mt-4 w-full h-64 rounded-lg bg-gray-300 flex items-center justify-center">
                            <span className="text-gray-600">Hình ảnh không có sẵn</span>
                        </div>
                    )}

                    <p className="text-gray-600 mt-4">{activity.description}</p>
                    <p className="text-gray-300 mt-2">Người tổ chức: {activity.organizer}</p>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default BlogPageActivities;
