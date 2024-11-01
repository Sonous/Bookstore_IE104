import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import parse from 'html-react-parser';

import './BookDetail.css';
import Header from '~/layouts/Header/Header';
import Footer from '~/layouts/Footer/Footer';
import bookApi from '~/apis/bookApi';
import Loading from '~/components/Loading';
import { imageUrl } from '~/configs/axios.config';
import { convertPriceToString } from '~/utils/functions';
import { Rate, Input, Divider } from 'antd';
import Book from '~/components/Book/Book';
import Comment from '~/components/Comment';

function BookDetail() {
    const { book_name } = useParams();
    const { TextArea } = Input;

    const [book, setBook] = useState();
    const [otherBooks, setOtherBooks] = useState();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const commentInputRef = useRef();

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await bookApi.getBookByName(book_name);
                const listBook = await bookApi.getBooksByLimit(6);

                setBook(result);
                setOtherBooks(listBook);
            } catch (error) {
                console.log(error);
            }
        };

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };

        fetchApi();
        scrollToTop();
    }, [book_name]);

    const navigate = (index) => {
        setCurrentImageIndex(index);
    };

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    };

    const handleCommentSubmit = () => {};

    const focusCommentInput = () => {
        commentInputRef.current.focus();
    };

    return (
        <>
            {book && otherBooks ? (
                <>
                    <Header />
                    <div className="bg-main-bg-color px-28 py-5">
                        <nav className="navmenu m-5">
                            <ol>
                                <li>
                                    <Link to={'/'}>Trang chủ</Link>
                                </li>
                                <li>
                                    <Link to={`/collections/${book.genres[0].category.category_name}`}>
                                        {book.genres[0].category.category_name}
                                    </Link>
                                </li>
                                <li>{book.book_name}</li>
                            </ol>
                        </nav>
                        <div className="grid product-page grid-cols-7 gap-3 relative">
                            <div className="firstpart col-span-3 bg-white rounded-lg p-5 self-start sticky top-3">
                                <div className="image-container">
                                    <img
                                        className="img1 object-contain"
                                        src={`${imageUrl}/${book.bookimages[currentImageIndex].book_image_url}`}
                                        alt={book.book_name}
                                    />
                                    <div className="dots">
                                        {book.bookimages.map((_, index) => (
                                            <span
                                                key={index}
                                                className={`dot ${currentImageIndex === index ? 'active' : ''}`}
                                                onClick={() => navigate(index)}
                                            ></span>
                                        ))}
                                    </div>
                                </div>
                                <div className="button-container">
                                    <button className="checkout1 flex-1">Mua ngay</button>
                                    <button className="checkout2 flex-1">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                            <div className="secondpart bg-white col-span-4 rounded-lg">
                                <span className="title2">{book.book_name}</span>
                                <br />
                                <div className="group1">
                                    <div className="quantity-control ">
                                        <button onClick={handleDecrement}>-</button>
                                        <span>{quantity}</span>
                                        <button onClick={handleIncrement}>+</button>
                                    </div>
                                    <span className="normal">{`Còn ${book.book_available} quyển trong kho`}</span>
                                </div>
                                <div className="group2">
                                    <span className="price">{convertPriceToString(book.book_end_cost)}</span>
                                    <span className="text-neutral-400 line-through">
                                        {convertPriceToString(book.book_cost)}
                                    </span>
                                    <span>|</span>
                                    <Rate
                                        className="text-[14px] flex items-center"
                                        disabled
                                        value={book.book_star_rating}
                                    />
                                    <span className="dot2">.</span>
                                    <span className="normal3" onClick={focusCommentInput}>
                                        {book.UsersWhoRated.length} bình luận
                                    </span>
                                </div>

                                <div className="group3 gap-3">
                                    <span className="title1">THÔNG TIN CHI TIẾT</span>
                                    <ul className="normal mb-5">
                                        <li>
                                            <strong>Tác giả:</strong> {`${book.book_author}`}
                                        </li>
                                        <li>
                                            <strong>Hình thức:</strong> {`${book.book_format}`}
                                        </li>
                                        <li>
                                            <strong>Số trang:</strong> {`${book.book_page_num}`}
                                        </li>
                                        <li>
                                            <strong>Thể loại:</strong>{' '}
                                            {`${book.genres.map((genre) => genre.genre_name).join(', ')}`}
                                        </li>
                                        <li>
                                            <strong>Bộ sưu tập: </strong>
                                            <span className="hover:text-blue-600 cursor-pointer">{`${book.book_collection}`}</span>
                                        </li>
                                    </ul>
                                    <span className="title1">GIỚI THIỆU SÁCH</span>
                                    <div className="bookcontent -ml-[20px]">{parse(book.book_description)}</div>
                                </div>
                            </div>
                        </div>

                        <div className=" my-6 gap-3 ">
                            <div className="col-span-5 self-start p-10 bg-white rounded-lg grid grid-cols-2 gap-5 ">
                                <div className="flex flex-col gap-3 border-r-[1px] border-[#cecece] pr-5">
                                    <span className="text-lg font-semibold">BÌNH LUẬN VÀ ĐÁNH GIÁ</span>
                                    <Rate
                                        className="text-[14px] flex items-center"
                                        value={rating}
                                        onChange={(value) => setRating(value)}
                                    />
                                    <TextArea
                                        onChange={(e) => setComment(e.target.value)}
                                        style={{
                                            height: 120,
                                            resize: 'none',
                                        }}
                                    />
                                    <button className="submit-comment" onClick={handleCommentSubmit}>
                                        Gửi
                                    </button>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h1 className="text-lg font-semibold uppercase">Các đánh giá hiện tại</h1>
                                    {book.UsersWhoRated.length > 0 ? (
                                        <>
                                            {book.UsersWhoRated.map((comment, index) => (
                                                <>
                                                    <Comment key={index} comment={comment} />
                                                    {index < book.UsersWhoRated.length - 1 && <Divider />}
                                                </>
                                            ))}
                                        </>
                                    ) : (
                                        <h2>Chưa có đánh giá nào</h2>
                                    )}
                                </div>
                            </div>
                        </div>
                        <aside className="flex flex-col col-span-1 bg-white px-8 py-7 rounded-lg gap-3">
                            <span className="title3 text-xl text-[#228B22]">SÁCH GỢI Ý CHO BẠN</span>
                            <div className="flex justify-center">
                                <div className="flex gap-3">
                                    {otherBooks.map((book, index) => (
                                        <Book key={index} {...book} collection />
                                    ))}
                                </div>
                            </div>
                        </aside>
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

export default BookDetail;
