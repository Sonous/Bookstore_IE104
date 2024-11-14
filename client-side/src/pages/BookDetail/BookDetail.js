import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { Rate, Input, Divider } from 'antd';
import classNames from 'classnames';
import Swal from 'sweetalert2';

import './BookDetail.css';
import Header from '~/layouts/Header/Header';
import Footer from '~/layouts/Footer/Footer';
import bookApi from '~/apis/bookApi';
import Loading from '~/components/Loading';
import { imageUrl } from '~/configs/axios.config';
import { convertPriceToString } from '~/utils/functions';
import Book from '~/components/Book/Book';
import Comment from '~/components/Comment';
import userApi from '~/apis/userApi';
import { UserContext } from '~/context/UserContextProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import favoriteApi from '~/apis/favoriteApi';
import transportApi from '~/apis/transportApi';
import BookCollection from '~/components/BookCollection/BookCollection';

function BookDetail() {
    const { book_name } = useParams();
    const { TextArea } = Input;

    const [book, setBook] = useState();
    const [otherBooks, setOtherBooks] = useState();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const { user, setIsReloadCart, alertExpiredLogin } = useContext(UserContext);
    const [inputValue, setInputValue] = useState(1);
    const [isChecked, setIsChecked] = useState(false);
    const [transportMethod, setTransportMethod] = useState('');
    const [limit, setLimit] = useState(10);
    const commentInputRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const method = await transportApi.getTransportMethodById();

            setTransportMethod(method);
        };

        fetchApi();
    }, []);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await bookApi.getBookByName(book_name);
                const listBook = await bookApi.getBooksByLimit(limit);
                if (user) {
                    const isExisted = await favoriteApi.getFavoriteBook(user.user_id, result.book_id);

                    setIsChecked(isExisted);
                }

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
    }, [book_name, limit]);

    const navigateImage = (index) => {
        setCurrentImageIndex(index);
    };

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
        setInputValue((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
        setInputValue((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    };

    const handleCommentSubmit = async () => {
        if (!user) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                },
            });
            Toast.fire({
                icon: 'error',
                title: 'Vui lòng đăng nhập',
            });
            return;
        }
        if (!user.user_id || !book.book_id || rating === 0 || comment === '') {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                },
            });
            Toast.fire({
                icon: 'error',
                title: 'Vui lòng nhập đủ thông tin',
            });
            return;
        }
        try {
            await userApi.submitComment(user.user_id, {
                book_id: book.book_id,
                rating_star: rating,
                rating_content: comment,
            });
            await Swal.fire({
                icon: 'success',
                text: 'Nhận xét của bạn đã được lưu thành công',
                confirmButtonText: 'Đã hiểu',
            });

            setComment('');
            setRating(0);
            navigate(0);
        } catch (error) {
            console.error(error);
        }
    };

    const focusCommentInput = () => {
        commentInputRef.current.focus();
    };

    const handleAddBookToCart = async () => {
        try {
            if (quantity > book.book_available) {
                await Swal.fire({
                    toast: true,
                    icon: 'warning',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    position: 'top-end',
                    text: `Số lượng yêu cầu cho ${quantity} không có sẵn.`,
                });
                return;
            }
            await userApi.addBookToCart(user.user_id, book.book_id, quantity);

            await Swal.fire({
                title: 'Thêm sách vào giỏ hàng thành công!',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false,
            });

            setIsReloadCart(true);
        } catch (error) {
            if (error.message === 'Unauthorized!') {
                alertExpiredLogin();
            }
            console.error(error);
        }
    };

    const handleUpdateFavoriteTable = async () => {
        try {
            if (!user) {
                Swal.fire({
                    toast: true,
                    position: 'top-right',
                    timerProgressBar: true,
                    icon: 'warning',
                    text: 'Vui lòng đăng nhập!',
                    timer: 1500,
                    showConfirmButton: false,
                });

                return;
            }
            await favoriteApi.updateFavoriteTable(user.user_id, book.book_id);

            setIsChecked(!isChecked);
        } catch (error) {
            console.error(error);
        }
    };

    const handlePurchase = () => {
        const orderBook = {
            book_id: book.book_id,
            book_name: book.book_name,
            book_cost: book.book_cost,
            book_discount: book.book_discount,
            book_end_cost: book.book_end_cost,
            book_sold: book.book_sold,
            book_star_rating: book.book_star_rating,
            book_status: book.book_status,
            created_at: book.created_at,
            updated_at: book.updated_at,
            cart: {
                quantity: quantity,
            },
            bookimages: book.bookimages,
        };

        const order = {
            order_books: [orderBook],
            books_total_prices: parseFloat(book.book_end_cost) * quantity,
            transport_name: transportMethod.transport_name,
            transport_cost: transportMethod.transport_cost,
            order_total_cost: transportMethod.transport_cost + parseFloat(book.book_end_cost) * quantity,
        };

        localStorage.setItem('order', JSON.stringify(order));
        navigate('/paying');
    };

    // window.addEventListener('resize', () => {
    //     console.log(window.innerWidth);
    // });

    return (
        <>
            {book && otherBooks ? (
                <>
                    <Header />
                    <div className="flex flex-col items-center bg-main-bg-color">
                        <div className=" px-28 py-5 max-w-[1528px]">
                            <nav className="navmenu m-5 ">
                                <ol>
                                    <li>
                                        <Link to={'/'} className="hover:text-primary-color">
                                            Trang chủ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={`/collections/${book.genres[0].category.category_name}`}
                                            className="hover:text-primary-color"
                                        >
                                            {book.genres[0].category.category_name}
                                        </Link>
                                    </li>
                                    <li className="text-primary-color font-semibold">{book.book_name}</li>
                                </ol>
                            </nav>
                            <div className="grid product-page grid-cols-7 gap-3 relative ">
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
                                                    onClick={() => navigateImage(index)}
                                                ></span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="button-container">
                                        <button
                                            className={classNames('checkout1 flex-1 hover:opacity-80', {
                                                'bg-neutral-400 hover:opacity-100 hover: cursor-not-allowed':
                                                    book.book_status !== 'Còn hàng',
                                            })}
                                            disabled={book.book_status !== 'Còn hàng'}
                                            onClick={() => {
                                                if (!user) {
                                                    Swal.fire({
                                                        toast: true,
                                                        icon: 'warning',
                                                        timerProgressBar: true,
                                                        position: 'top-right',
                                                        text: 'Vui lòng đăng nhập!',
                                                        timer: 1500,
                                                        showConfirmButton: false,
                                                    });
                                                    return;
                                                }
                                                handlePurchase();
                                            }}
                                        >
                                            Mua ngay
                                        </button>
                                        <button
                                            className={classNames('checkout2 flex-1 hover:opacity-80', {
                                                'text-neutral-400 border-neutral-400 hover:opacity-100 hover: cursor-not-allowed':
                                                    book.book_status !== 'Còn hàng',
                                            })}
                                            disabled={book.book_status !== 'Còn hàng'}
                                            onClick={() => {
                                                if (!user) {
                                                    Swal.fire({
                                                        toast: true,
                                                        icon: 'warning',
                                                        position: 'top-right',
                                                        timerProgressBar: true,
                                                        text: 'Vui lòng đăng nhập!',
                                                        timer: 1500,
                                                        showConfirmButton: false,
                                                    });
                                                    return;
                                                }
                                                handleAddBookToCart();
                                            }}
                                        >
                                            Thêm vào giỏ hàng
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-white col-span-4 rounded-lg p-10 relative">
                                    <div
                                        className={classNames(
                                            'absolute top-0 right-5 h-[40px] b flex items-center px-1 rounded-b-md bg-primary-color transition-all hover:opacity-80 cursor-pointer',
                                            {
                                                'border-x-[2px] border-b-[2px] border-primary-color !bg-white':
                                                    isChecked,
                                            },
                                        )}
                                        onClick={handleUpdateFavoriteTable}
                                    >
                                        <span
                                            className={classNames('text-white', {
                                                '!text-primary-color': isChecked,
                                            })}
                                        >
                                            <FontAwesomeIcon icon={faHeart} />
                                        </span>
                                    </div>
                                    <span className="title2">{book.book_name}</span>
                                    <br />
                                    <div className="group1">
                                        <div className="quantity-control ">
                                            <button onClick={handleDecrement}>-</button>
                                            <input
                                                className="w-[40px] text-center"
                                                type="text"
                                                pattern="[1-9]*"
                                                value={inputValue}
                                                onChange={(e) => {
                                                    const value = parseInt(e.target.value); // Chuyển đổi sang số nguyên

                                                    console.log(value);
                                                    if (value >= 1) {
                                                        console.log('fisadji');
                                                        setQuantity(value);
                                                        setInputValue(value);
                                                    } else if (e.target.value === '') {
                                                        setInputValue(e.target.value);
                                                    }
                                                }}
                                                onBlur={(e) => {
                                                    if (e.target.value === '') {
                                                        setQuantity(1);
                                                        setInputValue(1);
                                                    }
                                                }}
                                            />
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
                                            {book.ratingbooks.length} bình luận
                                        </span>
                                    </div>
                                    {book.book_status !== 'Còn hàng' && (
                                        <div className="border rounded-md px-3 font-bold bg-red-100 text-red-500 mt-3">
                                            <span>Sản phẩm tạm hết hàng</span>
                                        </div>
                                    )}
                                    <Divider />
                                    <div className="group3 gap-3">
                                        <span className="title1 font-semibold">THÔNG TIN CHI TIẾT</span>
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
                                        <span className="title1 font-semibold">GIỚI THIỆU SÁCH</span>
                                        <div className="bookcontent ">{parse(book.book_description)}</div>
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
                                            value={comment}
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
                                        {book.ratingbooks.length > 0 ? (
                                            <>
                                                {book.ratingbooks.map((comment, index) => (
                                                    <div key={index}>
                                                        <Comment key={index} comment={comment} />
                                                        {index < book.ratingbooks.length - 1 && <Divider />}
                                                    </div>
                                                ))}
                                            </>
                                        ) : (
                                            <h2>Chưa có đánh giá nào</h2>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <BookCollection data={otherBooks} topic="SÁCH GỢI Ý CHO BẠN" className={'w-[1304px]'} />
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

export default BookDetail;
