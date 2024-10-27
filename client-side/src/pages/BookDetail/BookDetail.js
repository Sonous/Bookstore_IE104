import React, { useState, useRef } from 'react';
import './BookDetail.css';
import Header from '~/layouts/Header/Header';
import Footer from '~/layouts/Footer/Footer';

function BookDetail() {
    const images1 = [
        { src: require('./Tớ khôn lớn từng ngày.webp'), alt: 'Tớ khôn lớn từng ngày 1' },
        { src: require('./to-khon-lon-tung-ngay-2.jpg'), alt: 'Tớ khôn lớn từng ngày 2' },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [rating, setRating] = useState(0);
    const [comments, setComments] = useState([]);
    const commentInputRef = useRef(null);

    const navigate = (index) => {
        setCurrentImageIndex(index);
    };

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    };

    const handleCommentSubmit = () => {
        const newComment = commentInputRef.current.value;
        if (newComment) {
            const combinedComment = { rating, text: newComment };
            setComments([...comments, combinedComment]);
            commentInputRef.current.value = '';
            setRating(0);
        }
    };

    const totalComments = comments.length;
    const averageRating =
        totalComments > 0 ? (comments.reduce((sum, comment) => sum + comment.rating, 0) / totalComments).toFixed(1) : 0;

    const focusCommentInput = () => {
        commentInputRef.current.focus();
    };

    return (
        <>
            <Header />
            <div className="bg-main-bg-color px-28 py-5">
                <nav className="navmenu m-5">
                    <ol>
                        <li>
                            <a href="#" onClick={() => navigate(0)}>
                                Trang chủ
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => navigate(1)}>
                                Truyện thiếu nhi
                            </a>
                        </li>
                        <li>Tớ khôn lớn từng ngày</li>
                    </ol>
                </nav>
                <div className="product-page grid-cols-7 gap-3">
                    <div className="firstpart col-span-3 bg-white rounded-lg p-5">
                        <div className="image-container">
                            <img
                                className="img1"
                                src={images1[currentImageIndex].src}
                                alt={images1[currentImageIndex].alt}
                            />
                            <div className="dots">
                                {images1.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`dot ${currentImageIndex === index ? 'active' : ''}`}
                                        onClick={() => navigate(index)}
                                    ></span>
                                ))}
                            </div>
                        </div>
                        <span className="title1">GIỚI THIỆU SÁCH</span>
                        <br />
                        <div className="bookcontent">
                            Qua các tình huống cụ thể và câu hỏi để con thảo luận cùng ba mẹ, cuốn sách này dạy trẻ 3-6
                            tuổi kỹ năng sống quan trọng như ăn uống lành mạnh, chăm sóc cơ thể, đảm bảo an toàn, kết
                            bạn, lắng nghe và chia sẻ, v...v... Với những kiến thức được trình bày khoa học cùng minh
                            họa sống động, sách sẽ giúp con chủ động học kỹ năng sống để trở thành những bạn nhỏ tự tin
                            và vững vàng, sẵn sàng giải quyết mọi vấn đề và biết tận hưởng niềm vui mỗi ngày.
                        </div>
                    </div>
                    <div className="secondpart bg-white col-span-4 rounded-lg">
                        <span className="title2">TỚ KHÔN LỚN TỪNG NGÀY</span>
                        <br />
                        <div className="group1">
                            <div className="quantity-control ">
                                <button onClick={handleDecrement}>-</button>
                                <span>{quantity}</span>
                                <button onClick={handleIncrement}>+</button>
                            </div>
                            <span className="normal">Còn 100 quyển trong kho</span>
                        </div>
                        <div className="group2">
                            <span className="price">100.300đ</span>
                            <span>|</span>
                            <div className="average-rating">
                                {[...Array(5)].map((_, index) => (
                                    <span
                                        key={index}
                                        className={`star ${index < averageRating ? 'filled' : ''}`}
                                        onClick={focusCommentInput}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <span className="dot2">.</span>
                            <span className="normal3" onClick={focusCommentInput}>
                                {totalComments} bình luận
                            </span>
                        </div>
                        <div className="button-container">
                            <button className="checkout1">Mua ngay</button>
                            <button className="checkout2">Thêm vào giỏ hàng</button>
                        </div>
                        <div className="group3">
                            <span className="title1">THÔNG TIN CHI TIẾT</span>
                            <ul className="normal">
                                <li>Tác giả: Jennifer Morre-Mallinos, Annabel Spenceley</li>
                                <li>Dịch giả: Nhui Nhui</li>
                                <li>Nhà xuất bản: Dân Trí</li>
                                <li>Kích thước: 20x23cm</li>
                                <li>Số trang: 97</li>
                                <li>Năm phát hành: 2024</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-6 my-6 gap-3'>
                  <div className="col-span-5 self-start p-5 bg-white rounded-lg grid grid-cols-2 gap-5">
                      <div>
                          <span className="title1">BÌNH LUẬN VÀ ĐÁNH GIÁ</span>
                          <div className="rating">
                              {[...Array(5)].map((_, index) => (
                                  <span
                                      key={index}
                                      className={`star ${index < rating ? 'filled' : ''}`}
                                      onClick={() => {
                                          setRating(index + 1);
                                          focusCommentInput(); // Gọi hàm focus khi click vào sao
                                      }}
                                  >
                                      ★
                                  </span>
                              ))}
                          </div>
                          <textarea
                              className="comment-input bg-main-bg-color"
                              ref={commentInputRef}
                              placeholder="Nhập bình luận của bạn..."
                          ></textarea>
                          <button className="submit-comment" onClick={handleCommentSubmit}>
                              Gửi
                          </button>
                          <div className="comments-list">
                              {comments.map((comment, index) => (
                                  <div key={index} className="comment-item">
                                      <div className="rating" onClick={focusCommentInput}>
                                          {' '}
                                          {/* Gọi hàm focus khi click vào bình luận */}
                                          {[...Array(5)].map((_, starIndex) => (
                                              <span
                                                  key={starIndex}
                                                  className={`star ${starIndex < comment.rating ? 'filled' : ''}`}
                                              >
                                                  ★
                                              </span>
                                          ))}
                                          <div>{comment.text}</div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                      <div>
                          <h1>Các đánh giá hiện tại</h1>
                      </div>
                  </div>
                  <aside className="aside col-span-1 bg-white px-2 py-7 rounded-lg">
                      <span className="title3 text-[#228B22]">SÁCH GỢI Ý CHO BẠN</span>
                      <img
                          className="suggestion-image"
                          src={require('./doraemon-tieu-thuyet_nobita-va-ban-giao-huong-dia-cau_bia.webp')}
                          alt="Doraemon"
                      />
                      <span className="normal">Doraemon - Bản giao hưởng địa cầu</span>
                      <span className="price">20.500đ</span>
                      <img className="suggestion-image" src={require('./trovethegioikl.jpg')} alt="Khủng long" />
                      <span className="normal">Trở về thế giới khủng long</span>
                      <span className="price">23.000đ</span>
                  </aside>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default BookDetail;
