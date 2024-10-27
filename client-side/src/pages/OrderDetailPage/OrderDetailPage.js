import React from 'react';
import './OrderDetailPage.css';
import Footer from '~/layouts/Footer/Footer';
import Header from '~/layouts/Header/Header';
// Dữ liệu mẫu giả lập nhiều đơn hàng
const ordersData = [
  {
    id: '1111',
    date: '10/09/2023 - 09:00',
    status: 'Hoàn tất',
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
        trackingNumber: '402176646',
        status: 'Hoàn tất',
        products: [
          { name: 'Thám Tử Lừng Danh Conan - Tập 103', price: 30000, quantity: 1, image: 'https://product.hstatic.net/200000343865/product/103_8b03a2f691474a01bea7c3b7b7010519_master.jpg' },
          { name: 'Thám Tử Lừng Danh Conan - Tập 102', price: 30000, quantity: 1, image: 'https://product.hstatic.net/200000343865/product/102_359d8e4410484914b3ccee5831926b14_master.jpg' },
          { name: 'Thám Tử Lừng Danh Conan - Tập 101', price: 30000, quantity: 1, image: 'https://product.hstatic.net/200000343865/product/101_2c49d5bcea3d4b2e908c48550c1e0a39.jpg' },
        ],
        events: [
          { status: 'Đang xác nhận', time: '10/09/2023 - 09:00' },
          { status: 'Đang xử lý', time: '10/09/2023 - 12:00' },
          { status: 'Hoàn tất', time: '11/09/2023 - 10:00' },
        ],
      },
    ],
  },
  {
    id: '222222222',
    date: '9/09/2023 - 09:00',
    status: 'Đang xử lý',
    recipient: {
      name: 'Tuyền Qua Minh Nhân',
      phone: '0123456789',
      address: 'Đường làng, Thủ Đức, TP.HCM',
    },
    paymentMethod: 'Chuyển khoản ngân hàng',
    totalAmount: {
      subtotal: 30000,
      shippingFee: 10000,
      total: 40000,
    },
    shippingMethod: 'Giao hàng tiêu chuẩn',
    packages: [
      {
        id: 1,
        trackingNumber: '222222222',
        status: 'Đang vận chuyển',
        products: [
          { name: 'Thám Tử Lừng Danh Conan - Tập 103', price: 30000, quantity: 1, image: 'https://product.hstatic.net/200000343865/product/103_8b03a2f691474a01bea7c3b7b7010519_master.jpg' },
        ],
        events: [
          { status: 'Đang xác nhận', time: '10/09/2023 - 09:00' },
          { status: 'Đang xử lý', time: '10/09/2023 - 12:00' },
          { status: 'Hoàn tất', time: '11/09/2023 - 10:00' },
        ],
      },
      {
        id: 2,
        trackingNumber: '222222222',
        status: 'Đang xử lý',
        products: [
          { name: 'Thám Tử Lừng Danh Conan - Tập 103', price: 30000, quantity: 1, image: 'https://product.hstatic.net/200000343865/product/103_8b03a2f691474a01bea7c3b7b7010519_master.jpg' },
        ],
        events: [
          { status: 'Đang xác nhận', time: '10/09/2023 - 10:00' },
          { status: 'Đang xử lý', time: '10/09/2023 - 14:00' },
          { status: 'Hoàn tất', time: '11/09/2023 - 12:00' },
        ],
      },
    ],
  },
  {
    id: '333333333',
    date: '10/09/2023 - 09:00',
    status: 'Bị hủy',
    recipient: {
      name: 'Tuyền Qua Minh Nhân',
      phone: '0123456789',
      address: 'Đường làng, Thủ Đức, TP.HCM',
    },
    paymentMethod: 'Chuyển khoản ngân hàng',
    totalAmount: {
      subtotal: 60000,
      shippingFee: 10000,
      total: 70000,
    },
    shippingMethod: 'Giao hàng tiêu chuẩn',
    packages: [
      {
        id: 1,
        trackingNumber: '333333333',
        status: 'Bị hủy',
        products: [
          { name: 'Thám Tử Lừng Danh Conan - Tập 103', price: 30000, quantity: 1, image: 'https://product.hstatic.net/200000343865/product/103_8b03a2f691474a01bea7c3b7b7010519_master.jpg' },
          { name: 'Thám Tử Lừng Danh Conan - Tập 102', price: 30000, quantity: 1, image: 'https://product.hstatic.net/200000343865/product/102_359d8e4410484914b3ccee5831926b14_master.jpg' },
        ],
        events: [
          { status: 'Đang xác nhận', time: '10/09/2023 - 09:00' },
          { status: 'Đang xử lý', time: '10/09/2023 - 12:00' },
          { status: 'Hoàn tất', time: '11/09/2023 - 10:00' },
        ],
      },
      {
        id: 2,
        trackingNumber: '333333333',
        status: 'Bị hủy',
        products: [
          { name: 'Thám Tử Lừng Danh Conan - Tập 102', price: 30000, quantity: 1, image: 'https://product.hstatic.net/200000343865/product/102_359d8e4410484914b3ccee5831926b14_master.jpg' },
        ],
        events: [
          { status: 'Đang xác nhận', time: '10/09/2023 - 10:00' },
          { status: 'Đang xử lý', time: '10/09/2023 - 14:00' },
          { status: 'Hoàn tất', time: '11/09/2023 - 12:00' },
        ],
      },
    ],
  },
];

// Hàm lấy màu theo trạng thái
const getStatusColor = (status) => {
  switch (status) {
    case 'Đang xử lý':
      return 'blue';
    case 'Đang vận chuyển':
      return 'blue';
    case 'Hoàn tất':
      return 'green';
    case 'Bị hủy':
      return 'orange';
    default:
      return 'gray';
  }
};

const OrderDetailPage = () => {
  const steps = [
    { label: 'Đang xác nhận', key: 'processing' },
    { label: 'Đang xử lý', key: 'processing' },
    { label: 'Hoàn tất', key: 'completed' },
  ];

  return (
    <>
    <Header/>
    <main className="order-detail-container">
    <h2 className='order-detai-page-header'>Đơn hàng của tôi</h2>
      {ordersData.map((order) => {
        //const currentStepIndex = steps.findIndex((step) => step.key === order.status);

        return (
          <div key={order.id} className="order">
            <div className="order-only">
            {/* Mã đơn hàng và ngày mua */}
            <div className="order-header">
              <h1>Mã đơn hàng #{order.id}</h1>
              <span className={`status ${getStatusColor(order.status)}`}>{order.status}</span>
              <p className="order-date">Ngày mua: {order.date}</p>
            </div>

            {/* Thanh tiến trình tổng đơn hàng */}
            <div className="progress-bar">
              
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
            </div>
            <div className="shipping-method-box">
                <h2>Phương thức vận chuyển</h2>
                <p>{order.shippingMethod} </p>
            </div>
            {/* Kiện hàng */}
            {order.packages.map((pkg) => (
              <div className="package-only">
              <div key={pkg.id} className="package">
                <div className="package-header">
                  <h2>Kiện hàng #{pkg.id} | Mã đơn hàng: {pkg.trackingNumber}</h2>
                  <a href="" className="shipping-lookup">Tra cứu vận chuyển</a>
                  <span className={`status ${getStatusColor(pkg.status)}`}>{pkg.status}</span>
                </div>

                {/* Thanh tiến trình của kiệns hàng */}
                <div className="progress-bar">

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
                  {/* Tổng tiền  */}
                </div>
              </div>
              </div>
            ))}
                   

          </div>
        );
      })}
    </main>
    <Footer/>
    </>
  );
};

export default OrderDetailPage;
