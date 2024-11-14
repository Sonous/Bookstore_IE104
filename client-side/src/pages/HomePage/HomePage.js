import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

import styles from './HomePage.module.css';
import BannerSlider from '~/layouts/BannerSlider/BannerSlider';
import Footer from '~/layouts/Footer/Footer';
import Header from '~/layouts/Header/Header';
import BookCollection from '~/components/BookCollection/BookCollection';
import blogApi from '~/apis/blogApi';
import { formatDate } from '~/utils/functions';
import Loading from '~/components/Loading';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const topics = ['Sách mới', 'Sách bán chạy', 'Manga - Comic', 'Tâm lí - Kĩ năng sống', 'Văn học'];

function HomePage() {
    const [blogs, setBlogs] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await blogApi.getBlogsByName();

                setBlogs(result);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, []);

    return (
        <>
            {blogs ? (
                <>
                    <Header />
                    <main className={cx('main-content')}>
                        <div className="max-w-main-width grid grid-cols-4 gap-4 max-lg:grid-cols-2">
                            <div className="col-span-3 max-lg:col-span-2">
                                <BannerSlider />
                            </div>
                            <div className="flex flex-col gap-3 max-lg:col-span-2">
                                {blogs.map((blog, indx) => {
                                    return indx < 3 ? (
                                        <div
                                            key={indx}
                                            className="flex rounded-lg bg-white"
                                            onClick={() =>
                                                navigate(`/blogs/${blog.blogtype.type_name}/${blog.blog_id}`)
                                            }
                                        >
                                            <img
                                                src={blog.blog_thumbnail}
                                                alt=""
                                                className="w-36 object-cover rounded-l-lg max-lg:w-44 cursor-pointer"
                                            />
                                            <div className="p-2 flex flex-col gap-4">
                                                <span
                                                    className={cx(
                                                        'blog-title',
                                                        'cursor-pointer hover:text-primary-color',
                                                    )}
                                                >
                                                    {blog.blog_title}
                                                </span>
                                                <span>
                                                    <FontAwesomeIcon icon={faCalendar} />
                                                    <span className="pl-2">{formatDate(blog.created_at)}</span>
                                                </span>
                                            </div>
                                        </div>
                                    ) : null;
                                })}
                                <div className={cx('more')} onClick={() => navigate(`/blogs/Hoạt%20động`)}>
                                    <span className={cx('more-btn')}>Xem thêm &gt;&gt;</span>
                                </div>
                            </div>
                        </div>
                        <article className="w-full flex flex-col items-center ">
                            {topics.map((topic, index) => {
                                return <BookCollection key={index} topic={topic} />;
                            })}
                        </article>
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

export default HomePage;
