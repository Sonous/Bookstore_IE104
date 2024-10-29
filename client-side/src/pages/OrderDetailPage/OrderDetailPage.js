import React from 'react';
import { useState } from 'react';
import './OrderDetailPage.css';
import Footer from '~/layouts/Footer/Footer';
import Header from '~/layouts/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faReceipt, faBox, faCheck, faCircleXmark} from '@fortawesome/free-solid-svg-icons'

// Dữ liệu mẫu giả lập nhiều đơn hàng
const ordersData = [
  {
    id: '1111',
    date: '20/09/2023 - 09:00',
    events: [
      { status: 'Đơn hàng mới', time: '20/09/2023 - 09:00', isCompleted: true, icon: faReceipt},
      { status: 'Đang xử lý', time: '', isCompleted: true, icon: faBox},
      { status: 'Hoàn tất', time: '', isCompleted: false, icon: faCheck},
    ],
    recipient: {
      name: 'Tuyền Qua Minh Nhân',
      phone: '0123456789',
      address: 'Đường làng, Thủ Đức, TP.HCM',
    },
    paymentMethod: 'Chuyển khoản ngân hàng',
    totalAmount: {
      subtotal: 90000,
      shippingFee: 10000,
      total: 100000,
    },
    shippingMethod: 'Giao hàng tiêu chuẩn',
    packages: [
      {
        id: 1,
        trackingNumber: '1111',
        products: [
          { name: 'Thám Tử Lừng Danh Conan - Tập 103', price: 30000, quantity: 1, image: 'https://product.hstatic.net/200000343865/product/103_8b03a2f691474a01bea7c3b7b7010519_master.jpg' },
          { name: 'Thám Tử Lừng Danh Conan - Tập 102', price: 30000, quantity: 1, image: 'https://product.hstatic.net/200000343865/product/102_359d8e4410484914b3ccee5831926b14_master.jpg' },
          { name: 'Thám Tử Lừng Danh Conan - Tập 101', price: 30000, quantity: 1, image: 'https://product.hstatic.net/200000343865/product/101_2c49d5bcea3d4b2e908c48550c1e0a39.jpg' },
        ],
        events: [
          { status: 'Đang xác nhận', time: '20/09/2023 - 09:00', isCompleted: true, icon: faReceipt},
          { status: 'Đang xử lý', time: '', isCompleted: true, icon: faBox },
          { status: 'Đang vận chuyển', time: '', isCompleted: false, icon: faTruckFast },
          { status: 'Hoàn tất', time: '',isCompleted: false, icon: faCheck },
        ],
      },
    ],
  },
  // 2
  {
    id: '2222',
    date: '11/09/2023 - 00:00',
    events: [
      { status: 'Đơn hàng mới', time: '10/09/2023 - 00:00', isCompleted: true, icon: faReceipt},
      { status: 'Đang xử lý', time: '10/09/2023 - 12:00', isCompleted: true, icon: faBox},
      { status: 'Hoàn tất', time: '12/09/2023 - 14:30', isCompleted: true, icon: faCheck},
    ],
    recipient: {
      name: 'Ái Lạc Khắc Nhĩ Tư',
      phone: '0123456789',
      address: 'Đường làng, Thủ Đức, TP.HCM',
    },
    paymentMethod: 'Tiền mặt',
    totalAmount: {
      subtotal: 90000,
      shippingFee: 10000,
      total: 100000,
    },
    shippingMethod: 'Giao hàng tiêu chuẩn',
    packages: [
      {
        id: 1,
        trackingNumber: '2222',
        products: [
          { name: 'Thám Tử Lừng Danh Conan - Tập 103', price: 30000, quantity: 1, image: 'https://product.hstatic.net/200000343865/product/103_8b03a2f691474a01bea7c3b7b7010519_master.jpg' },
          { name: 'Thám Tử Lừng Danh Conan - Tập 102', price: 30000, quantity: 1, image: 'https://product.hstatic.net/200000343865/product/102_359d8e4410484914b3ccee5831926b14_master.jpg' },
          { name: 'Thám Tử Lừng Danh Conan - Tập 101', price: 30000, quantity: 1, image: 'https://product.hstatic.net/200000343865/product/101_2c49d5bcea3d4b2e908c48550c1e0a39.jpg' },
        ],
        events: [
          { status: 'Đang xác nhận', time: '10/09/2023 - 09:00', isCompleted: true, icon: faReceipt},
          { status: 'Đang xử lý', time: '10/09/2023 - 12:00', isCompleted: true, icon: faBox },
          { status: 'Đang vận chuyển', time: '', isCompleted: true, icon: faTruckFast },
          { status: 'Hoàn tất', time: '12/09/2023 - 14:30',isCompleted: true, icon: faCheck },
        ],
      },
    ],
  },
  ////3
  {
    id: '3333',
    date: '9/9/2023 - 09:00',
    events: [
      { status: 'Đơn hàng mới', time: '9/9/2023 - 09:00', isCompleted: true, icon: faReceipt},
      { status: 'Đang xử lý', time: '', isCompleted: true, icon: faBox},
      { status: 'Bị hủy', time: '9/9/2023 - 10:00', isCompleted: true, icon: faCircleXmark},
    ],
    recipient: {
      name: 'Khục...khục..khụ khụ',
      phone: '0123456789',
      address: 'Đường làng, Thủ Đức, TP.HCM',
    },
    paymentMethod: 'Chuyển khoản ngân hàng',
    totalAmount: {
      subtotal: 90000,
      shippingFee: 10000,
      total: 100000,
    },
    shippingMethod: 'Giao hàng tiêu chuẩn',
    packages: [
      {
        id: 1,
        trackingNumber: '3333',
        products: [
          { name: 'Thám Tử Lừng Danh Conan - Tập 103', price: 30000, quantity: 1, image: 'https://product.hstatic.net/200000343865/product/103_8b03a2f691474a01bea7c3b7b7010519_master.jpg' },
          { name: 'Thám Tử Lừng Danh Conan - Tập 102', price: 30000, quantity: 1, image: 'https://product.hstatic.net/200000343865/product/102_359d8e4410484914b3ccee5831926b14_master.jpg' },
          { name: 'Thám Tử Lừng Danh Conan - Tập 101', price: 30000, quantity: 1, image: 'https://product.hstatic.net/200000343865/product/101_2c49d5bcea3d4b2e908c48550c1e0a39.jpg' },
        ],
        events: [
          { status: 'Đang xác nhận', time: '9/9/2023 - 09:00', isCompleted: true, icon: faReceipt},
          { status: 'Đang xử lý', time: '', isCompleted: true, icon: faBox },
          { status: 'Đang vận chuyển', time: '', isCompleted: true, icon: faTruckFast },
          { status: 'Bị hủy', time: '9/9/2023 - 10:00',isCompleted: true, icon: faCircleXmark },
        ],
      },
    ],
  },
];

// Hàm lấy màu theo trạng thái
const getStatusColor = (status) => {
  switch (status) {
    case 'Đơn hàng mới' :    
    case 'Đang xác nhận':
    case 'Đang xử lý':
    case 'Đang vận chuyển':
      return 'order-theme-blue';
    case 'Hoàn tất':
      return 'order-theme-green';
    case 'Bị hủy':
      return 'order-theme-orange';
    default:
      return 'order-theme-gray';
  }
};

const OrderDetailPage = () => {
  return (
    <>
    <Header/>
    <main className="order-detail-container">
    <h2 className='order-detai-page-header'>Đơn hàng của tôi</h2>
      {ordersData.map((order) => {
        const completedOrderEvents = order.events.filter(event => event.isCompleted);
        const currentOrderStatus = completedOrderEvents[completedOrderEvents.length - 1].status;
        return (
          <div key={order.id} className="order">
            <div className="order-only">
            {/* Mã đơn hàng và ngày mua */}
            <div className="order-header">
            <div className="order-header-left">
              <h1 className = "order-id">Mã đơn hàng #{order.id}</h1>
              <span className={`status ${getStatusColor(currentOrderStatus)}`}>{currentOrderStatus}</span>
            </div>

                <p className="order-date">Ngày mua: {order.date}</p>
            </div>

            {/* Thanh tiến trình tổng đơn hàng */}
            <div className={`progress-bar ${getStatusColor(currentOrderStatus)}`}>
            {
              order.events.map((step,i)=>(
                  <div key={i} className={`step-item ${step.isCompleted ? getStatusColor(currentOrderStatus) : ''}`}>
                  <FontAwesomeIcon className="status-icon" icon={step.icon}/>
                  <p>{step.status}</p>   
                  <p>{step.time}</p>     
                </div>
              ))
            }
            </div>

            {/* Thông tin người nhận, thanh toán, và tổng tiền */}
            <div className="info-section">
              <div className="info-box">
                <h2>Thông tin người nhận</h2>
                <p>{order.recipient.name}</p>
                <p>Tel: {order.recipient.phone}</p>
                <p>{order.recipient.address}</p>
              </div>
              <div className="info-box">
                <h2>Phương thức thanh toán</h2>
                <p>{order.paymentMethod}</p>
              </div>
              <div className="info-box">
                <h2>Tổng tiền</h2>
                <p>Tạm tính: {order.totalAmount.subtotal.toLocaleString('vi-VN')} đ</p>
                <p>Phí vận chuyển: {order.totalAmount.shippingFee.toLocaleString('vi-VN')} đ</p>
                <h2>Tổng số tiền (gồm VAT): {order.totalAmount.total.toLocaleString('vi-VN')} đ </h2>
              </div>
            </div>     

            {/* Các nút tùy thuộc vào trạng thái đơn hàng */}
            <div className="order-actions">
              {currentOrderStatus === "Đơn hàng mới" || currentOrderStatus === "Đang xử lý" ? (
                <>
                  <button className="btn-cancel-order">Hủy đơn</button>
                  <button className="btn-reorder">Mua lại</button>
                </>
              ) : currentOrderStatus === "Hoàn tất" ? (
                <>
                  <button className="btn-review-order">Đánh giá đơn hàng</button>
                  <button className="btn-reorder">Mua lại</button>
                </>
              ) : currentOrderStatus === "Bị hủy" ? (
                <button className="btn-reorder">Mua lại</button>
              ) : null}
            </div>
            </div>
            <div className="shipping-method-box">
                <h2>Phương thức vận chuyển</h2>
                <p>{order.shippingMethod} </p>
            </div>

            {/* Kiện hàng */}
            {order.packages.map((pkg) => {
            const completedPkgEvents = pkg.events.filter(event => event.isCompleted);
            const currentPkgStatus = completedPkgEvents[completedPkgEvents.length - 1].status;
            return (
              <div className="package-only">
              <div key={pkg.id} className="package">
                <div className="package-header">
                  <h2>Kiện hàng #{pkg.id} | Mã đơn hàng: {pkg.trackingNumber}</h2>
                  <div className="package-header-right">
                    <a href="" className="shipping-lookup">Tra cứu vận chuyển</a>
                    <span className={`status ${getStatusColor(currentPkgStatus)}`}>{currentPkgStatus}</span>
                  </div>
                </div>

                {/* Thanh tiến trình của kiệns hàng */}
                <div className={`progress-bar ${getStatusColor(currentPkgStatus)}`}>
                {
                  pkg.events.map((step,i)=>(
                    <div key={i} className={`step-item ${step.isCompleted ? getStatusColor(currentPkgStatus) : ''}`}>
                    <FontAwesomeIcon className="status-icon" icon={step.icon}/>
                    <p>{step.status}</p>   
                    <p>{step.time}</p>     
                  </div>
                ))}
                </div>

                {/* Sản phẩm trong kiện hàng */}
                <div className="product-list">
                  <div className="product-header">
                    <span className="product-cell"></span>
                    <span className="product-cell product-name-label">Tên sản phẩm</span>
                    <span className="product-cell">Đơn giá</span>
                    <span className="product-cell">Số lượng</span>
                    <span className="product-cell">Thành tiền</span>
                  </div>
                  {pkg.products.map((product, index) => (
                    <div key={index}>
                      <div className="product-row">
                        <img className = "product-image" src={product.image} alt={product.name} />
                        <span className="product-cell product-name">{product.name}</span>
                        <span className="product-cell">{product.price.toLocaleString('vi-VN')} đ</span>
                        <span className="product-cell">{product.quantity}</span>
                        <span className="product-cell">{(product.price * product.quantity).toLocaleString('vi-VN')} đ</span>
                      </div>
                    </div>
                  ))}
                  <div className="total-product-row">
                    <span className="total-label">Tổng tiền: </span>
                    <span className="total-amount">
                    {pkg.products
                        .reduce((total, product) => total + product.price * product.quantity, 0)
                        .toLocaleString('vi-VN')} đ
                    </span>
                  </div>
                </div>
              </div>
              </div>
            )})}
                   

          </div>
        );
      })}
    </main>
    <Footer/>
    </>
  );
};

export default OrderDetailPage;
