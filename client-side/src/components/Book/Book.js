import classNames from 'classnames/bind';
import styles from './Book.module.css';
import { Link } from 'react-router-dom';
import { convertPriceToString } from '~/utils/functions';
import { Rate } from 'antd';
import { memo, useState, useContext, useEffect } from 'react';
import { imageUrl } from '~/configs/axios.config';

const cx = classNames.bind(styles);

function Book({
    enable = true,
    bookimages,
    book_id,
    book_name,
    book_cost,
    book_discount,
    book_end_cost,
    book_star_rating,
    book_status,
    cart,
    cartPopper = false,
    home = false,
    collection = false,
    className,
}) {
    return (
        <li
            className={cx('book', className, {
                home,
                collection,
            })}
        >
            {book_status !== 'Còn hàng' && (
                <div className="border rounded-md px-3 font-bold text-center bg-blue-100 text-blue-500 absolute left-0 top-0">
                    <span>{book_status}</span>
                </div>
            )}

            <Link to={enable ? `/books/${book_name}` : null}>
                <img src={`${imageUrl}/${bookimages[0].book_image_url}`} alt={book_name} className={cx('image')} />
            </Link>
            <div className={cx('info')}>
                <Link to={enable ? `/books/${book_name}` : null}>
                    <span className={cx('title')}>
                        {book_name.slice(0, 45)} {book_name.length > 45 && '.....'}
                    </span>
                </Link>
                <div>
                    <span className={cx('current-price')}>{convertPriceToString(book_end_cost)}</span>
                    <span className="text-xs ml-3 line-through opacity-80">{convertPriceToString(book_cost)}</span>

                    {cartPopper && <span className={cx('quantity')}>x{cart.quantity}</span>}
                </div>
                {collection && <Rate className={cx('rate')} disabled value={book_star_rating} />}
            </div>
        </li>
    );
}

export default memo(Book);
