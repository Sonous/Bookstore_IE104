import React, { useState } from 'react';
import styles from './PayingPage.module.css';
import Header from '~/layouts/Header/Header';
import Footer from '~/layouts/Footer/Footer';

const PayingPage = () => {
  // State variables for section titles
  const [personalInfoTitle, setPersonalInfoTitle] = useState('Thông tin cá nhân');
  const [addressInfoTitle, setAddressInfoTitle] = useState('Thông tin địa chỉ');
  const [shippingMethodTitle, setShippingMethodTitle] = useState('Phương thức vận chuyển');
  const [paymentMethodTitle, setPaymentMethodTitle] = useState('Phương thức thanh toán');
  const [otherInfoTitle, setOtherInfoTitle] = useState('Thông tin khác');
  const [orderSummaryTitle, setOrderSummaryTitle] = useState('Tóm tắt đơn hàng');

  return (
    <div className={styles.container}>
      {/* Header */}
      <Header />

      {/* Main content */}
      <div className={styles.formSection}>

        {/* Personal Information */}
        <div className={styles.personalInfoContainer}>
          <input
            type="text"
            value={personalInfoTitle}
            onChange={(e) => setPersonalInfoTitle(e.target.value)}
            className={styles.sectionTitle}
            placeholder="Nhập tiêu đề thông tin cá nhân"
          />
          <div className={styles.formGroup}>
            <label>Họ và tên:</label>
            <input type="text" placeholder="Nhập họ và tên" />
          </div>
          <div className={styles.formGroup}>
            <label>Email:</label>
            <input type="email" placeholder="Nhập email" />
          </div>
          <div className={styles.formGroup}>
            <label>Số điện thoại:</label>
            <input type="tel" placeholder="Nhập số điện thoại" />
          </div>
        </div>

        {/* Address Information */}
        <div className={styles.addressInfoContainer}>
          <input
            type="text"
            value={addressInfoTitle}
            onChange={(e) => setAddressInfoTitle(e.target.value)}
            className={styles.sectionTitle}
            placeholder="Nhập tiêu đề thông tin địa chỉ"
          />
          <div className={styles.formGroup}>
            <label htmlFor="country">Quốc gia:</label>
            <select id="country">
              <option value="vietnam">Việt Nam</option>
            </select>
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

        {/* Shipping Method */}
        <div className={styles.shippingContainer}>
          <input
            type="text"
            value={shippingMethodTitle}
            onChange={(e) => setShippingMethodTitle(e.target.value)}
            className={styles.sectionTitle}
            placeholder="Nhập tiêu đề phương thức vận chuyển"
          />
          <div className={styles.shippingMethods}>
            <div>
              <input type="radio" id="standard" name="shipping" value="standard" />
              <label htmlFor="standard">Standard Shipping</label>
            </div>
            <div>
              <input type="radio" id="express" name="shipping" value="express" />
              <label htmlFor="express">Express Shipping</label>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className={styles.paymentContainer}>
          <input
            type="text"
            value={paymentMethodTitle}
            onChange={(e) => setPaymentMethodTitle(e.target.value)}
            className={styles.sectionTitle}
            placeholder="Nhập tiêu đề phương thức thanh toán"
          />
          <div className={styles.paymentMethods}>
            <div>
              <input type="radio" id="vnpay" name="payment" value="vnpay" />
              <label htmlFor="vnpay">VNPAY</label>
            </div>
            <div>
              <input type="radio" id="momo" name="payment" value="momo" />
              <label htmlFor="momo">Momo</label>
            </div>
            <div>
              <input type="radio" id="visa" name="payment" value="visa" />
              <label htmlFor="visa">Visa/Master/JCB</label>
            </div>
          </div>
        </div>

        {/* Other Information */}
        <div className={styles.promoContainer}>
          <input
            type="text"
            value={otherInfoTitle}
            onChange={(e) => setOtherInfoTitle(e.target.value)}
            className={styles.sectionTitle}
            placeholder="Nhập tiêu đề thông tin khác"
          />
          <div className={styles.paymentMethods}>
            <input type="radio" id="GTGT" name="payment" value="GTGT" />
            <label htmlFor="GTGT">Xuất hóa đơn giá trị gia tăng</label>
          </div>
          <div className={styles.formGroup}>
            <label>Ghi chú:</label>
            <textarea rows="4" placeholder="Nhập ghi chú (nếu có)"></textarea>
          </div>
        </div>

        {/* Order Summary */}
        <div className={styles.orderSummary}>
          <input
            type="text"
            value={orderSummaryTitle}
            onChange={(e) => setOrderSummaryTitle(e.target.value)}
            className={styles.sectionTitle}
            placeholder="Nhập tiêu đề tóm tắt đơn hàng"
          />
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
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PayingPage;
