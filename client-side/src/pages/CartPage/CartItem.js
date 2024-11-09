import React, { useContext, useEffect, useState } from 'react';
import './CartItem.css';
import './CartItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import Book from '~/components/Book/Book';
import cartApi from '~/apis/cartApi';
import Swal from 'sweetalert2';
import { convertPriceToString } from '~/utils/functions';
import { UserContext } from '~/context/UserContextProvider';

function CartItem({ book, selectItem, setIsReload, isChecked }) {
    const [quantity, setQuantity] = useState(book.cart.quantity);
    const [inputValue, setInputValue] = useState(book.cart.quantity);
    const { user, setIsReloadCart } = useContext(UserContext);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                await cartApi.updateQuantityItem(user.user_id, book.book_id, quantity);
                setIsReload((prev) => !prev);
                setInputValue(quantity);
                setIsReloadCart(true);
            } catch (error) {
                console.error(error);
            }
        };

        fetchApi();
    }, [quantity]);

    const handleDeleteItem = async () => {
        try {
            const result = await Swal.fire({
                icon: 'question',
                text: 'Bạn có muốn xóa món hàng này không?',
                showDenyButton: true,
            });

            if (result.isConfirmed) {
                await cartApi.updateQuantityItem(user.user_id, book.book_id, 0);
                setIsReload((prev) => !prev);
                setIsReloadCart(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="cart-content-product-item px-4 gap-20">
            <div className="basis-[60%] flex gap-2">
                <div className="check-box-col ">
                    <input type="checkbox" onChange={(e) => selectItem(e, book.book_id)} checked={isChecked} />
                </div>

                <Book {...book} className={'flex-1 my-5'} />
            </div>
            <div className="flex items-center basis-[40%] gap-5">
                <div className="basis-[45%] flex justify-center">
                    <span className="quantity-wrapper ">
                        <div className="quantity-minus">
                            <button
                                onClick={() => {
                                    if (quantity > 1) {
                                        setQuantity((prev) => prev - 1);
                                    }
                                }}
                            >
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                        </div>
                        <div className="quantity-input">
                            <input
                                className="w-[40px] text-center"
                                type="text"
                                pattern="[1-9]*"
                                value={inputValue}
                                onChange={(e) => {
                                    const value = parseInt(e.target.value); // Chuyển đổi sang số nguyên

                                    if (value > book.book_available) {
                                        Swal.fire({
                                            toast: true,
                                            icon: 'warning',
                                            showConfirmButton: false,
                                            timer: 1500,
                                            timerProgressBar: true,
                                            position: 'top-end',
                                            text: `Số lượng yêu cầu cho ${value} không có sẵn.`,
                                        });
                                        return;
                                    }

                                    if (value >= 1) {
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
                        </div>
                        <div className="quantity-plus">
                            <button
                                onClick={() => {
                                    setQuantity((prev) => prev + 1);
                                }}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    </span>
                </div>
                <div className="total-price-col basis-[45%] w-[100px]">
                    {convertPriceToString(book.book_end_cost * quantity)}
                </div>
                <div className="remove-icon-col basis-[10%]">
                    <button onClick={handleDeleteItem}>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
