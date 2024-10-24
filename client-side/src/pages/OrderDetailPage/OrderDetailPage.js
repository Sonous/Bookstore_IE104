import React from 'react';
import './OrderDetailPage.css';
import Header from '~/layouts/Header/Header';
import Footer from '~/layouts/Footer/Footer';

const OrderDetailPage = () => {

  const orders = [ // Dữ liệu để sau tui sửa lại nhen :((
    {
      shop: 'NXB Kim Đồng',
      date: '21/10/2024',
      items: [
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdqti1nVx_8GgSm_riofXTit03zut8cB-KQ&s', // Link đến ảnh sản phẩm 1
          name: 'MASHLE - Tập 6',
          quantity: 1,
          price: 30000,
        },
        {
          image: 'https://product.hstatic.net/200000343865/product/2_b4c9e9e243e04fff83976d625553c041_master.jpg', // Link đến ảnh sản phẩm 2
          name: 'Bài học cuộc sống từ "anh hai" Uramichi - Tập 2 (Tặng kèm Bookmark)',
          quantity: 1,
          price: 30000,
        },
      ],
      total: 60000,
    },
    {
      shop: 'Skybooks',
      date: '20/10/2024',
      items: [
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZHWY9uIhiq7Jdq_idUdkh5S-fIWcD-W0yA&s', 
          name: 'Combo Sách Tâm Lý Học Nhập Môn: Toàn Thư Tâm Lý Học + Từ Điển Tâm Lý',
          quantity: 1,
          price: 204520,
        },
      ],
      total: 204520,
    },
    {
      shop: 'NXB Kim Đồng',
      date: '10/10/2024',
      items: [
        {
          image: 'https://product.hstatic.net/200000343865/product/103_8b03a2f691474a01bea7c3b7b7010519_master.jpg', 
          name: 'Thám tử lừng danh Conan - Tập 103',
          quantity: 1,
          price: 30000,
        },
        {
          image: 'https://product.hstatic.net/200000343865/product/21_3894c88eca014ead8a7cec1d32de88e3_master.jpg', 
          name: 'Dr. Stone - Tập 21',
          quantity: 1,
          price: 30000,
        },
        {
            image: 'https://product.hstatic.net/200000343865/product/10_cae5304d7430474191fadd9a8db38ce1_master.jpg', 
            name: 'Dr. Stone - Tập 10',
            quantity: 1,
            price: 30000,
        }
      ],
      total: 90000,
    }
  ];

  return (
    <>
      <Header />
      <main className='bg-main-bg-color flex justify-center items-center py-7'>

      <div className="order-detail-page">
        <h2 className = "order-page-header">Đơn hàng của tôi</h2>
        {orders.map((order, index) => (
          <div key={index} className="order-section">
            <div className="order-header">
              <h3 className="order-shop">{order.shop}</h3>
              <span className="order-date">{order.date}</span>
            </div>
            <hr className="order-hr"/>
            {order.items.map((item, itemIndex) => (
            <>
              <div key={itemIndex} className="order-item">
                <img src={item.image} alt={item.name} className="order-item-image" />
                <div className="order-item-details">
                  <p>{item.name}</p>
                  <div className="order-item-info">
                    <span>x{item.quantity}</span>
                    <span className="order-item-price">{item.price.toLocaleString('vi-VN')} đ</span>
                  </div>
                </div>
               
              </div>
              <hr className="order-hr"/> 
              </>
            ))}
            <div className="order-total">
              <p>Thành tiền: <strong>{order.total.toLocaleString('vi-VN')} đ</strong></p>
            </div>
          </div>
        ))}
      </div>
      </main>
      <Footer />
    </>
  );
};

export default OrderDetailPage;
