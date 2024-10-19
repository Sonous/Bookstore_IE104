import { news, events, activities } from '~/dataTemorary';
import classNames from 'classnames/bind';
import styles from './BlogPage.module.css';
import Footer from '~/layouts/Footer/Footer';
import Header from '~/layouts/Header/Header';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
const topics = ['Hoạt động', 'Tin sách', 'Sự kiện'];

function BlogPage() {
    const [currentTab, setCurrentTab] = useState('Hoạt động'); 
    const navigate = useNavigate(); 

    return (
        <>
            <Header />
            <main className={cx('main-content')}>
                <div className={cx('section-tabs', 'w-full', 'mb-4')}>
                    <ul className="flex justify-center gap-8 bg-gray-100 p-4 rounded-md">
                        {topics.map((topic, index) => (
                            <li
                                key={index}
                                className={cx('cursor-pointer', { 'text-blue-500': currentTab === topic, 'underline': currentTab === topic })}
                                onClick={() => setCurrentTab(topic)}
                            >
                                <strong className="custom-font-size">{topic}</strong>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex justify-center max-w-main-width grid grid-cols-1 gap-6">
                    {currentTab === 'Hoạt động' && (
                        <div className="w-full grid grid-cols-1 gap-6">
                            {activities.map((activity) => (
                                <div
                                    key={activity.id}
                                    className="flex rounded-lg bg-white shadow-lg h-56 p-4 w-full cursor-pointer"
                                    onClick={() => navigate(`/blog/activities/${activity.id}`)}
                                >
                                    <div className="ml-4 flex flex-col justify-between w-full">
                                        <span className="block font-semibold text-lg">{activity.title}</span>
                                        <div className="text-gray-500">
                                            <FontAwesomeIcon icon={faCalendar} />
                                            <span className="pl-2">{activity.activityDate}</span>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="ml-4" />
                                            <span className="pl-2">{activity.location}</span>
                                        </div>
                                        <p className="text-gray-600">{activity.description}</p>
                                        <p className="text-gray-300">{activity.organizer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {currentTab === 'Tin sách' && (
                        <div className="col-span-4 grid grid-cols-1 gap-6 w-full">
                            {news.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center rounded-lg bg-white shadow-md p-4 h-36 cursor-pointer"
                                    onClick={() => navigate(`/blog/news/${item.id}`)}
                                >
                                    <div className="ml-4 flex flex-col justify-between h-full w-full">
                                        <span className="block font-semibold text-lg">{item.title}</span>
                                        <span className="text-gray-500">
                                            <FontAwesomeIcon icon={faCalendar} />
                                            Ngày đăng: {item.postDate}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {currentTab === 'Sự kiện' && (
                        <div className="w-full grid grid-cols-1 gap-6">
                            {events.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex rounded-lg bg-white shadow-lg h-56 p-4 w-full cursor-pointer"
                                    onClick={() => navigate(`/blog/events/${item.id}`)}
                                >
                                    <div className="ml-4 flex flex-col justify-between w-full">
                                        <span className="block font-semibold text-lg">{item.title}</span>
                                        <div className="text-gray-500">
                                            <FontAwesomeIcon icon={faCalendar} />
                                            <span className="pl-2">{item.eventDate}</span>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="ml-4" />
                                            <span className="pl-2">{item.location}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default BlogPage;
