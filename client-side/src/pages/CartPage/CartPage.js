import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CartPage.css';
import Footer from '~/layouts/Footer/Footer';
import Header from '~/layouts/Header/Header';
import CartItem from '~/pages/CartPage/CartItem';
import './CartPage.css';
import userApi from '~/apis/userApi';
import { UserContext } from '~/context/UserContextProvider';
import { convertPriceToString } from '~/utils/functions';
import Loading from '~/components/Loading';
import transportApi from '~/apis/transportApi';
import images from '~/assets/images';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function CartPage() {
    const [cartItems, setCartItems] = useState();
    const [checkedItems, setCheckedItems] = useState([]);
    const [totalBooksCost, setTotalBooksCost] = useState(0);
    const [isReload, setIsReload] = useState(false);
    const [transportMethod, setTransportMethod] = useState('');
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const items = await userApi.getCartItems(user.user_id);

                setCartItems(items);
            } catch (error) {
                console.error(error);
            }
        };

        if (user) fetchApi();
    }, [user, isReload]);

    useEffect(() => {
        setTotalBooksCost(
            checkedItems.reduce((total, currId) => {
                const current = cartItems.find((book) => book.book_id === currId);

                return (total += parseFloat(current.book_end_cost * current.cart.quantity)) && total;
            }, 0),
        );
    }, [checkedItems, isReload, cartItems]);

    useEffect(() => {
        const fetchApi = async () => {
            const method = await transportApi.getTransportMethodById();

            setTransportMethod(method);
        };

        fetchApi();
    }, []);

    const selectItem = (e, bookId) => {
        if (e.target.checked) {
            setCheckedItems((prev) => [...prev, bookId]);
        } else {
            setCheckedItems((prev) => prev.filter((id) => id !== bookId));
        }
    };

    const navigateToPayingPage = () => {
        if (checkedItems.length > 0) {
            const order = {
                order_books: cartItems.filter((book) => {
                    return checkedItems.includes(book.book_id);
                }),
                books_total_prices: totalBooksCost,
                transport_name: transportMethod.transport_name,
                transport_cost: transportMethod.transport_cost,
                order_total_cost: transportMethod.transport_cost + totalBooksCost,
            };

            console.log(order);

            localStorage.setItem('order', JSON.stringify(order));
            navigate('/paying');
        }
    };

    return (
        <>
            {user && cartItems ? (
                <>
                    <Header />
                    {cartItems.length > 0 ? (
                        <main className={cx('cart-page')}>
                            <div className="cart-page-container">
                                <div className="cart-header-text">
                                    <h1>GIỎ HÀNG</h1>
                                </div>
                                <div className="cart-content-wrapper">
                                    <div className="cart-content-left-col-wrapper basis-[70%]">
                                        <div className="flex justify-between px-4  rounded-lg py-3 gap-24 items-center bg-white mb-3">
                                            <div className=" flex text-sm font-semibold items-center gap-2 ">
                                                <div className="header-check-box-col">
                                                    <input
                                                        type="checkbox"
                                                        onChange={(e) => {
                                                            if (e.target.checked) {
                                                                const arrId = cartItems.map((item) => item.book_id);

                                                                setCheckedItems(arrId);
                                                                return;
                                                            }
                                                            setCheckedItems([]);
                                                        }}
                                                        checked={checkedItems.length === cartItems.length}
                                                    />
                                                </div>
                                                <p>Chọn tất cả ({cartItems?.length ? cartItems.length : 0} sản phẩm)</p>
                                            </div>
                                            <div className="basis-[40%] flex items-center gap-5">
                                                <p className=" basis-[45%] text-center">Số lượng</p>
                                                <p className=" basis-[45%]  text-center">Thành tiền</p>
                                                <p className=" basis-[10%]  text-center"></p>
                                            </div>
                                        </div>
                                        <div className="cart-content-item-wrapper ">
                                            {cartItems.map((book, index) => {
                                                return (
                                                    <div key={index}>
                                                        <CartItem
                                                            book={book}
                                                            selectItem={selectItem}
                                                            isChecked={checkedItems.includes(book.book_id)}
                                                            setIsReload={setIsReload}
                                                        />
                                                        {index !== cartItems.length - 1 && (
                                                            <div className="border-product"></div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="cart-content-right-col-wrapper basis-[30%]">
                                        <div className="total-price-wrapper w-[350px] flex flex-col gap-3">
                                            <div className="total-price-upper">
                                                <div className="flex gap-3">
                                                    <div className="total-price-upper-1 flex-1">Thành tiền</div>
                                                    <span>{convertPriceToString(totalBooksCost)}</span>
                                                </div>
                                                {checkedItems.length > 0 && (
                                                    <div className="flex gap-5">
                                                        <div className="total-price-upper-1 flex-1">
                                                            Phí vận chuyển ({transportMethod.transport_name})
                                                        </div>
                                                        <span>
                                                            {convertPriceToString(transportMethod.transport_cost)}
                                                        </span>
                                                    </div>
                                                )}
                                                <div className="total-price-upper-2 gap-3">
                                                    <div className="flex-1">Tổng số tiền (gồm VAT)</div>
                                                    <div>
                                                        {convertPriceToString(
                                                            checkedItems.length > 0
                                                                ? totalBooksCost + transportMethod.transport_cost
                                                                : 0,
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="total-price-lower">
                                                <button
                                                    className={classNames(
                                                        'p-3 bg-primary-color w-full rounded-md text-white font-medium hover:opacity-80',
                                                        {
                                                            'bg-neutral-400 hover:cursor-not-allowed hover:!opacity-100':
                                                                checkedItems.length < 1,
                                                        },
                                                    )}
                                                    disabled={checkedItems.length < 1}
                                                    onClick={navigateToPayingPage}
                                                >
                                                    THANH TOÁN
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    ) : (
                        <div className="bg-main-bg-color">
                            <div className="p-20 flex flex-col items-center">
                                <img src={images.nothingIcon} alt="nothing" className="h-32 w-32" />
                                <span>Chưa có sản phẩm nào...</span>
                            </div>
                        </div>
                    )}
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

export default CartPage;
