import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CartItem.css';
import Footer from '~/layouts/Footer/Footer';
import Header from '~/layouts/Header/Header';
import './CartItem.css';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CartItem ({
    title,
    image,
    currentPrice,
    quantity
}) {
    <Header />

    let [quantity_,setCount] = useState(quantity);  
    let  numberOfItem = Number(quantity_);
    quantity_ = Number(numberOfItem);

    return (
        <div>
        <div className="cart-content-product-item">
            <div className="check-box-col">
                <input type="checkbox"></input>
            </div>
            <div className="img-col">
                <img src={images[image]}></img>
            </div>
            <div className="tittle-and-price-col">
                <div>{title}</div>
                <div>{currentPrice}đ</div>
            </div>
            <div className="quantity-col">
                <div className='quantity-wrapper'>
                    <div className='quantity-minus'>
                        <button onClick={() => setCount(numberOfItem-1)}><FontAwesomeIcon icon={faMinus} /></button>
                    </div>
                    <div className='quantity-input'>
                        <input id= 'item-quantity-input'  type='text' min={0} value={numberOfItem} onChange={e => setCount(e.target.value)}></input>
                    </div>   
                    <div className='quantity-plus'>
                        <button onClick={() => setCount(numberOfItem+1)}><FontAwesomeIcon icon={faPlus} /></button>
                    </div>              
                </div>
            </div>
            <div className="total-price-col">{numberOfItem * currentPrice}đ</div>
            <div className="remove-icon-col">
                <button><FontAwesomeIcon icon={faTrashCan} /></button> 
            </div>
        </div>
        <div className='border-product'></div>
        </div>
    );

    <Footer />
};

export default CartItem;

