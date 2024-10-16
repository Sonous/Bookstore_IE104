import React from 'react';
import './ShoppingGuide.css'; 

const ShoppingGuide = () => {
    return (
        <div className="shopping-guide">
            <header className="guide-header">
                <h1>Hướng dẫn mua hàng</h1>
            </header>
            <main className="guide-content">
                <p>
                    Để tiện cho việc mua sắm như: nhận thông tin chương trình khuyến mãi, mua sắm, mã giảm giá BookStar, 
                    ví Voucher BookStar, sách đã thêm vào mục yêu thích,… bạn nên đăng ký tài khoản mua hàng tại BookStar. 
                    Hiện thao tác này thực hiện rất nhanh và đơn giản, chỉ cần làm theo các bước hướng dẫn sau:
                </p>
                
                <h2>1. Đăng ký tài khoản BookStar</h2>
                <p>
                    Truy cập vào web BookStar tại <a href="https://www.bookstar.com/" target="_blank" rel="noopener noreferrer">https://www.bookstar.com/</a>. Sau đó nhìn lên góc phải trên cùng tìm vị trí có nút Đăng Nhập hoặc Đăng Ký. 
                </p>
                
                <h2>2. Đặt hàng trên BookStar</h2>
                <p>
                    Trước khi mua hàng, khách hàng hãy Đăng nhập tài khoản BookStar để có thể sử dụng ví Voucher BookStar cũng 
                    như điểm tích lũy F-Point (nếu có). Các bước đặt hàng trên BookStar đơn giản bạn có thể tham khảo như sau:
                </p>
                <p>
                    <strong>Bước 1:</strong> Đăng nhập vào tài khoản BookStar của bạn.
                </p>
                <p>
                    <strong>Bước 2:</strong> Tìm kiếm và tham khảo các loại ưu đãi, khuyến mãi, mã giảm giá BookStar đang có hiệu lực hôm nay. 
                    Hoặc tham khảo ưu đãi ở banner các chương trình khuyến mãi sau đây.
                </p>
                <p>
                    <strong>Bước 3:</strong> Sử dụng công cụ BookStar hỗ trợ là thanh tìm kiếm để tìm tin sản phẩm, tựa sách bạn đang có nhu cầu đặt mua. 
                    Lần lượt cho vào giỏ hàng. Bạn có thể tìm kiếm sản phẩm đầu tiên qua khung tra cứu sau đây:
                </p>
                <p>
                    <strong>Bước 4:</strong> Tiến hành thanh toán đơn hàng. Ở bước này bạn nhớ kiểm tra tối ưu đơn hàng bằng cách:
                    <ul className='a'>
                        <li>Áp dụng các loại mã giảm giá đã lưu trong ví Voucher BookStar trước đó (bước 2).</li>
                        <li>Kiểm tra và tối ưu thêm các ưu đãi liên quan tới thanh toán để được giảm thêm.</li>
                    </ul>
                </p>
                <p>
                    <strong>Bước 5:</strong> Tiến hành xác nhận thanh toán đơn hàng và chờ BookStar giao hàng thôi.
                </p>
            </main>
        </div>
    );
};

export default ShoppingGuide;
