import classNames from 'classnames/bind';
import styles from './BlogPage.module.css';
import Footer from '~/layouts/Footer/Footer';
import Header from '~/layouts/Header/Header';
import BookCollection from '~/components/BookCollection/BookCollection';
import { useState } from 'react';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const topics = ['Sách mới', 'Tin sách', 'Sự kiện'];

// Dữ liệu sách
const books = [
    { title: 'Dược sư', releaseDate: '04/05/2024', coverImage: images.bookCover1 },
    { title: 'Tiêu dao du', releaseDate: '04/05/2024', coverImage: images.bookCover2 },
    { title: 'Thần điêu đại hiệp', releaseDate: '04/05/2024', coverImage: images.bookCover3 },
    { title: 'Bắc phong thần', releaseDate: '04/06/2024', coverImage: images.bookCover4 },
    { title: 'Đại kiếm sư', releaseDate: '04/07/2024', coverImage: images.bookCover5 },
    { title: 'Nhật ký mộng', releaseDate: '04/08/2024', coverImage: images.bookCover6 },
    { title: 'Sơn hà đồ', releaseDate: '04/09/2024', coverImage: images.bookCover7 },
    { title: 'Hắc ám thiên tử', releaseDate: '04/10/2024', coverImage: images.bookCover8 },
    { title: 'Tiểu thần tiên', releaseDate: '04/11/2024', coverImage: images.bookCover9 },
    { title: 'Thiên tài thần y', releaseDate: '04/12/2024', coverImage: images.bookCover10 },
];

// Dữ liệu tin tức
const news = [
    { title: 'Viện Pháp thúc đẩy sự phát triển công nghiệp truyện tranh', postDate: '30/09/2024', image: images.news1 },
    { title: 'Triển lãm sách quốc tế tại TP. Hồ Chí Minh', postDate: '01/10/2024', image: images.news2 },
    { title: 'Ra mắt bộ tiểu thuyết mới của tác giả A', postDate: '02/10/2024', image: images.news3 },
    { title: 'Hội sách Hà Nội tháng 10', postDate: '03/10/2024', image: images.news4 },
    { title: 'Chương trình khuyến mãi sách tháng 11', postDate: '04/10/2024', image: images.news5 },
    { title: 'Hội thảo về văn học thiếu nhi', postDate: '05/10/2024', image: images.news6 },
    { title: 'Tác giả B giao lưu tại TP. Hồ Chí Minh', postDate: '06/10/2024', image: images.news7 },
    { title: 'Ra mắt sách điện tử tháng 10', postDate: '07/10/2024', image: images.news8 },
    { title: 'Hội chợ sách quốc tế tháng 12', postDate: '08/10/2024', image: images.news9 },
    { title: 'Chương trình sách giảm giá cuối năm', postDate: '09/10/2024', image: images.news10 },
];

// Dữ liệu sự kiện tự tạo với 8 sự kiện
const events = [
    {
        title: 'Ra mắt sách "Dược sư"',
        eventDate: '10/10/2024',
        location: 'Hà Nội',
        eventImage: images.event1,
    },
    {
        title: 'Hội sách quốc tế tháng 11',
        eventDate: '15/11/2024',
        location: 'TP. Hồ Chí Minh',
        eventImage: images.event2,
    },
];

function HomePage() {
    const [currentTab, setCurrentTab] = useState('Sách mới'); 
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
                    {currentTab === 'Sách mới' && (
                        <div className="col-span-1 flex justify-center w-full">
                            <div className="flex flex-wrap justify-center w-full">
                                {books.map((book, index) => (
                                    <div key={index} className="m-2">
                                        <h2 className="text-xl font-bold mb-2">{book.title}</h2>
                                        <BookCollection book={book} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentTab === 'Tin sách' && (
                        <div className="col-span-4 grid grid-cols-1 gap-6 w-full">
                            {news.map((item, indx) => (
                                <div
                                    key={indx}
                                    className="flex items-center rounded-lg bg-white shadow-md p-4 h-36 cursor-pointer"
                                    onClick={() => navigate('/blog/news', { state: { ...item } })}  // Thay đổi đường dẫn ở đây
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="object-cover h-full w-28 rounded-lg"
                                    />
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
                            {events.map((event, indx) => (
                                <div
                                    key={indx}
                                    className="flex rounded-lg bg-white shadow-lg h-56 p-4 w-full cursor-pointer"
                                    onClick={() => navigate('/blog/events', { state: { ...event } })}
                                >
                                    <img
                                        src={event.eventImage}
                                        alt={event.title}
                                        className="object-cover w-1/3 rounded-lg h-full"
                                    />
                                    <div className="ml-4 flex flex-col justify-between w-full">
                                        <span className="block font-semibold text-lg">{event.title}</span>
                                        <div className="text-gray-500">
                                            <FontAwesomeIcon icon={faCalendar} />
                                            <span className="pl-2">{event.eventDate}</span>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="ml-4" />
                                            <span className="pl-2">{event.location}</span>
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

export default HomePage;
