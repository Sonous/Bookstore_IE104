import React from 'react';
import classNames from 'classnames/bind';
import styles from './CartPage.css';
import Footer from '~/layouts/Footer/Footer';
import Header from '~/layouts/Header/Header';
import CartItem from '~/pages/CartPage/CartItem';
import { searchResult } from '~/dataTemorary';
import './CartPage.css';

const cx = classNames.bind(styles);

function CartPage () {
    <Header />
    return (
        <>
            <Header/>
            <main className={cx('cart-page')}>
              <div className='cart-page-container'>
                <div className="cart-header-text">
                  <h1>GIỎ HÀNG</h1>
                </div>
                <div className="cart-content-wrapper">
                  <div className="cart-content-left-col-wrapper">
                      <div className="cart-content-header-wrapper">
                          <div className="header-check-box-col">
                            <input type="checkbox"></input>
                          </div>
                          <div className="header-select-all-text-col">
                              <span>Chọn tất cả</span>
                          </div>
                          <div className="header-empty-col1">
                              <span></span>
                          </div>
                          <div className="header-quantity-col">
                              Số lượng
                          </div>
                          <div className="header-total-price-col">
                              Thành tiền
                          </div>
                          <div className="header-empty-col">
                              <span></span>
                          </div>
                      </div>
                      <div className="cart-content-item-wrapper">
                        {searchResult.map((book, index) => {
                           // console.log(searchResult);
                            return  <CartItem key={index} {...book} />;
                        })}
                      </div>
                  </div>
                  <div className="cart-content-right-col-wrapper">
                     <div className='total-price-wrapper'>
                      <div className='total-price-upper'>
                        <div className='total-price-upper-1'>
                          Thành tiền
                        </div>
                        <div className='total-price-upper-2'>
                          <div id='total-price-upper-2-left'>Tổng số tiền (gồm VAT)</div>
                          <div id='total-price-upper-2-right'> 1.500.000.000đ</div>
                        </div>
                      </div>
                      <div className='total-price-lower'>
                        <button id='payment-button'>THANH TOÁN</button>
                      </div>
                     </div>
                  </div>
                </div>
              </div>                
            </main>
            <Footer/>
        </>
    );
    <Footer />
    
};

export default CartPage;
