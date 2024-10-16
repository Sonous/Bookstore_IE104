import React from 'react';
import './RefundPolicy.css'; 

const RefundPolicy = () => {
    return (
        <div className="refund-policy">
            <header className="policy-header">
                <h1>Chính sách đổi trả - hoàn tiền</h1>
            </header>
            <main className="policy-content">
                <p>
                    Để quý khách yên tâm hơn trong việc mua sắm và trải nghiệm dịch vụ của <em>Bookstar.com</em>, 
                    chúng tôi xây dựng chính sách đổi/ trả/ hoàn tiền trên tinh thần bảo vệ quyền lợi người tiêu dùng 
                    nhằm cam kết với quý khách về chất lượng sản phẩm và dịch vụ của chúng tôi.
                </p>
                <p>
                    Khi quý khách hàng có hàng hóa mua tại <em>Bookstar.com</em> cần đổi/ trả, xin quý khách hàng liên hệ 
                    với chúng tôi qua hotline 1900-100xxx hoặc truy cập <a href="https://www.bookstar.com/doi-tra-hang" target="_blank" rel="noopener noreferrer">Bookstar.com/doi-tra-hang</a> 
                    để tìm hiểu thêm về chính sách đổi/trả.
                </p>
                <p>
                    <em>Lưu ý</em>: Các sản phẩm thuộc "Phiên chợ sách cũ" sẽ không được áp dụng chính sách đổi trả của 
                    <em>Bookstar.com</em>.
                </p>
                <h2>1. Đối tượng áp dụng</h2>
                <p>
                    Bookstar.com hỗ trợ đổi/ trả sản phẩm cho quý khách nếu:
                </p>
                <ul className='a'>
                    <li>Sản phẩm còn nguyên bao bì như hiện trạng ban đầu.</li>
                    <li>Sản phẩm còn đầy đủ phụ kiện, quà tặng khuyến mãi kèm theo.</li>
                    <li>Hóa đơn GTGT (nếu có).</li>
                </ul>

                <h2>2. Chính sách đổi trả</h2>
                <p>
                    Tất cả các đơn hàng đổi trả cần được chụp hình và gửi email về <a href="mailto:cskh@bookstar.com.vn">cskh@bookstar.com.vn</a> 
                    với tiêu đề “Đổi Trả Đơn Hàng #100xxx”:
                </p>
                <ul className='a'>
                    <li>Chụp hình về tình trạng sản phẩm, nêu rõ lỗi kỹ thuật nếu có.</li>
                    <li>Chụp hình về tình trạng bao bì, chú ý các điểm như:
                        <ul className='b'>
                            <li>Sách có được bọc màng co hay không?</li>
                            <li>Hộp có được chèn lót giấy vụn để bảo vệ khi vận chuyển hay không?</li>
                            <li>Hộp bị ướt hay không?</li>
                        </ul>
                    </li>
                </ul>
                <table>
                    <thead>
                        <tr>
                            <th>Nội dung đổi/trả sản phẩm</th>
                            <th>Cách thức xử lý</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lỗi kỹ thuật của sản phẩm - do nhà cung cấp</td>
                            <td>Bookstar.com có sản phẩm→ đổi mới cùng sản phẩm. Bookstar.com hết hàng→ Hoàn tiền (*)/ 
                                Quý khách có thể chọn mặt hàng khác tại <a href="https://www.bookstar.com/" target="_blank" rel="noopener noreferrer">www.Bookstar.com</a>.</td>
                        </tr>
                        <tr>
                            <td>Sản phẩm hỏng do quý khách</td>
                            <td>Không hỗ trợ đổi/trả</td>
                        </tr>
                        <tr>
                            <td>Lý do đổi/trả sản phẩm như: khách đặt nhầm hoặc không còn nhu cầu</td>
                            <td>Sản phẩm phải còn nguyên vẹn, không có dấu hiệu đã qua sử dụng, còn đầy đủ phụ kiện và 
                                quà tặng kèm (nếu có). Hỗ trợ thu hồi và hoàn tiền 100% giá trị sản phẩm cho quý khách hàng</td>
                        </tr>
                        <tr>
                            <td>Giao nhầm/ giao thiếu (thiếu sản phẩm đã đặt, thiếu phụ kiện, thiếu quà tặng kèm theo)</td>
                            <td>
                                <ul>
                                    <li>Giao nhầm → Đổi lại đúng sản phẩm đã đặt</li>
                                    <li>Giao thiếu → Giao bù thêm số lượng còn thiếu theo đơn hàng</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Hình thức sản phẩm không giống mô tả ban đầu</td>
                            <td>Hãy liên hệ với chúng tôi qua số Hotline 1900-00xxx, chúng tôi sẵn sàng lắng nghe 
                                và giải quyết cho bạn</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default RefundPolicy;