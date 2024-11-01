import parse from 'html-react-parser';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Footer from '~/layouts/Footer/Footer';
import Header from '~/layouts/Header/Header';
import Loading from '~/components/Loading';
import blogApi from '~/apis/blogApi';

function BlogDetail() {
    const { type, blog_id } = useParams();
    const [blog, setBlog] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await blogApi.getBlogById(blog_id);

                setBlog(result);
            } catch (error) {
                console.error(error);
            }
        };

        fetchApi();
    }, []);

    return (
        <>
            {blog ? (
                <>
                    <Header />
                    {/* Breadcrumb */}
                    <div className="bg-[#f0f0f0] p-10">
                        <nav className="mb-4">
                            <Link to="/" className="text-blue-500 hover:underline">
                                Trang chủ
                            </Link>
                            <span className="mx-2">/</span>
                            <Link to={`/blogs/${type}`} className="text-blue-500 hover:underline">
                                {type}
                            </Link>
                            <span className="mx-2">/ {blog.blog_title}</span>
                        </nav>

                        <div className="bg-white p-10 rounded-lg">
                            <h1 className="text-2xl font-bold text-center w-full mb-5">{blog.blog_title}</h1>
                            <div className="">{parse(blog.blog_content)}</div>
                        </div>
                    </div>
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

export default BlogDetail;
