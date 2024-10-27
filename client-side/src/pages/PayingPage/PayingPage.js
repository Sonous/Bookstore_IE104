import React, { useState } from 'react';
import styles from './PayingPage.module.css';
import Header from '~/layouts/Header/Header';
import Footer from '~/layouts/Footer/Footer';

const PayingPage = () => {
    return (
        <div className={styles.container}>
            {/* Header */}
            <Header />

            {/* Main content */}
            <form className={styles.formSection}>
                {/* Address Information */}
                <div className={styles.addressInfoContainer}>
                    <div className={styles.sectionTitle}>Địa chỉ giao hàng</div>
                    <div className={styles.formGroup}>
                        <label>Họ và tên:</label>
                        <input type="text" placeholder="Nhập họ và tên" />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Số điện thoại:</label>
                        <input type="tel" placeholder="Nhập số điện thoại" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="city">Tỉnh/Thành phố:</label>
                        <input type="text" id="city" placeholder="Nhập tỉnh/thành phố" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="district">Quận/Huyện:</label>
                        <input type="text" id="district" placeholder="Nhập quận/huyện" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="ward">Phường/Xã:</label>
                        <input type="text" id="ward" placeholder="Nhập phường/xã" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address">Địa chỉ cụ thể:</label>
                        <input type="text" id="address" placeholder="Nhập địa chỉ cụ thể" />
                    </div>
                </div>

                {/* Payment Method */}
                <div className={styles.paymentContainer}>
                    <div className={styles.sectionTitle}>Phương thức thanh toán</div>
                    <div className={styles.paymentMethods}>
                        <div>
                            <input type="radio" id="vnpay" name="payment" value="vnpay" className='mr-2'/>
                            <label htmlFor="vnpay">Thanh toán khi nhận hàng</label>
                        </div>
                        <div>
                            <input type="radio" id="momo" name="payment" value="momo" className='mr-2'/>
                            <label htmlFor="momo">Momo</label>
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className={styles.orderSummary}>
                    <div className={styles.sectionTitle}>Tóm tắt đơn hàng</div>
                    <div className={styles.orderDetail}>
                        <span>Sản phẩm:</span>
                        <span>1</span>
                        <span>2</span>
                        <span>Thành tiền:</span>
                        <span>500,000 VNĐ</span>
                        <span>Phí vận chuyển:</span>
                        <span>30,000 VNĐ</span>
                        <span>Tổng:</span>
                        <span>530,000 VNĐ</span>
                    </div>
                </div>

                {/* Order Button */}
                <div className={styles.orderButtonContainer}>
                    <button className={styles.orderButton}>Đặt hàng</button>
                </div>
            </form>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default PayingPage;
