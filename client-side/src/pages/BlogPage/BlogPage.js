import classNames from 'classnames/bind';
import { Pagination } from 'antd';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link, useParams } from 'react-router-dom';

import styles from './BlogPage.module.css';
import Footer from '~/layouts/Footer/Footer';
import Header from '~/layouts/Header/Header';

import blogApi from '~/apis/blogApi';
import Loading from '~/components/Loading';
import { formatDate } from '~/utils/functions';

const cx = classNames.bind(styles);
const topics = [
    { name: 'Hoạt động', path: '/blog/activities' },
    { name: 'Tin sách', path: '/blog/news' },
    { name: 'Sự kiện', path: '/blog/events' },
];

function BlogPage() {

    const { option } = useParams();
    const [currentTab, setCurrentTab] = useState(option);
    const [blogs, setBlogs] = useState();
    const navigate = useNavigate();

    const getBlogsOfPage = async (page) => {
        try {
            const blogs = await blogApi.getBlogsByName(option, page, 5);

            setBlogs(blogs);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setCurrentTab(option);

        getBlogsOfPage(1);
    }, [option]);

    return (
        <>
            {blogs ? (
                <>
                    <Header />
                    <nav className="breadcrumb mb-4 p-4 bg-gray-100">
                        <Link to="/" className="text-blue-500 hover:underline">
                            Trang chủ
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-500">{currentTab}</span>
                    </nav>


                    <main className={cx('main-content')}>
                        <div className={cx('section-tabs', 'w-full', 'mb-4')}>
                            <ul className="flex justify-center gap-8 bg-gray-100 p-4 rounded-md">
                                {topics.map((topic, index) => (
                                    <li
                                        key={index}
                                        className={cx('cursor-pointer', {
                                            'text-blue-500': currentTab === topic,
                                            underline: currentTab === topic,
                                        })}
                                        onClick={() => navigate(`/blogs/${topic}`)}
                                    >
                                        <strong className="custom-font-size">{topic}</strong>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        <div className="flex flex-col gap-6">
                            <div className="w-full grid grid-cols-1 gap-6">
                                {blogs.data.map((blog, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex rounded-lg bg-white shadow-lg h-56 p-4 w-full cursor-pointer"
                                            onClick={() => navigate(`/blogs/${option}/${blog.blog_id}`)}
                                        >

                                            <img
                                                src={blog.blog_thumbnail}
                                                alt=""
                                                className="w-58 h-42 object-cover rounded-lg"
                                            />

                                            <div className="ml-4 flex flex-col w-full gap-3">
                                                <span className="block font-semibold text-lg">{blog.blog_title}</span>
                                                <div className="text-gray-500">
                                                    <FontAwesomeIcon icon={faCalendar} />
                                                    <span className="pl-2">{formatDate(blog.created_at)}</span>
                                                </div>
                                                <p className="text-gray-600">
                                                    Viện Pháp tại Việt Nam triển khai một loạt hoạt động nhằm thúc đẩy
                                                    sự phát triển của truyện tranh tại Việt Nam như một lĩnh vực công
                                                    nghiệp văn hóa. Nằm trong khuôn khổ dự án FEF - sáng tạo và dự án
                                                    Công nghiệp văn hóa - sáng tạo khu vực “Ngành truyện tranh ở Việt
                                                    Nam và Campuchia: Kết nối kinh nghiệm...
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <Pagination
                                total={blogs.pagination.blogsCount}
                                pageSize={5}
                                align="center"
                                onChange={(page) => {
                                    getBlogsOfPage(page);
                                }}
                            />
                        </div>
                    </main>
                    <Footer />
                </>
            ) : (
                <div className="h-svh flex justify-center items-center">
                    <Loading />
                </div>
            )}
        </>
    );
}

export default BlogPage;
